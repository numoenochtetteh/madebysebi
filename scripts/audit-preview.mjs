import fs from "node:fs";
import path from "node:path";
import { gzipSync } from "node:zlib";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
const require = createRequire(path.join(process.env.AUDIT_TOOL_ROOT || "/vercel/audit", "package.json"));
const {default: puppeteer} = await import(pathToFileURL(require.resolve("puppeteer-core")).href);
const {default: lighthouse} = await import(pathToFileURL(require.resolve("lighthouse")).href);
const {default: desktopConfig} = await import(pathToFileURL(require.resolve("lighthouse/core/config/desktop-config.js")).href);
const [label="baseline", route="/", profile="mobile", run="1"] = process.argv.slice(2);
const origin = new URL(process.env.PREVIEW_URL).origin;
const url = new URL(route, origin).href;
const access = process.env.MADEBYSEBI_AUDIT_ACCESS_URL;
if (!access || new URL(access).origin !== origin) throw Error("An origin-matched temporary preview access URL is required");
const executablePath = process.env.AUDIT_CHROME_PATH || JSON.parse(fs.readFileSync("/vercel/audit/browser.json","utf8")).executablePath;
const output = process.env.AUDIT_OUTPUT || "/vercel/audit/results";
fs.mkdirSync(output,{recursive:true});
const browser = await puppeteer.launch({executablePath,headless:true,args:["--no-sandbox","--disable-dev-shm-usage"]});
try {
 const page = await browser.newPage();
 await page.setRequestInterception(true);
 page.on("request", r => {
  if (r.isNavigationRequest() && r.frame() === page.mainFrame() && new URL(r.url()).origin === origin) r.continue();
  else r.abort();
 });
 const response = await page.goto(access,{waitUntil:"domcontentloaded",timeout:45000});
 if (new URL(page.url()).origin !== origin || response.status() >= 400 ||
     !(await page.$("h1"))) throw Error("Preview access bootstrap failed");
 const cdp = await page.createCDPSession();
 await cdp.send("Network.clearBrowserCache");
 await cdp.detach();
 await page.setRequestInterception(false);
 await page.goto("about:blank");
 const port = Number(new URL(browser.wsEndpoint()).port);
 const options = {port,disableStorageReset:true,logLevel:"error",onlyCategories:["performance","accessibility","best-practices","seo"]};
 const result = await lighthouse(url,options,profile === "desktop" ? desktopConfig : undefined);
 const lhr = result.lhr;
 if (lhr.configSettings.formFactor !== profile) throw Error("Audit profile mismatch");
 const secretKeys = /^(set-cookie|cookie|authorization|MADEBYSEBI_AUDIT_ACCESS_URL)$/i;
 const sanitize = v => {
  if (typeof v === "string") return v.replaceAll(access,"[temporary-access-redacted]").replace(/([?&]_vercel_share=)[^&\s"<>]+/g,"$1[redacted]");
  if (Array.isArray(v)) return v.map(sanitize);
  if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).filter(([k])=>!secretKeys.test(k)).map(([k,x])=>[k,sanitize(x)]));
  return v;
 };
 const id = label+"-"+route.replace(/[^a-z0-9]/gi,"_")+"-"+profile+"-"+run;
 const metrics = Object.fromEntries(["first-contentful-paint","largest-contentful-paint","cumulative-layout-shift","total-blocking-time","speed-index","interactive"].map(k=>[k,{value:lhr.audits[k]?.numericValue,unit:lhr.audits[k]?.numericUnit,display:lhr.audits[k]?.displayValue}]));
 const failing = Object.values(lhr.audits).filter(a=>a.score!==null && a.score<0.9).map(a=>({id:a.id,title:a.title,score:a.score,display:a.displayValue,details:a.details}));
 const summary = sanitize({label,commit:process.env.SOURCE_COMMIT,url,profile,run,fetchTime:lhr.fetchTime,lighthouseVersion:lhr.lighthouseVersion,browserVersion:await browser.version(),hardware:"Vercel Sandbox iad1, 2 vCPU, 4 GB RAM",conditions:"Fresh isolated Chrome profile; auth-only document bootstrap; HTTP cache cleared; temporary origin-scoped auth cookie retained; no application requests blocked during audit; simulated Lighthouse throttling",settings:lhr.configSettings,environment:lhr.environment,scores:Object.fromEntries(Object.entries(lhr.categories).map(([k,v])=>[k,v.score])),metrics,warnings:lhr.runWarnings,runtimeError:lhr.runtimeError,failedAudits:failing,network:lhr.audits["network-requests"]?.details?.items});
 fs.writeFileSync(path.join(output,id+".json"),JSON.stringify(summary,null,2));
 fs.writeFileSync(path.join(output,id+".lhr.json.gz"),gzipSync(JSON.stringify(sanitize(lhr))));
 if (lhr.runtimeError) process.exitCode = 1;
 console.log(JSON.stringify({id,url,scores:summary.scores,metrics:summary.metrics,warnings:summary.warnings,runtimeError:summary.runtimeError,failedAudits:failing.map(a=>({id:a.id,title:a.title,display:a.display}))}));
} finally { await browser.close(); }

