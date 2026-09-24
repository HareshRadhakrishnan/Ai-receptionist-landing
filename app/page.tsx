const BOOKING_URL = "https://calendar.app.google/JNwUTUYHoNXdx1HaA";

/* ---------- tiny building blocks ---------- */

function CTAButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "inverse";
}) {
  const styles =
    variant === "primary"
      ? "bg-brand-600 text-white hover:bg-brand-700 shadow-soft"
      : "bg-white text-ink hover:bg-brand-50 border border-slate-200";
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-center text-base font-semibold transition sm:px-7 ${styles}`}
    >
      {children}
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
  );
}

function Logo({ dark = false }: { dark?: boolean }) {
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
      <span className={`text-lg font-bold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        Commitly Labs
      </span>
    </span>
  );
}

function Icon({
  path,
  className = "h-6 w-6",
}: {
  path: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}

const icons = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  phone: (
    <path d="M5 3h4l2 5-2.5 1.8a13 13 0 0 0 5.7 5.7L16 13l5 2v4a2 2 0 0 1-2.2 2A19 19 0 0 1 3 5.2 2 2 0 0 1 5 3z" />
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  message: (
    <>
      <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.3 8.9 8.9 0 0 1-3.8-.9L3 20l1.2-5A8 8 0 1 1 21 11.5z" />
      <path d="M8 10h8M8 14h5" />
    </>
  ),
  spam: (
    <>
      <path d="m3 3 18 18" />
      <path d="M11 5.6 3.4 19a2 2 0 0 0 1.7 3h13.8a2 2 0 0 0 1.7-3L13 5.6a2 2 0 0 0-2 0z" />
      <path d="M12 9v3M12 16h.01" />
    </>
  ),
  plug: (
    <>
      <path d="M9 2v5M15 2v5" />
      <path d="M6 7h12v3a6 6 0 0 1-12 0z" />
      <path d="M12 16v6" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.6L3 17.6 6.4 21l5.7-5.7a4.5 4.5 0 0 0 5.6-6L14 12l-2-2z" />
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  moon: <path d="M20 14A8 8 0 1 1 10 4a7 7 0 0 0 10 10z" />,
  sunset: (
    <>
      <path d="M12 9V3M5.6 10.6 3 8M18.4 10.6 21 8" />
      <path d="M4 16h16M6 20h12" />
      <path d="M12 13a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z" />
    </>
  ),
};

/* ---------- sections ---------- */

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 sm:px-5"
        >
          Schedule a Call
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-brand-50 to-transparent"
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <p className="eyebrow">24/7 AI Receptionist for Small Businesses</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Never miss another customer call.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Commitly Labs answers your business calls around the clock — booking
            appointments, answering questions, and capturing every lead. Even at 2
            AM. Even while you're elbow-deep in a job.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton>Schedule a Call</CTAButton>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl px-5 py-3.5 text-base font-semibold text-brand-700 transition hover:text-brand-800"
            >
              See how it works
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
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </a>
          </div>
          <p className="mt-7 text-sm text-slate-500">
            Free trial available · Works with your existing number · Set up in a day
          </p>
        </div>

        {/* Call-card visual */}
        <div className="relative mx-auto w-full max-w-md">
          <div
            className="absolute inset-0 -z-10 grid place-items-center"
            aria-hidden="true"
          >
            <span className="h-56 w-56 animate-ring-pulse rounded-full bg-brand-200/60" />
          </div>
          <div className="card p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Incoming call — 9:42 PM</p>
                <p className="text-xs text-slate-500">After hours · forwarded to your AI receptionist</p>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm leading-relaxed">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-600 px-4 py-2.5 text-white">
                Thanks for calling Bennett Plumbing — we're out on jobs right now,
                but I can help. What are you calling about?
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-slate-200 bg-slate-50 px-4 py-2.5 text-ink">
                My kitchen sink's leaking. Do you do repairs?
              </div>
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-600 px-4 py-2.5 text-white">
                Absolutely. I can have Mark there Tuesday at 8:00 AM — shall I book
                it?
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-slate-200 bg-slate-50 px-4 py-2.5 text-ink">
                Yes please.
              </div>
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-600 px-4 py-2.5 text-white">
                Done. You'll get a confirmation text — Mark will be there Tuesday at
                8.
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4 text-sm">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-700">
                <Icon path={icons.check} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-ink">Appointment booked — Tuesday 8:00 AM</p>
                <p className="text-xs text-slate-500">Summary sent to your phone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBar() {
  const stats = [
    { value: "Up to 62%", label: "of calls to small businesses go unanswered" },
    { value: "80%", label: "of callers who reach voicemail don't leave a message" },
    { value: "85%", label: "of callers whose call isn't answered won't call back" },
  ];
  return (
    <section className="border-y border-slate-200/70 bg-white">
      <div className="container-x grid gap-8 py-10 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.value} className="text-center sm:text-left">
            <p className="text-3xl font-extrabold tracking-tight text-brand-700">{s.value}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="container-x pb-6 text-center text-xs text-slate-400 sm:text-left">
        Industry call-tracking studies. Your numbers vary by trade.
      </p>
    </section>
  );
}

function Problem() {
  const cards = [
    {
      icon: icons.moon,
      title: "After hours",
      body: "A customer needs help at 9 PM. You closed at 5. By morning they've booked with the next listing on Google.",
    },
    {
      icon: icons.wrench,
      title: "On a job",
      body: "You're up a ladder or under a sink. The phone rings out. That was a paying job you never knew about.",
    },
    {
      icon: icons.sunset,
      title: "Lunch rush & holidays",
      body: "The front desk is swamped or it's a long weekend. Voicemail fills up. Callers hang up instead of leaving a message.",
    },
  ];
  return (
    <section className="section-y">
      <div className="container-x">
        <p className="eyebrow">The Problem</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Every missed call is a customer calling your competitor.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          You can't answer the phone while you're working. That's exactly when
          customers call — and they don't wait.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon path={c.icon} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg font-bold text-brand-700">
          Your competitor answered. That's the whole story.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Keep your number",
      body: "Turn on call forwarding for missed and after-hours calls. No new number to advertise, nothing to port.",
    },
    {
      n: "2",
      title: "AI answers like your best front-desk hire",
      body: "A natural, friendly voice that knows your services, hours, and pricing — and never has a bad day.",
    },
    {
      n: "3",
      title: "You get the bookings",
      body: "Appointments go straight on your calendar, and you get a text summary of every call. You stay in control.",
    },
  ];
  return (
    <section id="how-it-works" className="section-y bg-white">
      <div className="container-x">
        <p className="eyebrow">How It Works</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">How it works</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-lg font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const feats = [
    { icon: icons.clock, title: "Answers 24/7", body: "Nights, weekends, holidays. Every call picked up on the first ring." },
    { icon: icons.calendar, title: "Books appointments", body: "Checks your availability and books live on the call." },
    { icon: icons.message, title: "Answers common questions", body: "Hours, location, services, pricing ranges — handled instantly." },
    { icon: icons.phone, title: "Takes messages & sends summaries", body: "Every call recapped to your phone as text." },
    { icon: icons.spam, title: "Filters spam & robocalls", body: "Junk never reaches you." },
    { icon: icons.plug, title: "Works with what you have", body: "Your existing number, your existing calendar. No hardware." },
  ];
  return (
    <section className="section-y">
      <div className="container-x">
        <p className="eyebrow">What It Does</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          A front-desk hire that never sleeps.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {feats.map((f) => (
            <div key={f.title} className="card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon path={f.icon} />
              </span>
              <h3 className="mt-4 font-bold text-ink">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trial() {
  const bullets = [
    "Free trial — no credit card required",
    "No hardware to buy",
    "Cancel anytime, no contract",
  ];
  return (
    <section className="section-y bg-brand-50/70">
      <div className="container-x">
        <div className="card border-brand-100 bg-white p-8 shadow-lift sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="eyebrow">Free Trial</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Try it free. Hear the difference yourself.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
                We'll set up your AI receptionist and route a few calls through it —
                free. Listen to real recordings of it handling your customers and
                watch bookings appear on your calendar. If you don't love it,
                you've lost nothing.
              </p>
              <ul className="mt-6 space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                      <Icon path={icons.check} className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <CTAButton>Schedule a Call</CTAButton>
              <p className="text-xs text-slate-500">
                15 minutes · No pressure · We'll explain everything
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Will my customers know it's AI?",
      a: "Most callers just notice someone helpful picked up. The voice is natural, and it introduces your business by name. If a caller asks, it's honest about being an assistant.",
    },
    {
      q: "Do I have to change my phone number?",
      a: "No. You keep your number. Calls are forwarded only when you don't pick up — after hours or when you're busy.",
    },
    {
      q: "How long does setup take?",
      a: "Usually a day. We configure it around your services and hours, then you approve how it sounds before it goes live.",
    },
    {
      q: "What happens to messages and bookings?",
      a: "You get a text summary of every call, and booked appointments land in your calendar automatically.",
    },
    {
      q: "What does it cost?",
      a: "Pricing depends on your call volume — we'll walk you through it on a quick intro call. The free trial means zero risk while you decide.",
    },
    {
      q: "Is my customers' information safe?",
      a: "Yes. Call data is encrypted and never sold or shared. Only you see your calls.",
    },
  ];
  return (
    <section className="section-y bg-white">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Questions owners ask us
        </h2>
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-180">
                  <Icon path={icons.chevron} className="h-4 w-4" />
                </span>
              </summary>
              <p className="pb-5 pr-8 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-ink py-20 text-center sm:py-24">
      <div className="container-x max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Stop losing customers to voicemail.
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Book a 15-minute call. We'll show you exactly how it would work for your
          business.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <CTAButton>Schedule a Call</CTAButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-ink py-8">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <Logo dark />
        <p className="text-xs leading-relaxed text-slate-400">
          commitlylabs.com — Built for small businesses that can't afford to miss a
          call.
        </p>
        <p className="text-xs text-slate-500">© 2026 Commitly Labs</p>
      </div>
    </footer>
  );
}

/* ---------- page ---------- */

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatBar />
        <Problem />
        <HowItWorks />
        <Features />
        <Trial />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}