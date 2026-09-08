import { createFileRoute } from "@tanstack/react-router";
import heroCoach from "@/assets/hero-coach.png.asset.json";
import transform1 from "@/assets/transform-1.jpg";
import transform2 from "@/assets/transform-2.jpg";
import transform3 from "@/assets/transform-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AR Fit | Anthony Rice — Transformation Coach, Fort Lauderdale" },
      {
        name: "description",
        content:
          "1-on-1 transformation coaching for busy professionals. Build lean muscle, strip stubborn fat and optimize energy with Anthony Rice in Fort Lauderdale.",
      },
      { property: "og:title", content: "AR Fit | Anthony Rice — Transformation Coach" },
      {
        property: "og:description",
        content:
          "Science-backed nutrition, efficient hypertrophy training and relentless accountability for busy professionals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    num: "01",
    title: "Precision Nutrition",
    copy: "Fuel your metabolism without bland meal plans. Macro targets built around client dinners, travel days and the food you actually enjoy.",
    points: ["Custom macro architecture", "Restaurant & travel playbook", "No crash dieting, ever"],
  },
  {
    num: "02",
    title: "High-Yield Strength & Striking",
    copy: "Maximum muscle stimulation in minimum gym time. Hypertrophy blocks paired with striking conditioning that fits a 45-minute window.",
    points: ["3–4 sessions per week", "Progressive overload tracking", "Boxing-based conditioning"],
  },
  {
    num: "03",
    title: "Executive Accountability",
    copy: "Daily check-ins and travel-proof habits so momentum survives board meetings, red-eyes and hotel gyms.",
    points: ["Direct line to Anthony", "Weekly strategy reviews", "Habit systems that hold"],
  },
];

const transformations = [
  {
    img: transform1,
    name: "Michael D.",
    role: "Managing Partner, 42",
    stat: "-24 lbs fat, +8 lbs muscle in 12 weeks",
    quote:
      "I travel three weeks a month. Anthony built a system that survived every airport and every client dinner.",
  },
  {
    img: transform2,
    name: "Priya S.",
    role: "Founder, 36",
    stat: "-19 lbs fat, +6 lbs muscle in 16 weeks",
    quote:
      "No crash diet, no two-hour workouts. Just precision and someone checking in every single day.",
  },
  {
    img: transform3,
    name: "Robert K.",
    role: "CFO, 51",
    stat: "-31 lbs fat, +7 lbs muscle in 20 weeks",
    quote:
      "At 51 I'm stronger than I was at 30, and my energy through a 12-hour day is unrecognizable.",
  },
];

