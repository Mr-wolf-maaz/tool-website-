"use client";
import type { PricingPlan } from "@/types";

interface Props { plans: PricingPlan[] }

export function PricingClient({ plans }: Props) {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="font-display mb-3 text-4xl font-extrabold tracking-[-2px] text-text md:text-5xl">
          Simple, Transparent Pricing
        </h1>
        <p className="text-base text-text-2">
          Start free forever. Upgrade when you need more power.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="relative overflow-hidden rounded-2xl border p-7"
            style={{
              background: plan.featured ? "#1a1730" : "#1e1e2e",
              borderColor: plan.featured ? "#7c6af7" : "#2a2a3d",
            }}
          >
            {plan.featured && (
              <div className="absolute right-0 top-0 rounded-bl-xl bg-accent px-3 py-1 text-[10px] font-bold text-white">
                Most Popular
              </div>
            )}

            <div className="mb-2 text-[12px] font-bold uppercase tracking-[1px] text-text-3">
              {plan.name}
            </div>
            <div className="font-display mb-1 text-[44px] font-extrabold leading-none tracking-[-3px] text-text">
              ${plan.price}
            </div>
            <div className="mb-5 text-[13px] text-text-3">{plan.period}</div>

            <ul className="mb-6 space-y-2.5">
              {plan.features.map((f) => (
                <li key={f.text} className="flex items-center gap-2 text-[13px]">
                  <span
                    style={{
                      color: f.included ? "#22c55e" : "#6b6b85",
                      fontSize: "14px",
                    }}
                  >
                    {f.included ? "✓" : "✗"}
                  </span>
                  <span style={{ color: f.included ? "#a8a8c0" : "#6b6b85" }}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className="w-full rounded-xl py-2.5 text-sm font-semibold transition-all hover:-translate-y-px"
              style={{
                background: plan.featured ? "#7c6af7" : "#252535",
                color: plan.featured ? "#fff" : "#a8a8c0",
                border: plan.featured ? "none" : "1px solid #363650",
              }}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-[12px] text-text-3">
        All plans include a 14-day free trial. No credit card required. Cancel anytime.
      </p>
    </section>
  );
}
