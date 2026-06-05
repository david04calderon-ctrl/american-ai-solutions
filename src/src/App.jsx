import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Services", "About", "Testimonials", "Contact"];

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 8h20M4 14h14M4 20h8" stroke="#1A3A8F" strokeWidth="2" strokeLinecap="square"/>
        <rect x="18" y="16" width="8" height="8" stroke="#1A3A8F" strokeWidth="2"/>
        <path d="M20 20h4M22 18v4" stroke="#1A3A8F" strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
    ),
    title: "AI Workflow Automation",
    desc: "Eliminate manual bottlenecks. We map your existing processes and deploy AI agents that handle repetitive work — freeing your team for high-value decisions.",
    bullets: ["Process audit & mapping", "Automated approval chains", "Real-time monitoring dashboards"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="6" width="10" height="7" stroke="#1A3A8F" strokeWidth="2"/>
        <rect x="16" y="6" width="10" height="7" stroke="#1A3A8F" strokeWidth="2"/>
        <rect x="9" y="17" width="10" height="7" stroke="#1A3A8F" strokeWidth="2"/>
        <path d="M7 13v2h14v-2" stroke="#1A3A8F" strokeWidth="2" strokeLinecap="square"/>
        <line x1="14" y1="15" x2="14" y2="17" stroke="#1A3A8F" strokeWidth="2"/>
      </svg>
    ),
    title: "Custom AI Tool Integration",
    desc: "Connect the right AI to your existing stack. We build and integrate purpose-built tools into your CRM, ERP, or ops platforms — no rip-and-replace required.",
    bullets: ["API-first architecture", "CRM & ERP connectors", "Custom model fine-tuning"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="5" stroke="#1A3A8F" strokeWidth="2"/>
        <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#1A3A8F" strokeWidth="2" strokeLinecap="square"/>
        <path d="M10 16l4 4 4-4" stroke="#1A3A8F" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"/>
      </svg>
    ),
    title: "Team AI Training",
    desc: "AI adoption fails when teams don't buy in. We run hands-on workshops that turn skeptics into power users — building internal capability that compounds over time.",
    bullets: ["Role-specific workshops", "Prompt engineering training", "Adoption playbooks & SOPs"],
  },
];

const TESTIMONIALS = [
  {
    quote: "They didn't just hand us a tool — they rebuilt how our ops team thinks about time. We cut our reporting cycle in half within 60 days.",
    name: "Marcus T.",
    title: "Director of Operations",
    company: "Detroit Logistics Co.",
    initials: "MT",
  },
  {
    quote: "Finally an AI firm that speaks in plain English and delivers on the timeline they promise. No fluff, all execution.",
    name: "Sandra K.",
    title: "CEO",
    company: "Midwest Healthcare Group",
    initials: "SK",
  },
  {
    quote: "The workflow automation they built us went live in three weeks. ROI was clear inside the first month.",
    name: "James R.",
    title: "VP of Revenue",
    company: "Great Lakes Financial",
    initials: "JR",
  },
];

