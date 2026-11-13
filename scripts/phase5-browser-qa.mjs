import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
const require = createRequire(path.join(process.env.AUDIT_TOOL_ROOT || "/vercel/audit", "package.json"));
const {default: puppeteer} = await import(pathToFileURL(require.resolve("puppeteer-core")).href);
const origin = new URL(process.env.PREVIEW_URL).origin;
const access = process.env.MADEBYSEBI_AUDIT_ACCESS_URL;
assert.equal(new URL(access).origin,origin);
const executablePath = process.env.AUDIT_CHROME_PATH || JSON.parse(fs.readFileSync("/vercel/audit/browser.json","utf8")).executablePath;
const output = process.env.AUDIT_OUTPUT || "/vercel/audit/results";
fs.mkdirSync(output,{recursive:true});
const report = {commit:process.env.SOURCE_COMMIT,origin,started:new Date().toISOString(),browser:null,hardware:"Vercel Sandbox iad1, 2 vCPU, 4 GB RAM",physicalDevices:false,safari:false,checks:[],pages:[],consoleErrors:[],failedRequests:[],analytics:[],contactRequests:[]};
const browser = await puppeteer.launch({executablePath,headless:true,args:["--no-sandbox","--disable-dev-shm-usage"]});
const pause = ms => new Promise(resolve=>setTimeout(resolve,ms));
const check = async (name,fn) => {try{const detail=await fn();report.checks.push({name,passed:true,detail});}catch(e){report.checks.push({name,passed:false,error:e.message});}};
try {
 report.browser=await browser.version();
 const page=await browser.newPage();
 await page.setCacheEnabled(false);
 page.on("pageerror",e=>report.consoleErrors.push({url:page.url().split("?")[0],message:e.message}));
 page.on("requestfailed",r=>report.failedRequests.push({url:r.url().split("?")[0],error:r.failure()?.errorText}));
 page.on("response",r=>{if(/\/_vercel\/(insights|speed-insights)\//.test(r.url()))report.analytics.push({url:r.url().split("?")[0],status:r.status()});});
 let contactStatus=503;
 await page.setRequestInterception(true);
 page.on("request",r=>{
  if(new URL(r.url()).pathname==="/api/contact"){
   report.contactRequests.push({method:r.method(),payload:JSON.parse(r.postData() || "{}"),mockStatus:contactStatus});
   r.respond({status:contactStatus,contentType:"application/json",body:JSON.stringify(contactStatus===200?{ok:true}:{error:"Email delivery is being configured. Please contact us directly at hello@madebysebi.com."})});
  } else r.continue();
 });
 await page.goto(access,{waitUntil:"networkidle2"});
 assert.equal(new URL(page.url()).origin,origin);
 await page.emulateMediaFeatures([{name:"prefers-reduced-motion",value:"reduce"}]);
 const go=async route=>{const r=await page.goto(new URL(route,origin).href,{waitUntil:"networkidle2",timeout:45000});return r;};
 const slugs=["pengtresses","power-electrode-ltd","total-logistics","numo-sebi","kent-architects","lucenex","elegante","tourbuddy"];
 const routes=["/","/services","/pricing","/about","/work","/contact","/privacy","/terms",...slugs.map(s=>"/work/"+s)];
 const widths=[[320,640],[360,800],[390,844],[768,1024],[820,1180],[1366,768],[1920,1080],[740,390]];
 for(const route of routes){
  const response=await go(route);
  const item={route,status:response.status(),previewRobots:response.headers()["x-robots-tag"],layouts:[],seo:await page.evaluate(()=>({title:document.title,description:document.querySelector('meta[name="description"]')?.content,canonical:document.querySelector('link[rel="canonical"]')?.href,ogTitle:document.querySelector('meta[property="og:title"]')?.content,ogImage:document.querySelector('meta[property="og:image"]')?.content,robots:document.querySelector('meta[name="robots"]')?.content,h1:document.querySelectorAll("h1").length,main:document.querySelectorAll("main").length,schema:[...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>{try{return JSON.parse(s.textContent)}catch{return "invalid-json"}})}))};
  for(const [width,height] of widths){
   await page.setViewport({width,height,deviceScaleFactor:1});
   await pause(90);
   item.layouts.push(await page.evaluate(({width,height})=>{
    const overflow=[...document.querySelectorAll("body *")].filter(e=>{const r=e.getBoundingClientRect();const s=getComputedStyle(e);return r.width>0 && r.height>0 && s.position!=="fixed" && s.position!=="absolute" && s.visibility!=="hidden" && (r.left< -1 || r.right>innerWidth+1);}).slice(0,6).map(e=>({tag:e.tagName,class:e.className?.toString().slice(0,90),width:e.getBoundingClientRect().width}));
    const h=document.querySelector("main h1")?.getBoundingClientRect();const header=document.querySelector("body>header")?.getBoundingClientRect();
    return {width,height,scrollWidth:document.documentElement.scrollWidth,viewport:innerWidth,overflow,headingBelowHeader:!h||!header||h.top>=header.bottom-1};
   },{width,height}));
  }
  await page.setViewport({width:1366,height:900,deviceScaleFactor:1});
  await page.addScriptTag({path:require.resolve("axe-core/axe.min.js")});
  item.axe=await page.evaluate(async()=>{const r=await window.axe.run(document,{runOnly:{type:"tag",values:["wcag2a","wcag2aa","wcag21a","wcag21aa","wcag22aa","best-practice"]}});return {version:r.testEngine.version,passes:r.passes.length,incomplete:r.incomplete.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.length})),violations:r.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))};});
  for(const image of await page.$$("main img")){await image.evaluate(e=>e.scrollIntoView({block:"center"}));await page.waitForFunction(e=>e.complete&&e.naturalWidth>0,{timeout:20000},image);}
  item.images=await page.$$eval("main img",imgs=>imgs.map(i=>({src:i.currentSrc,loaded:i.complete&&i.naturalWidth>0,alt:i.getAttribute("alt")})));
  item.links=await page.evaluate(()=>[...document.querySelectorAll("a[href]")].map(a=>a.getAttribute("href")));
  report.pages.push(item);
  fs.writeFileSync(path.join(output,"browser-qa-progress.json"),JSON.stringify(report,null,2));
 }
 await check("all 16 public routes return 200, with one h1/main, complete metadata and preview noindex",()=>{
  for(const p of report.pages){assert.equal(p.status,200,p.route);assert.equal(p.seo.h1,1,p.route);assert.equal(p.seo.main,1,p.route);assert.ok(p.seo.title&&p.seo.description&&p.seo.canonical&&p.seo.ogImage,p.route);assert.match(p.seo.canonical,/^https:\/\/madebysebi.com/);assert.match(p.previewRobots||"",/noindex/i,p.route);}
  return {routes:report.pages.length};
 });
 await check("all 128 viewport checks avoid horizontal overflow and header-heading overlap",()=>{
  for(const p of report.pages)for(const l of p.layouts){assert.ok(l.scrollWidth<=l.viewport+1,p.route+" "+l.width);assert.ok(l.headingBelowHeader,p.route+" "+l.width);}
  return {viewports:widths,checks:report.pages.length*widths.length};
 });
 await check("automated axe accessibility scan across all public routes",()=>{
  const issues=report.pages.flatMap(p=>p.axe.violations.map(v=>({route:p.route,...v})));assert.equal(issues.length,0,JSON.stringify(issues.map(v=>({route:v.route,id:v.id}))));return {routes:report.pages.length,version:report.pages[0].axe.version};
 });
 await check("homepage service anchors scroll to the correct sections",async()=>{
  await page.setViewport({width:390,height:844});await go("/");
  for(const id of ["online-presence","build-your-solution","grow-your-business"]){await page.click('a[href="#'+id+'"]');await page.waitForFunction(id=>location.hash==="#"+id,{},id);const pos=await page.$eval("#"+id,e=>e.getBoundingClientRect().top);assert.ok(pos>=75&&pos<180,String(pos));}
 });
 await check("mobile menu contains keyboard focus, Escape restores focus and scrolling",async()=>{
  await page.setViewport({width:390,height:844});await go("/");
  await page.click('button[aria-label="Open navigation menu"]');
  await page.waitForFunction(()=>document.querySelector("dialog")?.open);
  for(let i=0;i<14;i++){await page.keyboard.press("Tab");assert.equal(await page.evaluate(()=>document.querySelector("dialog").contains(document.activeElement)||document.activeElement===document.body),true);}
  await page.keyboard.press("Escape");
  await page.waitForFunction(()=>!document.querySelector("dialog").open&&document.body.style.overflow!=="hidden");
  assert.equal(await page.evaluate(()=>document.activeElement?.getAttribute("aria-label")),"Open navigation menu");
 });
 await check("short landscape menu scrolls and navigation survives desktop resizing",async()=>{
  await page.setViewport({width:740,height:390});await go("/services");await page.click('button[aria-label="Open navigation menu"]');
  await page.waitForFunction(()=>document.querySelector("dialog").open);
  assert.ok(await page.$eval("dialog",d=>d.scrollHeight>d.clientHeight));
  await page.$eval('dialog a[href="/contact"]',a=>a.focus());
  assert.ok(await page.$eval('dialog a[href="/contact"]',a=>{const r=a.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight;}));
  await page.setViewport({width:1366,height:768});
  await page.waitForFunction(()=>!document.querySelector("dialog").open&&document.body.style.overflow!=="hidden");
  await page.setViewport({width:390,height:844});await page.click('button[aria-label="Open navigation menu"]');await page.waitForFunction(()=>document.querySelector("dialog").open);
  await page.click('dialog a[href="/pricing"]');await page.waitForFunction(()=>location.pathname==="/pricing"&&!document.querySelector("dialog").open);
 });
 const categories=["business-websites","ecommerce","booking","business-launch","web-applications","business-systems","mobile-applications","maintenance-growth"];
 const contactLinks=[];
 await check("all eight direct pricing URLs render three packages and valid comparisons",async()=>{
  for(const id of categories){await go("/pricing?category="+id);await page.waitForSelector('[data-pricing-category="'+id+'"]');assert.equal(await page.$$eval("[data-package]",a=>a.length),3);assert.equal(await page.$$eval("#pricing-packages thead th",a=>a.length),4);contactLinks.push(...await page.$$eval('[data-package] a[aria-label^="Get started"]',a=>a.map(x=>({href:x.getAttribute("href"),label:x.getAttribute("aria-label")}))));}
  return {categories:8,options:contactLinks.length};
 });
 await check("category clicks, browser back/forward, live search and graceful unknown categories",async()=>{
  await go("/pricing?category=business-websites");await page.click('nav[aria-label="Service categories"] a[href*="category=ecommerce"]');await page.waitForSelector('[data-pricing-category="ecommerce"]');
  await page.goBack();await page.waitForSelector('[data-pricing-category="business-websites"]');await page.goForward();await page.waitForSelector('[data-pricing-category="ecommerce"]');
  await page.type("#pricing-search","inventory");await page.waitForFunction(()=>document.querySelectorAll('nav[aria-label="Service categories"] a').length<8);assert.ok(await page.$eval("#pricing-filter-status",e=>e.textContent.includes("categories")));
  await page.click('button[aria-label="Clear service search"]');await page.waitForFunction(()=>document.querySelectorAll('nav[aria-label="Service categories"] a').length===8);
  await page.type("#pricing-search","zzzzzz-no-such-service");await page.waitForFunction(()=>!document.querySelector("#pricing-packages"));assert.ok(await page.evaluate(()=>document.body.textContent.includes("No services match")));
  await go("/pricing?category=unrecognised");assert.ok(await page.evaluate(()=>document.body.textContent.includes("That service category")));
 });
 await check("all 24 pricing options arrive with visible, matching Contact context",async()=>{
  assert.equal(contactLinks.length,24);
  for(const item of contactLinks){await go(item.href);const actual=await page.evaluate(()=>({category:document.querySelector('[name="pricingCategory"]').value,option:document.querySelector('[name="pricingPackage"]').value,service:document.querySelector("#service").value,summary:document.querySelector('aside[aria-label="Your pricing selection"]')?.textContent}));const query=new URL(item.href,origin).searchParams;assert.equal(actual.category,query.get("category"));assert.equal(actual.option,query.get("package"));assert.ok(actual.service&&actual.summary);}
  return {options:24};
 });
 await check("native form validation and intercepted failure/success preserve payload and fallback",async()=>{
  await go(contactLinks[0].href);const start=report.contactRequests.length;
  await page.click('button[type="submit"]');assert.equal(report.contactRequests.length,start);
  await page.type("#name","Phase 5 Browser QA");await page.type("#email","not-an-email");await page.type("#message","Intercepted verification only; do not send email.");await page.click('button[type="submit"]');assert.equal(report.contactRequests.length,start);
  await page.$eval("#email",e=>{e.value="";});await page.type("#email","qa@example.com");
  contactStatus=503;await page.click('button[type="submit"]');await page.waitForSelector('[role="alert"]');assert.match(await page.$eval('[role="alert"]',e=>e.textContent),/hello@madebysebi.com/);assert.equal(report.contactRequests.length,start+1);
  const payload=report.contactRequests.at(-1).payload;assert.deepEqual(Object.keys(payload).sort(),["name","email","company","website","service","budget","timeline","message","businessWebsite"].sort());assert.match(payload.message,/Package:/);
  contactStatus=200;await page.click('button[type="submit"]');await page.waitForSelector('form [role="status"]');assert.match(await page.$eval('form [role="status"]',e=>e.textContent),/has been sent/);assert.equal(report.contactRequests.length,start+2);
 });
 await check("legacy Contact service links still preselect",async()=>{for(const service of ["Web Design & Development","UX/UI & Product Design","Branding & Visual Design","SEO & GEO","Digital Marketing","Website Consultation"]){await go("/contact?service="+encodeURIComponent(service));assert.equal(await page.$eval("#service",e=>e.value),service);}});
 await check("CSS text scaling to 200 percent remains usable at narrow viewport",async()=>{
  await page.setViewport({width:390,height:844});
  for(const route of ["/","/pricing","/contact","/services"]){await go(route);await page.addStyleTag({content:"html { font-size: 200% !important; }"});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),route);}
  return "CSS root font-size simulation, not physical browser zoom";
 });

 await check("WhatsApp stays visible above the footer and hides when the footer is visible",async()=>{
  await page.setViewport({width:390,height:844});await go("/");
  assert.equal(await page.$eval('aside[aria-label="Quick contact"]',e=>getComputedStyle(e).display!=="none"),true);
  await page.$eval("#site-footer",e=>e.scrollIntoView());
  await page.waitForFunction(()=>document.querySelector('aside[aria-label="Quick contact"]').hidden);
  assert.equal(await page.$eval('aside[aria-label="Quick contact"]',e=>getComputedStyle(e).display),"none");
 });
 for(const pref of [{motion:"reduce",saveData:false,effectiveType:"4g"},{motion:"no-preference",saveData:true,effectiveType:"4g"},{motion:"no-preference",saveData:false,effectiveType:"2g"}]){
  await check("video runtime preferences and explicit playback: "+JSON.stringify(pref),async()=>{
   const media=await browser.newPage();const mediaResponses=[];
   try{
    await media.setViewport({width:360,height:800,isMobile:true,hasTouch:true});
    await media.emulateMediaFeatures([{name:"prefers-reduced-motion",value:pref.motion}]);
    await media.evaluateOnNewDocument(pref=>{const connection=Object.assign(new EventTarget(),{saveData:pref.saveData,effectiveType:pref.effectiveType});Object.defineProperty(navigator,"connection",{configurable:true,value:connection});},pref);
    media.on("response",r=>{if(/\.mp4(?:\?|$)/.test(r.url()))mediaResponses.push({url:r.url().split("?")[0],status:r.status()});});
    await media.goto(origin+"/work/numo-sebi",{waitUntil:"networkidle2"});
    const actual=await media.evaluate(()=>({reduce:matchMedia("(prefers-reduced-motion: reduce)").matches,saveData:navigator.connection?.saveData,effectiveType:navigator.connection?.effectiveType}));
    assert.equal(actual.reduce,pref.motion==="reduce");assert.equal(actual.saveData,pref.saveData);assert.equal(actual.effectiveType,pref.effectiveType);
    assert.equal(await media.$$eval("video source",a=>a.length),0);
    await media.click("details summary");await media.$eval("video",v=>v.scrollIntoView({block:"center"}));await pause(2300);
    assert.equal(await media.$$eval("video source",a=>a.length),0);assert.equal(mediaResponses.length,0);
    await media.focus("video");await media.keyboard.press("Enter");await media.waitForFunction(()=>document.querySelector("video").readyState>=2,{timeout:45000});
    if(await media.$eval("video",v=>v.paused))await media.keyboard.press("Space");
    await media.waitForFunction(()=>!document.querySelector("video").paused);
    const currentSrc=await media.$eval("video",v=>v.currentSrc);assert.match(currentSrc,/-mobile\.mp4$/);
    await media.click("details summary");await pause(2400);assert.equal(await media.$$eval("video source",a=>a.length),0);assert.equal(await media.$eval("video",v=>v.paused),true);
    return {actual,currentSrc,mediaResponses};
   }finally{await media.close();}
  });
 }
 await check("keyboard skip link focuses the main landmark",async()=>{
  await go("/about");await page.keyboard.press("Tab");assert.equal(await page.evaluate(()=>document.activeElement.textContent),"Skip to content");await page.keyboard.press("Enter");assert.equal(await page.evaluate(()=>document.activeElement.id),"main-content");
 });

 await check("invalid route is a real 404",async()=>{const r=await go("/phase5-nonexistent-route");assert.equal(r.status(),404);});
 report.finished=new Date().toISOString();
 report.summary={passed:report.checks.filter(c=>c.passed).length,failed:report.checks.filter(c=>!c.passed).length};
} finally {
 await browser.close();
 fs.writeFileSync(path.join(output,"browser-qa.json"),JSON.stringify(report,null,2));
 console.log(JSON.stringify({summary:report.summary,checks:report.checks,consoleErrors:report.consoleErrors,failedRequests:report.failedRequests,analytics:report.analytics}));
}

