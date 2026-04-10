"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result?.error || "Failed to send message.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });
      setForm(initialForm);
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:p-6">
      <div className="mb-5">
        <h3 className="text-2xl font-semibold text-white">Send a message</h3>
        <p className="mt-2 text-sm leading-6 text-white/60">
          Have a project or opportunity in mind? Let&apos;s talk.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-white/70">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={handleChange("name")}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400/40"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400/40"
              placeholder="mrbeast-67@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/70">Subject</label>
          <input
            type="text"
            value={form.subject}
            onChange={handleChange("subject")}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400/40"
            placeholder="Subject"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/70">Message</label>
          <textarea
            value={form.message}
            onChange={handleChange("message")}
            rows={4}
            className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400/40"
            placeholder="Tell me about your project or opportunity..."
            required
          />
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-medium text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status.type && (
          <p
            className={`pt-1 text-sm ${
              status.type === "success" ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