const faqs = [
  {
    q: "What if I travel frequently?",
    a: "The program is built travel-first. You get hotel-gym and bodyweight substitutions for every session, an airport and restaurant ordering framework, and check-ins that adjust to your time zone.",
  },
  {
    q: "How many hours per week do I need?",
    a: "Three to four sessions of 45–60 minutes. The training is engineered for stimulus per minute, not time spent in the building.",
  },
  {
    q: "Do I need a gym membership?",
    a: "A basic commercial gym is ideal, but home setups with adjustable dumbbells and a bench are fully supported. We build the plan around the equipment you actually have.",
  },
  {
    q: "Is this a meal plan or a diet?",
    a: "Neither. You get a flexible nutrition structure with targets and food frameworks, so your diet flexes around your calendar instead of dictating it.",
  },
  {
    q: "Who is this not for?",
    a: "Anyone looking for a 30-day quick fix. Inner circle coaching is a minimum 12-week commitment for people ready to be coached hard and consistently.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="display text-2xl tracking-widest">
            AR<span className="text-primary">.</span>FIT
          </a>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:flex">
            <a href="#method" className="transition-colors hover:text-foreground">
              Method
            </a>
            <a href="#results" className="transition-colors hover:text-foreground">
              Results
            </a>
            <a href="#start" className="transition-colors hover:text-foreground">
              Apply
            </a>
          </nav>
          <a
            href="#start"
            className="btn-primary rounded-sm px-5 py-2.5 text-xs md:text-sm"
          >
            Start Now
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero-glow relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="eyebrow">Anthony Rice · Fort Lauderdale</p>
              <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Build Lean Muscle & Reclaim Your Peak Physique —{" "}
                <span className="text-primary">Without Sacrificing Your Career or Lifestyle.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                The bespoke 1-on-1 transformation system designed specifically for busy
                professionals. Science-backed nutrition, efficient hypertrophy training, and
                relentless accountability.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#start" className="btn-primary rounded-sm px-7 py-4 text-center text-sm">
                  Start Your Transformation (Take Assessment)
                </a>
                <a href="#call" className="btn-ghost rounded-sm px-7 py-4 text-center text-sm">
                  Book a 1-on-1 Strategy Call
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-7">
                {[
                  ["39K+", "Community"],
                  ["500+", "Busy Professionals Transformed"],
                  ["Verified", "Coach"],
                ].map(([big, small]) => (
                  <div key={small}>
                    <p className="display text-2xl text-primary">{big}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {small}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-sm bg-primary/10 blur-3xl" aria-hidden />
              <img
                src={heroCoach.url}
                alt="Anthony Rice, AR Fit transformation coach, in the octagon with arms raised"
                width={1104}
                height={1408}
                className="relative w-full rounded-sm border border-border object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 border border-border bg-background/85 p-4 backdrop-blur-md">
                <p className="eyebrow">Coach</p>
                <p className="display mt-1 text-2xl">Anthony Rice</p>
                <p className="text-sm text-muted-foreground">
                  Transformation Coach · AR Fit · Fort Lauderdale, FL
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* METHOD */}
        <section id="method" className="border-y border-border py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow">The AR Fit Methodology</p>
            <h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">
              Three pillars. Zero wasted effort.
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {pillars.map((p) => (
                <article key={p.num} className="surface-card rounded-sm p-8">
                  <span className="display text-5xl text-primary/30">{p.num}</span>
                  <h3 className="mt-5 text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-primary">—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow">Transformations</p>
            <h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">
              Real executives. Measured results.
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {transformations.map((t) => (
                <figure key={t.name} className="surface-card overflow-hidden rounded-sm">
                  <img
                    src={t.img}
                    alt={`Before and after transformation of ${t.name}`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="p-6">
                    <p className="display text-xl text-primary">{t.stat}</p>
                    <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      “{t.quote}”
                    </blockquote>
                    <p className="mt-5 text-sm font-semibold">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {t.role}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONVERSION */}
        <section id="start" className="border-y border-border py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow">Two ways to begin</p>
            <h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">Choose your entry point.</h2>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <article className="surface-card flex flex-col rounded-sm p-9">
                <p className="eyebrow">Pathway A</p>
                <h3 className="mt-4 text-3xl">The AR Fit Questionnaire</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A quick 2-minute diagnostic covering your schedule, training history and goals.
                  We review every submission personally to see if you qualify for inner circle
                  coaching.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li>— 2 minutes, 9 questions</li>
                  <li>— Personal review within 24 hours</li>
                  <li>— No obligation, no sales pressure</li>
                </ul>
                <a
                  href="#questionnaire"
                  className="btn-primary mt-8 rounded-sm px-6 py-4 text-center text-sm"
                >
                  Take the Assessment
                </a>
              </article>

              <article id="call" className="surface-card flex flex-col rounded-sm p-9">
                <p className="eyebrow">Pathway B</p>
                <h3 className="mt-4 text-3xl">1-on-1 Coaching Strategy Call</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Speak directly with Anthony. We map your current physique, your calendar and the
                  fastest realistic route to the body you want.
                </p>
                <div className="mt-6 flex-1 rounded-sm border border-dashed border-border bg-background/60 p-6 text-center">
                  <p className="display text-2xl">Booking Calendar</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Live availability loads here once your scheduling link is connected.
                  </p>
                </div>
                <a href="#call" className="btn-ghost mt-8 rounded-sm px-6 py-4 text-center text-sm">
                  Book Your Strategy Call
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Before you apply.</h2>
            <div className="mt-12 divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold">
                    {f.q}
                    <span className="text-primary transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="hero-glow border-t border-border py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl sm:text-6xl">
            Stop wishing. <span className="text-primary">Start transforming.</span>
          </h2>
          <div className="mt-12 flex flex-col justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              © {new Date().getFullYear()} AR Fit · Anthony Rice · Fort Lauderdale, FL
            </p>
            <div className="flex gap-6 text-xs font-semibold uppercase tracking-[0.18em]">
              <a
                href="https://instagram.com/anthonyricefit"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@anthonyricefit"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                TikTok
              </a>
              <a href="#start" className="transition-colors hover:text-primary">
                Apply
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
