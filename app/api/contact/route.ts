import { NextResponse } from "next/server";

const contactEmail =
  process.env.CONTACT_TO_EMAIL || "hello.madebysebi@gmail.com";
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ||
  "MadeBySebi Website <onboarding@resend.dev>";

function clean(value: unknown, maxLength = 2000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length"));
    if (contentLength > 16_000) {
      return NextResponse.json(
        { error: "Your enquiry is too long. Please shorten the message and try again." },
        { status: 413 },
      );
    }

    const rawBody = await request.text();
    if (rawBody.length > 16_000) {
      return NextResponse.json(
        { error: "Your enquiry is too long. Please shorten the message and try again." },
        { status: 413 },
      );
    }

    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { error: "Please submit a valid enquiry." },
        { status: 400 },
      );
    }
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Please submit a valid enquiry." },
        { status: 400 },
      );
    }
    const fields = body as Record<string, unknown>;

    const name = clean(fields.name, 120);
    const email = clean(fields.email, 180);
    const company = clean(fields.company, 180);
    const website = clean(fields.website, 240);
    const service = clean(fields.service, 180);
    const budget = clean(fields.budget, 180);
    const timeline = clean(fields.timeline, 180);
    const message = clean(fields.message, 5000);
    const honeypot = clean(fields.businessWebsite, 240);

    // Quietly accept obvious bot submissions without sending email.
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email delivery is being configured. Please contact us directly at hello.madebysebi@gmail.com.",
        },
        { status: 503 },
      );
    }

    const rows = [
      ["Name", name],
      ["Email", email],
      ["Company / Business", company || "—"],
      ["Current website", website || "—"],
      ["Service", service],
      ["Budget", budget || "—"],
      ["Timeline", timeline || "—"],
    ];

    const htmlRows = rows
      .map(
        ([label, value]) => `
          <tr>
            <td style="padding:8px 14px 8px 0;color:#6b6b6b;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
            <td style="padding:8px 0;color:#111;font-weight:600;">${escapeHtml(value)}</td>
          </tr>`,
      )
      .join("");

    const textRows = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [contactEmail],
        reply_to: email,
        subject: `New MadeBySebi enquiry — ${service} — ${name}`,
        text: `${textRows}\n\nProject message:\n${message}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:32px;color:#111;">
            <div style="display:inline-block;background:#cefa74;border-radius:999px;padding:7px 12px;font-size:12px;font-weight:700;margin-bottom:22px;">MADEBYSEBI · NEW ENQUIRY</div>
            <h1 style="font-size:30px;line-height:1.1;margin:0 0 24px;">A new project enquiry has arrived.</h1>
            <table style="border-collapse:collapse;width:100%;margin-bottom:28px;">${htmlRows}</table>
            <div style="border-top:1px solid #e5e5e5;padding-top:22px;">
              <p style="font-size:12px;color:#6b6b6b;margin:0 0 8px;text-transform:uppercase;letter-spacing:.08em;">Project message</p>
              <p style="font-size:15px;line-height:1.65;white-space:pre-wrap;margin:0;">${escapeHtml(message)}</p>
            </div>
          </div>`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend contact error:", response.status, detail);

      return NextResponse.json(
        {
          error:
            "We could not send your enquiry right now. Please email hello.madebysebi@gmail.com directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please email hello.madebysebi@gmail.com directly.",
      },
      { status: 500 },
    );
  }
}
