"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BOOKING_URL } from "@/lib/constants";

function formatMoney(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatNum(n: number, decimals = 0): string {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(n);
}

function SliderField({
  id,
  label,
  hint,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  id: string;
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-4">
        <div>
          <label htmlFor={id} className="text-sm font-semibold text-ink">
            {label}
          </label>
          {hint ? (
            <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{hint}</p>
          ) : null}
        </div>
        <span
          className="shrink-0 rounded-lg bg-brand-50 px-2.5 py-1 text-sm font-bold tabular-nums text-brand-800"
          aria-live="polite"
        >
          {display}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range-brand w-full"
      />
    </div>
  );
}

function InfoIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  );
}

function FormulaHelp() {
  const [tapOpen, setTapOpen] = useState(false);

  return (
    <div className="group/formula relative inline-flex">
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-brand-50 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        aria-expanded={tapOpen}
        aria-controls="formula-help-panel"
        aria-label="How we calculate this"
        onClick={() => setTapOpen((v) => !v)}
      >
        <InfoIcon />
      </button>
      <div
        id="formula-help-panel"
        role="tooltip"
        className={`absolute right-0 top-full z-20 mt-2 w-[min(calc(100vw-2.5rem),20rem)] rounded-xl border border-slate-200 bg-white p-4 text-left text-sm leading-relaxed text-slate-600 shadow-lift transition duration-150 ${
          tapOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0 group-hover/formula:pointer-events-auto group-hover/formula:visible group-hover/formula:translate-y-0 group-hover/formula:opacity-100 group-focus-within/formula:pointer-events-auto group-focus-within/formula:visible group-focus-within/formula:translate-y-0 group-focus-within/formula:opacity-100"
        }`}
      >
        <p className="font-semibold text-ink">How we calculate this</p>
        <ul className="mt-2 list-inside list-disc space-y-1 marker:text-brand-600">
          <li>
            Missed calls/month = calls/day × (missed % ÷ 100) × open days/month
          </li>
          <li>
            Lost revenue/month = missed calls/month × avg job value × (booked % ÷
            100)
          </li>
          <li>Lost revenue/year = lost revenue/month × 12</li>
        </ul>
        <p className="mt-2 text-xs text-slate-500">
          Illustrative only — your mix of emergencies, tire-kickers, and repeat
          customers will differ. Industry call-tracking studies suggest many SMBs miss
          a large share of inbound calls; your numbers vary by trade.
        </p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M7 3h4l2.5 6.5-3 2.2a13 13 0 0 0 5.8 5.8l2.2-3L25 17v4a2 2 0 0 1-2.2 2A19 19 0 0 1 5 5.2 2 2 0 0 1 7 3z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="scale(0.9) translate(1,1)"
          />
          <g fill="#fff">
            <rect x="13.5" y="9.5" width="1.6" height="5" rx="0.8" />
            <rect x="16.2" y="7.5" width="1.6" height="9" rx="0.8" />
            <rect x="18.9" y="10.5" width="1.6" height="3" rx="0.8" />
          </g>
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-ink">Commitly Labs</span>
    </span>
  );
}

