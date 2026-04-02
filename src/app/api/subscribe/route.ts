import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim()
      : "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const to = process.env.JOIN_LIST_TO ?? "eliel@humangesture.com";

  if (process.env.NODE_ENV === "development") {
    console.info("[subscribe] signup:", { email, to });
  }

  // Wire SMTP (e.g. nodemailer) or Resend when ready; v1 acknowledges signup.
  return NextResponse.json({
    ok: true,
    message: "You're on the list.",
  });
}
