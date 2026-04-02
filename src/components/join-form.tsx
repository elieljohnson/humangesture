"use client";

import { useState } from "react";

export function JoinForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();

    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = (await res.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage(json.message ?? "You're on the list.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong.");
    }
  }

  return (
    <form
      className="mx-auto mt-5 max-w-xl md:mt-6"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-4 border-b border-text-primary/40 pb-3">
        <label htmlFor="join-email" className="sr-only">
          Email address
        </label>
        <input
          id="join-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="email@example.com"
          className="min-w-0 flex-1 border-0 bg-transparent text-left text-base text-text-primary placeholder:text-text-secondary/80 focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 bg-transparent text-sm font-bold uppercase tracking-wide text-accent-dark transition-colors hover:text-accent-mid disabled:opacity-50"
        >
          Join
        </button>
      </div>
      {message != null ? (
        <p
          className={`mt-4 text-left text-sm md:text-center ${
            status === "success" ? "text-text-primary" : "text-accent-dark"
          }`}
          role={status === "error" ? "alert" : undefined}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
