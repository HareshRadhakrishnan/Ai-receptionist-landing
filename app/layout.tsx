import type { Metadata } from "next";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/constants";
import "./globals.css";

const TITLE =
  "Commitly Labs — AI Receptionist for Small Businesses | Never Miss a Call";
const DESCRIPTION =
  "Commitly Labs answers your business calls 24/7 — booking appointments, answering questions, and capturing every lead, even after hours. Free trial available. Schedule a call today.";

export const metadata: Metadata = {
  metadataBase: new URL("https://commitlylabs.com"),
  title: TITLE,
  description: DESCRIPTION,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: "https://commitlylabs.com",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
