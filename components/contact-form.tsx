"use client";

import * as React from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const initialState: FormState = { name: "", email: "", message: "" };

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email address doesn't look right.";
  }
  if (!values.message.trim()) {
    errors.message = "Tell me a bit about what you have in mind.";
  } else if (values.message.trim().length < 10) {
    errors.message = "A little more detail helps — at least 10 characters.";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = React.useState<FormState>(initialState);
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<Status>("idle");

  function handleChange(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-6 py-10 text-center"
      >
        <CheckCircle2 className="size-8 text-emerald-500" />
        <p className="font-heading text-lg font-semibold">Message sent</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out — I&apos;ll get back to you within a couple of days.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-2 cursor-pointer"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={values.name}
          onChange={handleChange("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          autoComplete="name"
        />
        {errors.name ? (
          <p id="name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          autoComplete="email"
        />
        {errors.email ? (
          <p id="email-error" className="text-sm text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="size-4" />
          Something went wrong sending your message. Try again, or email me directly.
        </p>
      ) : null}

      <Button type="submit" disabled={status === "submitting"} className="w-full cursor-pointer sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
