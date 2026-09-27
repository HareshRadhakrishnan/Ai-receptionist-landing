import type { Metadata } from "next";
import { CalculatorClient } from "./calculator-client";

const TITLE = "Missed Call Revenue Calculator | Commitly Labs";
const DESCRIPTION =
  "Estimate how much revenue your small business may lose each month to unanswered calls. Adjust calls, miss rate, and job value — transparent math, no signup required.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "https://commitlylabs.com/missed-call-calculator/",
    siteName: "Commitly Labs",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function MissedCallCalculatorPage() {
  return <CalculatorClient />;
}