export function CalculatorClient() {
  const [callsPerDay, setCallsPerDay] = useState(6);
  const [missedPct, setMissedPct] = useState(25);
  const [avgJobValue, setAvgJobValue] = useState(200);
  const [openDays, setOpenDays] = useState(22);
  const [bookedPct, setBookedPct] = useState(50);

  const result = useMemo(() => {
    const missedRate = missedPct / 100;
    const bookedRate = bookedPct / 100;
    const missedCallsMonth = callsPerDay * missedRate * openDays;
    const lostRevenueMonth = missedCallsMonth * avgJobValue * bookedRate;
    const lostRevenueYear = lostRevenueMonth * 12;
    const jobsLostMonth = missedCallsMonth * bookedRate;
    return {
      missedCallsMonth,
      lostRevenueMonth,
      lostRevenueYear,
      jobsLostMonth,
    };
  }, [callsPerDay, missedPct, avgJobValue, openDays, bookedPct]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <Link href="/" className="rounded-lg outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600">
            <Logo />
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex shrink-0 items-center rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 sm:px-5"
          >
            Schedule a Call
          </a>
        </div>
      </header>

      <main className="section-y">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Revenue audit</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Missed call revenue calculator
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            A rough estimate of revenue that slips away when calls go unanswered —
            after hours, at lunch, or while you&apos;re on another line. Adjust the
            sliders to match your business; the math updates instantly.
          </p>

          <div className="mt-10 space-y-8 card p-6 sm:p-8">
            <SliderField
              id="calls-per-day"
              label="Calls per day"
              value={callsPerDay}
              min={0}
              max={50}
              step={1}
              display={formatNum(callsPerDay)}
              onChange={setCallsPerDay}
            />
            <SliderField
              id="missed-pct"
              label="Missed calls"
              hint="After hours, lunch, on another line — % of daily calls you don't answer"
              value={missedPct}
              min={0}
              max={100}
              step={1}
              display={`${formatNum(missedPct)}%`}
              onChange={setMissedPct}
            />
            <SliderField
              id="avg-job"
              label="Average value per job / call"
              value={avgJobValue}
              min={0}
              max={2000}
              step={25}
              display={formatMoney(avgJobValue)}
              onChange={setAvgJobValue}
            />
            <SliderField
              id="open-days"
              label="Open days per month"
              value={openDays}
              min={0}
              max={31}
              step={1}
              display={formatNum(openDays)}
              onChange={setOpenDays}
            />

            <div className="border-t border-slate-200 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Assumption (you control this)
              </p>
              <div className="mt-4">
                <SliderField
                  id="booked-pct"
                  label="% of missed callers who would have booked"
                  hint="Not every missed call would have become a job — set what feels honest for your trade."
                  value={bookedPct}
                  min={0}
                  max={100}
                  step={1}
                  display={`${formatNum(bookedPct)}%`}
                  onChange={setBookedPct}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 card border-brand-100 bg-brand-50/40 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-800">
                Your estimate
              </p>
              <FormulaHelp />
            </div>
            <p className="mt-3 text-2xl font-extrabold leading-snug tracking-tight text-ink sm:text-3xl">
              You&apos;re losing ~{formatMoney(result.lostRevenueMonth)}/mo — about{" "}
              {formatMoney(result.lostRevenueYear)}/yr
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              That&apos;s roughly{" "}
              <span className="font-semibold text-ink">
                {formatNum(result.jobsLostMonth, result.jobsLostMonth % 1 ? 1 : 0)}
              </span>{" "}
              {result.jobsLostMonth === 1 ? "job" : "jobs"} a month walking to whoever
              answers.
            </p>

            <dl className="mt-6 space-y-2 border-t border-brand-100/80 pt-6 text-sm text-slate-600">
              <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                <dt>Missed calls / month</dt>
                <dd className="font-semibold tabular-nums text-ink">
                  {formatNum(result.missedCallsMonth, result.missedCallsMonth % 1 ? 1 : 0)}
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                <dt>Lost revenue / month</dt>
                <dd className="font-semibold tabular-nums text-ink">
                  {formatMoney(result.lostRevenueMonth)}
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                <dt>Lost revenue / year</dt>
                <dd className="font-semibold tabular-nums text-ink">
                  {formatMoney(result.lostRevenueYear)}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-brand-700"
            >
              See how Commitly answers every missed call
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
            <Link
              href="/"
              className="text-sm font-medium text-slate-500 transition hover:text-brand-700"
            >
              ← Back to homepage
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="container-x flex flex-col items-center justify-between gap-2 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© 2026 Commitly Labs · commitlylabs.com</p>
          <p>Estimates only — not financial advice.</p>
        </div>
      </footer>
    </>
  );
}
