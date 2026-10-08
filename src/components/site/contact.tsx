"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./reveal";

const WHATSAPP_URL =
  "https://wa.me/2349032558738?text=Hello%20Amintra%21%20I%20would%20like%20to%20talk%20about%20a%20website%20for%20my%20business.";
const EMAIL_URL = "mailto:amintraart@gmail.com";

type FormState = {
  name: string;
  businessName: string;
  email: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  businessName: "",
  email: "",
  message: "",
};

const FIELD_IDS = {
  name: "enquiry-name",
  businessName: "enquiry-business-name",
  email: "enquiry-email",
  message: "enquiry-message",
} as const;

function validate(form: FormState): Record<string, string> {
  const errors: Record<string, string> = {};
  if (form.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (form.message.trim().length < 10) {
    errors.message = "Tell me a little more about what you need.";
  }
  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-[13px] font-medium text-red-700">
      {message}
    </p>
  );
}

const inputClasses =
  "h-11 rounded-md border-line bg-white px-3.5 text-[15px] text-ink shadow-none placeholder:text-muted-ink/60 focus-visible:border-sky-500 focus-visible:ring-sky-500/30 aria-invalid:border-red-600 aria-invalid:ring-red-600/25";

const labelClasses = "mb-1.5 block text-[13px] font-medium text-ink/80";

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const clientErrors = validate(form);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setErrorMessage("Please check the highlighted fields.");
      setStatus("error");
      const firstInvalid = Object.keys(clientErrors)[0];
      document
        .getElementById(FIELD_IDS[firstInvalid as keyof typeof FIELD_IDS])
        ?.focus();
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        errors?: Record<string, string>;
        message?: string;
      } | null;

      if (response.ok && data?.ok) {
        setStatus("success");
        return;
      }

      if (data?.errors) {
        setErrors(data.errors);
        setErrorMessage(
          data.message ?? "Please check the highlighted fields.",
        );
        setStatus("error");
        return;
      }

      setErrorMessage(
        data?.message ?? "Something went wrong. Please try again.",
      );
      setStatus("error");
    } catch {
      setErrorMessage(
        "Your message could not be sent. Please check your connection and try again.",
      );
      setStatus("error");
    }
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setStatus("idle");
    setErrorMessage("");
  };

  const firstName = form.name.trim().split(/\s+/)[0] ?? "";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-line/70 bg-surface/70"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* ——— Contact details ——— */}
          <div className="max-w-[32rem]">
            <Reveal>
              <p className="meta-label text-sky-700">Let us talk</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                id="contact-heading"
                className="mt-4 text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.14] tracking-[-0.02em] text-ink"
              >
                Tell me what you need.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[28rem] text-[16.5px] leading-[1.7] text-muted-ink">
                Tell me about your business, what you want your website to
                do, and where you need help. I will help you work out the
                next step.
              </p>
            </Reveal>

            {/* Two simple contact boxes. The phone number and the email
                address live only inside the links — never as visible
                text anywhere on the page. */}
            <Reveal delay={0.18}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 flex max-w-[26rem] items-center gap-4 rounded-xl border border-line bg-white px-5 py-4 transition-all duration-300 hover:border-sky-400 hover:shadow-[0_20px_40px_-30px_rgba(36,79,105,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-sky-100 text-sky-600 transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white">
                  <MessageCircle aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1 text-[15.5px] font-medium text-ink transition-colors duration-200 group-hover:text-sky-700">
                  Chat on WhatsApp
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4.5 shrink-0 text-muted-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-600"
                />
              </a>
            </Reveal>

            <Reveal delay={0.22}>
              <a
                href={EMAIL_URL}
                className="group mt-3 flex max-w-[26rem] items-center gap-4 rounded-xl border border-line bg-white px-5 py-4 transition-all duration-300 hover:border-sky-400 hover:shadow-[0_20px_40px_-30px_rgba(36,79,105,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-sky-100 text-sky-600 transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white">
                  <Mail aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1 text-[15.5px] font-medium text-ink transition-colors duration-200 group-hover:text-sky-700">
                  Email Me
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4.5 shrink-0 text-muted-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-600"
                />
              </a>
            </Reveal>
          </div>

          {/* ——— Form ——— */}
          <Reveal delay={0.1} y={30}>
            <div className="rounded-xl border border-line bg-white p-6 shadow-[0_36px_80px_-48px_rgba(23,33,43,0.45)] sm:p-8">
              {status === "success" ? (
                <div className="flex min-h-[480px] flex-col items-center justify-center py-8 text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <CheckCircle2 aria-hidden="true" className="size-7" />
                  </span>
                  <h3 className="mt-6 text-[clamp(1.5rem,2.4vw,1.9rem)] font-medium tracking-[-0.01em] text-ink">
                    Thank you{firstName ? `, ${firstName}` : ""}.
                  </h3>
                  <p className="mt-3 max-w-[26rem] text-[15.5px] leading-[1.7] text-muted-ink">
                    Your message is in. I will read it and come back to you
                    with a clear next step.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center rounded-full border border-line px-5 text-[14px] font-medium text-ink transition-colors duration-200 hover:border-sky-500 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                      Chat on WhatsApp instead
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex h-11 items-center rounded-full px-5 text-[14px] font-medium text-muted-ink transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-[clamp(1.35rem,2vw,1.6rem)] font-medium leading-tight tracking-[-0.01em] text-ink">
                    Start here
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-muted-ink">
                    A few details are all I need.
                  </p>

                  {status === "error" && errorMessage && (
                    <div
                      role="alert"
                      className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-[14px] font-medium leading-[1.5] text-red-800"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-6 grid gap-5 sm:grid-cols-2"
                  >
                    <div>
                      <label htmlFor={FIELD_IDS.name} className={labelClasses}>
                        Name <span className="text-red-600">*</span>
                      </label>
                      <Input
                        id={FIELD_IDS.name}
                        name="name"
                        autoComplete="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "enquiry-name-error" : undefined
                        }
                        className={inputClasses}
                      />
                      <FieldError
                        id="enquiry-name-error"
                        message={errors.name}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={FIELD_IDS.businessName}
                        className={labelClasses}
                      >
                        Business name
                      </label>
                      <Input
                        id={FIELD_IDS.businessName}
                        name="businessName"
                        autoComplete="organization"
                        placeholder="Your business name"
                        value={form.businessName}
                        onChange={(e) =>
                          update("businessName", e.target.value)
                        }
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={FIELD_IDS.email}
                        className={labelClasses}
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <Input
                        id={FIELD_IDS.email}
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@yourbusiness.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "enquiry-email-error" : undefined
                        }
                        className={inputClasses}
                      />
                      <FieldError
                        id="enquiry-email-error"
                        message={errors.email}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor={FIELD_IDS.message}
                        className={labelClasses}
                      >
                        What do you need?{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <Textarea
                        id={FIELD_IDS.message}
                        name="message"
                        placeholder="A few lines about your business and the website you want…"
                        rows={5}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? "enquiry-message-error" : undefined
                        }
                        className="min-h-[110px] rounded-md border-line bg-white px-3.5 py-3 text-[15px] leading-[1.6] text-ink shadow-none placeholder:text-muted-ink/60 focus-visible:border-sky-500 focus-visible:ring-sky-500/30 aria-invalid:border-red-600 aria-invalid:ring-red-600/25"
                      />
                      <FieldError
                        id="enquiry-message-error"
                        message={errors.message}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-sky-600 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-sky-700 hover:shadow-[0_18px_36px_-16px_rgba(36,79,105,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 active:translate-y-0 disabled:pointer-events-none disabled:opacity-70"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2
                              aria-hidden="true"
                              className="size-4 animate-spin"
                            />
                            Sending…
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                      <p className="mt-3.5 text-center text-[13px] leading-[1.6] text-muted-ink">
                        Your details go straight to Amintra. No newsletters. No
                        spam.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
