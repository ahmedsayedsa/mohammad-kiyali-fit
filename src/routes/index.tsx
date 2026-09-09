import { createFileRoute } from "@tanstack/react-router";
import heroCoach from "@/assets/hero-coach.png";
import transform1 from "@/assets/transform-1.jpg";
import transform2 from "@/assets/transform-2.jpg";
import transform3 from "@/assets/transform-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammad Kiyali | VIP Coach & IFBB Certified Trainer — Dubai, UAE" },
      {
        name: "description",
        content:
          "Elite personal training & VIP transformation coaching in Dubai with Mohammad Kiyali. Certified IFBB Academy Trainer, Licensed UAE Coach (#3266108).",
      },
      { property: "og:title", content: "Mohammad Kiyali | VIP Fitness Coach — Dubai, UAE" },
      {
        property: "og:description",
        content:
          "Bespoke fitness and nutrition architecture for executives and VIPs in Dubai. IFBB Certified.",
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
    titleEn: "IFBB Gold Standard Training",
    titleAr: "تدريب معتمد دولياً من IFBB",
    copy: "Scientific hypertrophy and structural conditioning rooted in International Fitness and Bodybuilding standards. Engineered to maximize muscular density and metabolic efficiency without joint strain.",
    points: ["Biomechanic precision & posture alignment", "Targeted body recomposition", "Time-optimized 45-min VIP sessions"],
  },
  {
    num: "02",
    titleEn: "Bespoke 'Healthy Life' Nutrition",
    titleAr: "هندسة التغذية الصحية المتوازنة",
    copy: "No starvation diets. Customized metabolic architecture built for Dubai executives, frequent business travelers, and active professionals. Eat at world-class restaurants while staying shredded.",
    points: ["Custom macro & micronutrient profiling", "Dubai dining & executive travel playbook", "Sustainable hormonal & metabolic health"],
  },
  {
    num: "03",
    titleEn: "VIP Executive Discretion & Accountability",
    titleAr: "خصوصية كاملة ومتابعة دقيقة على مدار الساعة",
    copy: "Strict confidential service tailored to VIPs, founders, and public figures. Weekly biometric audits and direct 24/7 WhatsApp concierge access.",
    points: ["Direct private line to Mohammad", "Weekly video & biometric reviews", "Uncompromising lifestyle integration"],
  },
];

