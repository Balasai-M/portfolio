import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function isValid(payload: ContactPayload): payload is Required<ContactPayload> {
  return Boolean(
    payload.name?.trim() &&
      payload.email?.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) &&
      payload.message?.trim() &&
      payload.message.trim().length >= 10
  );
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValid(payload)) {
    return NextResponse.json({ error: "Missing or invalid fields." }, { status: 422 });
  }

  // Delivery integration point: wire this up to an email/CRM provider
  // (e.g. Resend, Postmark, or a webhook) using an API key from env vars.
  // Left unimplemented here since no provider/credentials were supplied.
  console.log("New contact message:", {
    name: payload.name,
    email: payload.email,
    message: payload.message,
  });

  return NextResponse.json({ ok: true });
}