const DetroitSkyline = () => (
  <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
    {/* Sky */}
    <rect width="800" height="200" fill="#EEF2FA"/>
    {/* Ground */}
    <rect y="160" width="800" height="40" fill="#D6DEF0"/>
    {/* River highlight */}
    <rect y="155" width="800" height="8" fill="#C5D0E8" opacity="0.6"/>

    {/* Renaissance Center - centerpiece */}
    <rect x="350" y="40" width="18" height="120" fill="#1A3A8F"/>
    <rect x="372" y="20" width="22" height="140" fill="#1A3A8F"/>
    <rect x="398" y="40" width="18" height="120" fill="#1A3A8F"/>
    {/* RenCen antennas */}
    <line x1="383" y1="20" x2="383" y2="5" stroke="#1A3A8F" strokeWidth="3"/>
    <rect x="380" y="4" width="6" height="3" fill="#1A3A8F"/>

    {/* Buildings left cluster */}
    <rect x="60" y="80" width="30" height="80" fill="#2B4FA8"/>
    <rect x="95" y="60" width="20" height="100" fill="#1A3A8F"/>
    <rect x="120" y="90" width="25" height="70" fill="#3A5DB8"/>
    <rect x="150" y="70" width="18" height="90" fill="#1A3A8F"/>
    <rect x="172" y="100" width="22" height="60" fill="#2B4FA8"/>

    {/* Mid-left cluster */}
    <rect x="210" y="55" width="16" height="105" fill="#1A3A8F"/>
    <rect x="230" y="75" width="28" height="85" fill="#2B4FA8"/>
    <rect x="262" y="88" width="14" height="72" fill="#1A3A8F"/>
    <rect x="280" y="68" width="20" height="92" fill="#3A5DB8"/>
    <rect x="304" y="95" width="18" height="65" fill="#1A3A8F"/>
    <rect x="326" y="78" width="20" height="82" fill="#2B4FA8"/>

    {/* Mid-right cluster */}
    <rect x="420" y="72" width="22" height="88" fill="#2B4FA8"/>
    <rect x="446" y="88" width="16" height="72" fill="#1A3A8F"/>
    <rect x="466" y="60" width="24" height="100" fill="#3A5DB8"/>
    <rect x="494" y="80" width="18" height="80" fill="#1A3A8F"/>
    <rect x="516" y="95" width="20" height="65" fill="#2B4FA8"/>

    {/* Right cluster */}
    <rect x="560" y="65" width="28" height="95" fill="#1A3A8F"/>
    <rect x="592" y="80" width="18" height="80" fill="#2B4FA8"/>
    <rect x="614" y="70" width="22" height="90" fill="#1A3A8F"/>
    <rect x="640" y="85" width="16" height="75" fill="#3A5DB8"/>
    <rect x="660" y="95" width="24" height="65" fill="#1A3A8F"/>
    <rect x="688" y="78" width="20" height="82" fill="#2B4FA8"/>
    <rect x="712" y="90" width="18" height="70" fill="#1A3A8F"/>

    {/* Windows - scattered dots for depth */}
    {[
      [358,55],[362,55],[366,55],[358,65],[362,65],[366,65],
      [378,30],[382,30],[378,40],[382,40],[386,40],[378,50],[382,50],
      [403,55],[407,55],[403,65],[407,65],
      [98,72],[102,72],[98,82],[102,82],[106,82],
      [216,65],[220,65],[216,75],[220,75],[216,85],
      [235,85],[239,85],[235,95],[239,95],
      [471,72],[475,72],[471,82],[475,82],[471,92],[475,92],
      [565,78],[569,78],[565,88],[569,88],[565,98],
      [619,82],[623,82],[619,92],[623,92],
    ].map(([x, y], i) => (
      <rect key={i} x={x} y={y} width="2" height="3" fill="white" opacity="0.6"/>
    ))}

    {/* Foreground water texture lines */}
    <line x1="0" y1="168" x2="800" y2="168" stroke="#B8C8E0" strokeWidth="1" opacity="0.5"/>
    <line x1="0" y1="174" x2="800" y2="174" stroke="#B8C8E0" strokeWidth="1" opacity="0.3"/>
  </svg>
);

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [formState, setFormState] = useState("idle");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setFormState("loading");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setFormState("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setFormState("error");
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif", color: "#1C1C1C", background: "#FFFFFF" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        .display-font { font-family: 'DM Serif Display', Georgia, serif; }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #1C1C1C;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #1A3A8F;
          transition: width 0.25s;
        }
        .nav-link:hover { color: #1A3A8F; }
        .nav-link:hover::after { width: 100%; }

        .btn-primary {
          background: #1A3A8F;
          color: white;
          border: none;
          padding: 14px 32px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.2s, transform 0.15s;
          display: inline-block;
          text-decoration: none;
          font-family: inherit;
        }
        .btn-primary:hover { background: #142E73; transform: translateY(-1px); }
        .btn-primary:active { transform: translateY(0); }

        .btn-outline {
          background: transparent;
          color: #1A3A8F;
          border: 2px solid #1A3A8F;
          padding: 12px 30px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 2px;
          transition: all 0.2s;
          font-family: inherit;
        }
        .btn-outline:hover { background: #1A3A8F; color: white; }

        .service-card {
          border: 1px solid #E4E8F0;
          padding: 40px 36px;
          border-radius: 2px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
          background: white;
        }
        .service-card:hover {
          border-color: #1A3A8F;
          box-shadow: 0 8px 32px rgba(26,58,143,0.10);
          transform: translateY(-3px);
        }

        .input-field {
          width: 100%;
          border: 1px solid #D1D8E8;
          border-radius: 2px;
          padding: 13px 16px;
          font-size: 15px;
          font-family: inherit;
          color: #1C1C1C;
          background: white;
          transition: border-color 0.2s;
          outline: none;
        }
        .input-field:focus { border-color: #1A3A8F; }
        .input-field::placeholder { color: #9AA3B8; }

        .testimonial-card {
          border: 1px solid #E4E8F0;
          padding: 36px;
          border-radius: 2px;
          background: white;
          position: relative;
        }
        .testimonial-card::before {
          content: '"';
          font-family: 'DM Serif Display', serif;
          font-size: 80px;
          color: #1A3A8F;
          opacity: 0.12;
          position: absolute;
          top: 12px;
          left: 28px;
          line-height: 1;
        }

        .divider-line {
          width: 48px;
          height: 2px;
          background: #1A3A8F;
          margin-bottom: 24px;
        }

        .stat-block {
          border-left: 3px solid #1A3A8F;
          padding-left: 20px;
        }

        @media (max-width: 768px) {
          .hero-headline { font-size: 36px !important; line-height: 1.15 !important; }
          .section-title { font-size: 30px !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }

        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }

        .hero-rule {
          display: inline-block;
          width: 2px;
          height: 56px;
          background: #1A3A8F;
          margin-right: 20px;
          vertical-align: middle;
          flex-shrink: 0;
        }

        .tag-pill {
          display: inline-block;
          background: #EEF2FA;
          color: #1A3A8F;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 1px;
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "white",
        borderBottom: "1px solid #E4E8F0",
        backdropFilter: "blur(8px)",
        transition: "box-shadow 0.3s",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 8, height: 36, background: "#1A3A8F", borderRadius: 1 }}/>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.02em", lineHeight: 1.1 }}>American AI Solutions</div>
              <div style={{ fontSize: 10, fontWeight: 500, color: "#6B7694", letterSpacing: "0.12em", textTransform: "uppercase" }}>LLC · Detroit, MI</div>
            </div>
          </div>
          <div className="nav-desktop" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {NAV_LINKS.map(l => (
              <span key={l} className="nav-link" onClick={() => scrollTo(l.toLowerCase())}>{l}</span>
            ))}
            <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 12 }} onClick={() => scrollTo("contact")}>Book a Call</button>
          </div>
          <button
            className="nav-mobile-btn"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", flexDirection: "column", gap: 5 }}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span style={{ display: "block", width: 24, height: 2, background: "#1C1C1C", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }}/>
            <span style={{ display: "block", width: 24, height: 2, background: "#1C1C1C", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }}/>
            <span style={{ display: "block", width: 24, height: 2, background: "#1C1C1C", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }}/>
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu" style={{ borderTop: "1px solid #E4E8F0", padding: "20px 32px 28px", display: "flex", flexDirection: "column", gap: 20 }}>
            {NAV_LINKS.map(l => (
              <span key={l} className="nav-link" style={{ fontSize: 16 }} onClick={() => scrollTo(l.toLowerCase())}>{l}</span>
            ))}
            <button className="btn-primary" style={{ width: "100%", marginTop: 8 }} onClick={() => scrollTo("contact")}>Book a Free Strategy Call</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 160, paddingBottom: 120, background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ marginBottom: 28 }}>
              <span className="tag-pill">Detroit-Based · AI Consulting</span>
            </div>
            <h1 className="display-font hero-headline" style={{ fontSize: 58, fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 28, color: "#0D1117" }}>
              Strategic AI Implementation<br />
              <span style={{ color: "#1A3A8F", fontStyle: "italic" }}>for Real Business Results.</span>
            </h1>
            <p style={{ fontSize: 19, color: "#4A5473", lineHeight: 1.7, marginBottom: 44, maxWidth: 580, fontWeight: 400 }}>
              We help Detroit businesses automate workflows and deploy AI tools that actually move revenue — not just proof-of-concepts that collect dust.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <button className="btn-primary" style={{ fontSize: 14 }} onClick={() => scrollTo("contact")}>Book a Free Strategy Call</button>
              <button className="btn-outline" onClick={() => scrollTo("services")}>See Our Services</button>
            </div>
            <div style={{ display: "flex", gap: 40, marginTop: 64, flexWrap: "wrap" }}>
              {[["48hrs", "Average audit turnaround"], ["3–8 weeks", "Time to first deployment"], ["100%", "Michigan-based clients"]].map(([stat, label]) => (
                <div key={stat} className="stat-block">
                  <div style={{ fontSize: 26, fontWeight: 700, color: "#1A3A8F", letterSpacing: "-0.02em" }}>{stat}</div>
                  <div style={{ fontSize: 13, color: "#6B7694", marginTop: 2, fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 0", background: "#F7F9FC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <FadeIn>
            <div className="divider-line"/>
            <span className="tag-pill" style={{ marginBottom: 14, display: "inline-block" }}>What We Do</span>
            <h2 className="display-font section-title" style={{ fontSize: 42, fontWeight: 400, marginBottom: 16, color: "#0D1117" }}>Core Services</h2>
            <p style={{ color: "#4A5473", fontSize: 17, maxWidth: 520, lineHeight: 1.65, marginBottom: 60 }}>
              Three focused offerings. No bloated retainers. You get exactly what your operation needs.
            </p>
          </FadeIn>
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 100}>
                <div className="service-card">
                  <div style={{ marginBottom: 24 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, letterSpacing: "-0.01em" }}>{s.title}</h3>
                  <p style={{ fontSize: 15, color: "#4A5473", lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {s.bullets.map(b => (
                      <li key={b} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#1C1C1C" }}>
                        <span style={{ width: 5, height: 5, background: "#1A3A8F", display: "inline-block", flexShrink: 0, borderRadius: 1 }}/>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <FadeIn>
              <div>
                <div className="divider-line"/>
                <span className="tag-pill" style={{ marginBottom: 14, display: "inline-block" }}>About Us</span>
                <h2 className="display-font section-title" style={{ fontSize: 42, fontWeight: 400, marginBottom: 24, color: "#0D1117", lineHeight: 1.1 }}>
                  Built in Detroit.<br />
                  <span style={{ fontStyle: "italic", color: "#1A3A8F" }}>Built to Execute.</span>
                </h2>
                <p style={{ fontSize: 16, color: "#4A5473", lineHeight: 1.75, marginBottom: 20 }}>
                  American AI Solutions LLC is a Detroit-based AI consulting firm founded on one principle: implementation beats strategy decks. We don't sell roadmaps — we build systems that run.
                </p>
                <p style={{ fontSize: 16, color: "#4A5473", lineHeight: 1.75, marginBottom: 32 }}>
                  Founded by David Calderon, we've embedded ourselves in the Detroit business community to understand what local operations actually need. No Silicon Valley assumptions. No one-size-fits-all platforms. Just disciplined AI deployment that compounds over time.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {["Fully licensed Michigan LLC", "Remote-capable, always available", "Results-first engagement model"].map(point => (
                    <div key={point} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 20, height: 20, background: "#1A3A8F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"/></svg>
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 500 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div>
                <div style={{ border: "1px solid #E4E8F0", borderRadius: 2, overflow: "hidden" }}>
                  <DetroitSkyline />
                </div>
                <p style={{ fontSize: 12, color: "#9AA3B8", marginTop: 12, textAlign: "center", letterSpacing: "0.04em", textTransform: "uppercase" }}>Detroit, Michigan — Our Home Market</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "100px 0", background: "#F7F9FC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <FadeIn>
            <div className="divider-line"/>
            <span className="tag-pill" style={{ marginBottom: 14, display: "inline-block" }}>Client Results</span>
            <h2 className="display-font section-title" style={{ fontSize: 42, fontWeight: 400, marginBottom: 60, color: "#0D1117" }}>What Our Clients Say</h2>
          </FadeIn>
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
                <div className="testimonial-card">
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#2D3450", marginBottom: 28, position: "relative", zIndex: 1, paddingTop: 8 }}>
                    {t.quote}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid #E4E8F0", paddingTop: 20 }}>
                    <div style={{ width: 40, height: 40, background: "#1A3A8F", borderRadius: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: "#6B7694" }}>{t.title}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <FadeIn>
              <div>
                <div className="divider-line"/>
                <span className="tag-pill" style={{ marginBottom: 14, display: "inline-block" }}>Get in Touch</span>
                <h2 className="display-font section-title" style={{ fontSize: 42, fontWeight: 400, marginBottom: 20, color: "#0D1117", lineHeight: 1.1 }}>
                  Start with a<br />
                  <span style={{ fontStyle: "italic", color: "#1A3A8F" }}>Free Strategy Call.</span>
                </h2>
                <p style={{ fontSize: 16, color: "#4A5473", lineHeight: 1.75, marginBottom: 40 }}>
                  We'll audit your current workflows, identify your highest-leverage AI opportunities, and tell you exactly what to build first — at zero cost to you.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { label: "Email", value: "david@americanaisolutionsllc.com", href: "mailto:david@americanaisolutionsllc.com" },
                    { label: "Location", value: "Detroit, Michigan", href: null },
                    { label: "Response Time", value: "Within 24 business hours", href: null },
                  ].map(({ label, value, href }) => (
                    <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, background: "#1A3A8F", marginTop: 6, flexShrink: 0 }}/>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#9AA3B8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>{label}</div>
                        {href ? <a href={href} style={{ fontSize: 15, color: "#1A3A8F", fontWeight: 500, textDecoration: "none" }}>{value}</a> : <div style={{ fontSize: 15, color: "#1C1C1C", fontWeight: 500 }}>{value}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div style={{ background: "#F7F9FC", padding: "44px 40px", border: "1px solid #E4E8F0", borderRadius: 2 }}>
                {formState === "success" ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ width: 52, height: 52, background: "#1A3A8F", borderRadius: 1, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                      <svg width="24" height="20" viewBox="0 0 24 20" fill="none"><path d="M2 10l8 8L22 2" stroke="white" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"/></svg>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Message Received</h3>
                    <p style={{ color: "#4A5473", fontSize: 15 }}>We'll be in touch within 24 business hours.</p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Send Us a Message</h3>
                    <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#4A5473", marginBottom: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>Full Name *</label>
                        <input className="input-field" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="David Calderon" />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#4A5473", marginBottom: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>Company</label>
                        <input className="input-field" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} placeholder="Your Company" />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#4A5473", marginBottom: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>Email Address *</label>
                      <input className="input-field" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@company.com" />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#4A5473", marginBottom: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>Tell Us About Your Operation *</label>
                      <textarea className="input-field" rows={4} style={{ resize: "vertical" }} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="What processes are slowing you down? Where are you losing time or revenue?" />
                    </div>
                    {formState === "error" && <p style={{ color: "#B91C1C", fontSize: 13 }}>Something went wrong. Please email us directly.</p>}
                    <button
                      className="btn-primary"
                      style={{ width: "100%", textAlign: "center", marginTop: 4, opacity: formState === "loading" ? 0.7 : 1 }}
                      onClick={handleSubmit}
                      disabled={formState === "loading"}
                    >
                      {formState === "loading" ? "Sending…" : "Book My Free Strategy Call"}
                    </button>
                    <p style={{ fontSize: 12, color: "#9AA3B8", textAlign: "center" }}>No spam. No sales pitch. Just a real conversation.</p>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0D1117", color: "white", padding: "48px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 6, height: 30, background: "#1A3A8F", borderRadius: 1 }}/>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.02em" }}>American AI Solutions LLC</div>
                  <div style={{ fontSize: 11, color: "#6B7694", letterSpacing: "0.1em", textTransform: "uppercase" }}>Detroit, Michigan</div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: "#6B7694", maxWidth: 280, lineHeight: 1.65 }}>
                AI consulting built for businesses that are serious about execution.
              </p>
            </div>
            <div style={{ display: "flex", gap: 48 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#9AA3B8", textTransform: "uppercase", marginBottom: 16 }}>Quick Links</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {NAV_LINKS.map(l => (
                    <span key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ fontSize: 14, color: "#9AA3B8", cursor: "pointer", transition: "color 0.2s" }} onMouseOver={e => e.target.style.color = "white"} onMouseOut={e => e.target.style.color = "#9AA3B8"}>{l}</span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#9AA3B8", textTransform: "uppercase", marginBottom: 16 }}>Connect</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href="mailto:david@americanaisolutionsllc.com" style={{ fontSize: 14, color: "#9AA3B8", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.target.style.color = "white"} onMouseOut={e => e.target.style.color = "#9AA3B8"}>Email Us</a>
                  <a href="https://linkedin.com/company/american-ai-solutions" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#9AA3B8", textDecoration: "none" }} onMouseOver={e => { e.currentTarget.style.color = "white"; }} onMouseOut={e => { e.currentTarget.style.color = "#9AA3B8"; }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #1E2535", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 13, color: "#4A5473" }}>© 2026 American AI Solutions LLC. All rights reserved.</p>
            <p style={{ fontSize: 13, color: "#4A5473" }}>Detroit, Michigan · EIN: 42-2142801</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