const faqs = [
  {
    qEn: "Where does the 1-on-1 VIP In-Person Training take place in Dubai?",
    qAr: "أين يتم التدريب الشخصي المباشر في دبي؟",
    a: "Private 1-on-1 sessions are conducted in premier private fitness clubs across Downtown Dubai, DIFC, Palm Jumeirah, and Dubai Marina, or inside your private residential gym.",
  },
  {
    qEn: "How does the Global Online VIP Coaching work?",
    qAr: "كيف يعمل التدريب والمتابعة الأونلاين؟",
    a: "You receive your customized daily workout protocols, nutrition targets, and continuous video exercise correction through our private platform, coupled with weekly 1-on-1 review calls with Mohammad.",
  },
  {
    qEn: "Is this program suitable for busy executives with irregular schedules?",
    qAr: "هل البرنامج مناسب لرجال الأعمال وأصحاب الجداول المزدحمة؟",
    a: "Yes. In fact, 85% of Mohammad's VIP roster consists of founders, CEOs, and frequent business travelers. All routines flex around your calendar and timezone.",
  },
  {
    qEn: "How do I apply and confirm availability?",
    qAr: "كيف يتم التقديم وتأكيد الاشتراك؟",
    a: "Due to strict quality control, Mohammad works with a limited roster of VIP clients simultaneously. Click 'Book Consultation via WhatsApp' below to speak directly with our concierge and assess schedule fit.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#D4AF37] selection:text-black">
      {/* LUXURY TOP HEADER */}
      <header className="fixed top-0 z-50 w-full border-b border-[#D4AF37]/20 bg-[#090A0C]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#D4AF37]/40 bg-[#12141A] font-display text-xl font-bold tracking-wider text-[#D4AF37] shadow-lg shadow-[#D4AF37]/10 transition-transform group-hover:scale-105">
              MK
            </div>
            <div>
              <span className="font-display text-xl tracking-widest text-white">MOHAMMAD KIYALI</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                VIP Coach · Dubai 🇦🇪
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:flex">
            <a href="#credentials" className="transition-colors hover:text-[#D4AF37]">
              Credentials
            </a>
            <a href="#methodology" className="transition-colors hover:text-[#D4AF37]">
              Methodology
            </a>
            <a href="#programs" className="transition-colors hover:text-[#D4AF37]">
              VIP Programs
            </a>
            <a href="#faq" className="transition-colors hover:text-[#D4AF37]">
              FAQ
            </a>
          </nav>

          <a
            href="https://wa.me/?text=Hello%20Coach%20Mohammad%20Kiyali,%20I%20would%20like%20to%20inquire%20about%20your%20VIP%20Fitness%20Coaching%20in%20Dubai."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-sm px-5 py-2.5 text-xs tracking-wider"
          >
            VIP WhatsApp
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className="hero-glow relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              {/* Gold Official UAE & IFBB Tag */}
              <div className="inline-flex flex-wrap items-center gap-2 rounded-sm border border-[#D4AF37]/40 bg-[#14171E] px-4 py-1.5 text-xs font-semibold text-[#D4AF37] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span>IFBB Academy Certified Trainer 🥇</span>
                <span className="text-muted-foreground">|</span>
                <span>تصريح معلن رسمي (#3266108)</span>
              </div>

              <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-white leading-[1.05]">
                Elite Personal Training &amp; <br />
                <span className="text-[#D4AF37]">VIP Transformation Coaching</span> in Dubai.
              </h1>

              {/* Arabic Subheading */}
              <p className="mt-4 text-base font-medium text-slate-300 sm:text-lg" dir="rtl">
                تدريب شخصي نخبوي وهندسة تحول بدني متكاملة لرجال الأعمال وكبار الشخصيات في دبي.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Bespoke fitness and nutrition architecture tailored for high-performers. Science-driven hypertrophy, metabolic optimization, and uncompromising accountability from an internationally accredited IFBB coach.
              </p>

              {/* Primary Action Buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#programs"
                  className="btn-primary rounded-sm px-8 py-4 text-center text-sm font-bold tracking-wider"
                >
                  Apply For VIP Coaching
                </a>
                <a
                  href="https://wa.me/?text=Hello%20Coach%20Mohammad%20Kiyali,%20I%20would%20like%20to%20inquire%20about%20your%20VIP%20Fitness%20Coaching%20in%20Dubai."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost rounded-sm px-8 py-4 text-center text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span>Book Consultation via WhatsApp</span>
                  <span>💬</span>
                </a>
              </div>

              {/* Official Credential Counters */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#D4AF37]/20 pt-7 text-left">
                <div>
                  <p className="display text-2xl text-[#D4AF37]">IFBB 🥇</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Certified Academy</p>
                </div>
                <div>
                  <p className="display text-2xl text-[#D4AF37]">#3266108</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">UAE License</p>
                </div>
                <div>
                  <p className="display text-2xl text-[#D4AF37]">120K+</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Instagram Reach</p>
                </div>
                <div>
                  <p className="display text-2xl text-[#D4AF37]">DUBAI</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">United Arab Emirates</p>
                </div>
              </div>
            </div>

            {/* Right Coach Portrait Card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-sm bg-[#D4AF37]/15 blur-3xl" aria-hidden />
              
              <div className="relative overflow-hidden rounded-sm border-2 border-[#D4AF37]/40 bg-[#12141A] shadow-2xl shadow-[#D4AF37]/10">
                <img
                  src={heroCoach}
                  alt="Mohammad Kiyali, IFBB Certified VIP Coach in Dubai"
                  className="w-full h-[540px] object-cover object-top"
                />
                
                <div className="absolute bottom-0 inset-x-0 border-t border-[#D4AF37]/30 bg-[#090A0C]/90 p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="eyebrow text-[#D4AF37]">IFBB Academy Certified · Dubai, UAE</p>
                      <p className="display mt-1 text-2xl text-white">Mohammad Kiyali</p>
                      <p className="text-xs text-muted-foreground">
                        ⭐ VIP ⭐ Transformation Coach · تصريح معلن (3266108)
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[#D4AF37]/50 bg-[#1A1D24] text-xl text-[#D4AF37]">
                      🏆
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY SECTION */}
        <section id="methodology" className="border-y border-[#D4AF37]/20 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow text-[#D4AF37]">The Executive Standard · المعايير النخبوية</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-display text-white uppercase tracking-wide">
                Three Pillars of Physical Mastery
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                Designed to deliver noticeable, elite physical presence without disrupting high-stakes business commitments.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((p) => (
                <article key={p.num} className="surface-card rounded-sm p-8 border border-[#D4AF37]/25 hover:border-[#D4AF37]/70 transition-all">
                  <span className="display text-5xl text-[#D4AF37]/40">{p.num}</span>
                  <h3 className="mt-5 text-2xl font-display text-white">{p.titleEn}</h3>
                  <p className="text-sm font-semibold text-[#D4AF37] mt-1" dir="rtl">{p.titleAr}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm text-slate-300">
                        <span className="text-[#D4AF37]">—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VIP COACHING PACKAGES (TWO ENTRY PATHWAYS) */}
        <section id="programs" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow text-[#D4AF37]">VIP Programs · برامج التدريب الحصرية</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-display text-white uppercase tracking-wide">
                Select Your Coaching Experience
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Limited roster availability to ensure undivided private attention for every client.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
              
              {/* TIER A: PRIVATE IN-PERSON (DUBAI) */}
              <article className="surface-card flex flex-col justify-between rounded-sm p-9 border-2 border-[#D4AF37]/50 shadow-xl shadow-[#D4AF37]/10">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="eyebrow text-[#D4AF37]">Tier I · Dubai Exclusive 🇦🇪</p>
                    <span className="rounded-sm bg-[#D4AF37]/20 px-2.5 py-1 text-[11px] font-bold text-[#D4AF37]">
                      STRICTLY LIMITED
                    </span>
                  </div>
                  <h3 className="text-3xl font-display text-white">Private 1-on-1 In-Person VIP Coaching</h3>
                  <p className="text-sm font-semibold text-[#D4AF37] mt-1" dir="rtl">
                    التدريب الشخصي الخاص المباشر في دبي
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Comprehensive, private, hands-on training sessions in Dubai. Ideal for high-profile individuals, founders, and executives seeking direct physical coaching, technique perfection, and private accountability.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Conducted in premier private clubs across Dubai or private gym</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Real-time biomechanical analysis &amp; posture correction</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>VIP nutrition planning &amp; clinical body composition scans</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Direct 24/7 WhatsApp priority access</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://wa.me/?text=Hello%20Coach%20Mohammad,%20I%20am%20interested%20in%20applying%20for%20your%20Private%201-on-1%20VIP%20In-Person%20Training%20in%20Dubai."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8 rounded-sm px-6 py-4 text-center text-sm font-bold tracking-wider"
                >
                  Inquire For Dubai In-Person VIP
                </a>
              </article>

              {/* TIER B: BESPOKE GLOBAL ONLINE VIP */}
              <article className="surface-card flex flex-col justify-between rounded-sm p-9 border border-[#D4AF37]/30">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="eyebrow text-[#D4AF37]">Tier II · Worldwide Access 🌍</p>
                    <span className="rounded-sm bg-[#1A1D24] px-2.5 py-1 text-[11px] font-bold text-slate-300">
                      BESPOKE ONLINE
                    </span>
                  </div>
                  <h3 className="text-3xl font-display text-white">Global Online VIP Transformation Coaching</h3>
                  <p className="text-sm font-semibold text-[#D4AF37] mt-1" dir="rtl">
                    برنامج التحول البدني الأونلاين لكافة دول الخليج والعالم
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    The complete elite coaching experience delivered to your smartphone wherever you travel. Tailored training routines, personalized nutrition formulas, and relentless weekly video accountability.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Custom hyper-efficient workout routines tailored to your gym/equipment</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Dynamic nutrition &amp; travel dining guides</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Weekly video progress reviews &amp; metric tracking</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Direct WhatsApp guidance from Mohammad</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://wa.me/?text=Hello%20Coach%20Mohammad,%20I%20am%20interested%20in%20applying%20for%20your%20Global%20Online%20VIP%20Coaching%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-8 rounded-sm px-6 py-4 text-center text-sm font-semibold"
                >
                  Apply For Online VIP Coaching
                </a>
              </article>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-[#D4AF37]/20 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center mb-12">
              <p className="eyebrow text-[#D4AF37]">Transparency &amp; Discretion</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-display text-white uppercase">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="group rounded-sm border border-[#D4AF37]/20 bg-[#12141A] p-6 cursor-pointer">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-white">
                    <div>
                      <p>{f.qEn}</p>
                      <p className="text-xs text-[#D4AF37] mt-1 font-normal" dir="rtl">{f.qAr}</p>
                    </div>
                    <span className="text-[#D4AF37] transition-transform duration-300 group-open:rotate-45 text-2xl font-bold">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground border-t border-border pt-4">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER WITH UAE OFFICIAL LICENSE */}
      <footer className="border-t border-[#D4AF37]/30 bg-[#07080A] py-16 text-xs text-muted-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-12 gap-8 items-center justify-between pb-10 border-b border-border">
            <div className="md:col-span-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#D4AF37]/50 bg-[#14171E] font-display text-lg font-bold text-[#D4AF37]">
                  MK
                </div>
                <div>
                  <p className="display text-xl tracking-wider text-white">MOHAMMAD KIYALI</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]">VIP Transformation Coach · Dubai, UAE</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-400 max-w-md leading-relaxed">
                Empowering high-performing executives and VIPs across Dubai and the GCC with bespoke fitness architecture, IFBB standards, and holistic longevity.
              </p>
            </div>

            <div className="md:col-span-6 flex flex-col md:items-end gap-3">
              <div className="rounded-sm border border-[#D4AF37]/30 bg-[#12141A] p-3 text-right">
                <p className="text-[11px] font-bold text-white">
                  🇦🇪 ترخيص إعلاني رسمي من دولة الإمارات
                </p>
                <p className="text-[10px] text-[#D4AF37]">
                  تصريح معلن رقم: 3266108 · دبي، الإمارات العربية المتحدة
                </p>
              </div>

              <div className="flex items-center gap-6 mt-2">
                <a
                  href="https://instagram.com/mhammad_kayali_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-[#D4AF37] transition-colors"
                >
                  <span>Instagram: @mhammad_kayali_</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
            <p>© {new Date().getFullYear()} Mohammad Kiyali. All rights reserved.</p>
            <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]">
              IFBB Academy Certified · Dubai UAE
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
