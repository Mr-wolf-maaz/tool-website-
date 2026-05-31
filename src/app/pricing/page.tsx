import type { Metadata } from "next";
import { PricingClient } from "@/components/layout/PricingClient";
import { pricingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing — Free, Pro & Business Plans",
  description:
    "Start free forever. Upgrade to Pro for ad-free access, batch processing, and larger files. Business plan includes API access and team features.",
};

export default function PricingPage() {
  return <PricingClient plans={pricingPlans} />;
}
