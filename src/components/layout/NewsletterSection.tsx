"use client";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="mx-6 my-4 max-w-6xl rounded-2xl border border-accent-border bg-gradient-to-br from-accent-bg to-bg-4 px-10 py-10 text-center md:mx-auto">
      <h2 className="font-display mb-2 text-3xl font-extrabold tracking-tight text-text">
        Stay in the Loop
      </h2>
      <p className="mb-6 text-[15px] text-text-2">
        Get notified when we add new tools and features. No spam, ever.
      </p>
      {submitted ? (
        <div className="text-green font-semibold text-base">🎉 Subscribed! Welcome aboard.</div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-sm gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-lg border border-border-2 bg-bg-2 px-4 py-2.5 text-sm text-text placeholder-text-3 outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-2 hover:-translate-y-px"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
