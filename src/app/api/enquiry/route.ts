import { NextResponse } from "next/server";
import { db } from "@/lib/db";

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,20}$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const name = str(body.name);
  const businessName = str(body.businessName);
  const email = str(body.email);
  const whatsapp = str(body.whatsapp);
  const message = str(body.message);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (whatsapp && !PHONE_RE.test(whatsapp))
    errors.whatsapp = "Please enter a valid WhatsApp number.";
  if (message.length < 10)
    errors.message = "Tell me a little more about what you need.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, errors, message: "Please check the highlighted fields." },
      { status: 422 },
    );
  }

  try {
    await db.enquiry.create({
      data: {
        name,
        businessName: businessName || null,
        email,
        whatsapp: whatsapp || null,
        message,
      },
    });
  } catch (error) {
    console.error("Failed to store enquiry:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
