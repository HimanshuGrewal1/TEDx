import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = ["Home", "About", "Theme", "Speakers", "Past Editions", "Team", "Contact"];

const STATS = [
  { value: "16+", label: "Speakers" },
  { value: "2000+", label: "Community" },
  { value: "2015", label: "Est. Year" },
  { value: "7+", label: "Editions" },
];

const FEATURES = [
  {
    icon: "📍",
    title: "LOCATION",
    desc: "Auditorium, IIIT Allahabad ,jalwar, Allahabad, Uttar Pradesh 211015",
  },
  {
    icon: "🌐",
    title: "COMMUNITY STRENGTH",
    desc: "Standing 2000+ strong, our community comprises curious minds with an insatiable appetite for learning and innovation.",
  },
  {
    icon: "🏛️",
    title: "LEGACY",
    desc: "Ranking among India's top institutes of information technology, IIITA adds depth and credibility to our vision.",
  },
  {
    icon: "💡",
    title: "IMPACTFUL IDEAS",
    desc: "We bring forward powerful ideas that challenge norms and carry the potential to transform lives and society.",
  },
];

const PAST_SPEAKERS = [
  { name: "Himanshu", topic: "ejbfiwfelwfh ws", year: "2006" },
  // { name: "Rajan Mehta", topic: "Rethinking Education", year: "2023" },
  // { name: "Priya Nair", topic: "Climate Futures", year: "2022" },
  // { name: "Aditya Verma", topic: "Startup Mindset", year: "2022" },
  // { name: "Dr. Kavita Singh", topic: "Neuroscience of Creativity", year: "2021" },
  // { name: "Siddharth Rao", topic: "The Invisible Internet", year: "2021" },
];

function CountdownTimer() {
  const eventDate = new Date(2026, 3, 19, 14, 30, 0); 
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calc = () => {
      const diff = eventDate - new Date();
     
      if (diff <= 0) return setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
      {[["d", "DAYS"], ["h", "HRS"], ["m", "MIN"], ["s", "SEC"]].map(([k, label]) => (
        <div key={k} style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          background: "rgba(235,45,45,0.12)", border: "1px solid rgba(235,45,45,0.35)",
          borderRadius: "6px", padding: "1rem 1.4rem", minWidth: "72px"
        }}>
          <span style={{ fontSize: "2.4rem", fontFamily: "'Bebas Neue', sans-serif", color: "#eb2d2d", lineHeight: 1 }}>
            {String(timeLeft[k] ?? 0).padStart(2, "0")}
          </span>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#aaa", marginTop: "4px" }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

function AnimatedText({ text, style }) {
  return (
    <span style={style}>
      {text.split("").map((ch, i) => (
        <span key={i} style={{
          display: "inline-block",
          animation: `fadeSlideUp 0.6s ease forwards`,
          animationDelay: `${i * 0.035}s`,
          opacity: 0,
        }}>{ch === " " ? "\u00A0" : ch}</span>
      ))}
    </span>
  );
}

export default function TEDxIIITA() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", roll: "", why: "", isStudent: "yes" });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { background: #0a0a0a; color: #f0ede8; font-family: 'DM Sans', sans-serif; overflow-x: hidden; max-width: 100%; }
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }
    @keyframes scanline {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100vh); }
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #0a0a0a; }
    ::-webkit-scrollbar-thumb { background: #eb2d2d; border-radius: 2px; }
    .nav-link {
      color: #ccc; text-decoration: none; font-size: 0.78rem;
      letter-spacing: 0.12em; font-weight: 500; text-transform: uppercase;
      transition: color 0.2s; position: relative; padding-bottom: 4px;
    }
    .nav-link::after {
      content: ''; position: absolute; bottom: 0; left: 0; width: 0;
      height: 1px; background: #eb2d2d; transition: width 0.3s;
    }
    .nav-link:hover { color: #fff; }
    .nav-link:hover::after { width: 100%; }
    .feature-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px; padding: 2rem 1.5rem;
      transition: transform 0.3s, border-color 0.3s, background 0.3s;
    }
    .feature-card:hover {
      transform: translateY(-6px);
      border-color: rgba(235,45,45,0.4);
      background: rgba(235,45,45,0.05);
    }
    .speaker-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px; padding: 1.5rem;
      transition: all 0.3s;
      position: relative; overflow: hidden;
    }
    .speaker-card::before {
      content: ''; position: absolute;
      top: 0; left: 0; width: 3px; height: 0;
      background: #eb2d2d; transition: height 0.3s;
    }
    .speaker-card:hover { border-color: rgba(235,45,45,0.3); transform: translateX(4px); }
    .speaker-card:hover::before { height: 100%; }
    .register-btn {
      background: #eb2d2d; color: #fff; border: none;
      padding: 0.9rem 2.5rem; font-family: 'Bebas Neue', sans-serif;
      font-size: 1.1rem; letter-spacing: 0.15em; border-radius: 4px;
      cursor: pointer; transition: all 0.2s; position: relative; overflow: hidden;
    }
    .register-btn::after {
      content: ''; position: absolute;
      top: 50%; left: 50%; width: 0; height: 0;
      background: rgba(255,255,255,0.2); border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.4s, height 0.4s, opacity 0.4s;
    }
    .register-btn:hover { background: #c91e1e; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(235,45,45,0.4); }
    .register-btn:hover::after { width: 300px; height: 300px; opacity: 0; }
    .form-input {
      width: 100%; background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.12); border-radius: 6px;
      padding: 0.8rem 1rem; color: #f0ede8; font-family: 'DM Sans', sans-serif;
      font-size: 0.9rem; outline: none; transition: border-color 0.2s;
    }
    .form-input:focus { border-color: #eb2d2d; }
    .form-input::placeholder { color: #666; }
    .noise-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 999; opacity: 0.025;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    }
    @media (max-width: 768px) {
      .desktop-nav { display: none !important; }
      .register-btn-nav { display: none !important; }
      .mobile-menu-btn { display: flex !important; }
    }
    @media (min-width: 769px) {
      .mobile-menu-btn { display: none !important; }
    }
    .mobile-nav {
      display: none;
      flex-direction: column;
      gap: 0;
      background: rgba(10,10,10,0.98);
      border-top: 1px solid rgba(255,255,255,0.06);
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.35s ease, opacity 0.3s ease;
      opacity: 0;
    }
    .mobile-nav.open {
      display: flex;
      max-height: 500px;
      opacity: 1;
    }
    @media (max-width: 768px) {
      .mobile-nav { display: flex; }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="noise-overlay" />

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled || menuOpen ? "rgba(10,10,10,0.98)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s",
      }}>
        {/* Top bar */}
        <div style={{
          padding: "1rem 2rem",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.5rem", letterSpacing: "0.08em",
              color: "#fff"
            }}>
              <span style={{ color: "#eb2d2d" }}>TEDx</span>IIITA
            </span>
          </div>

          <div className="desktop-nav" style={{ display: "flex", gap: "2rem" }}>
            {NAV_LINKS.map((l, i) => {
  const isTeam = l === "Team";

  if (isTeam) {
    return (
      <Link key={l} to="/team" className="nav-link">
        {l}
      </Link>
    );
  }

  return (
    <a
      key={l}
      href="#"
      className="nav-link"
      onClick={e => {
        e.preventDefault();
        scrollTo(l.toLowerCase().replace(/ /g, "-"));
        setMenuOpen(false);
      }}
    >
      {l}
    </a>
  );
})}
            {/* {NAV_LINKS.map(l => (
              <a key={l} href="#" className="nav-link"
                onClick={e => { e.preventDefault(); scrollTo(l.toLowerCase().replace(/ /g, "-")); }}>
                {l}
              </a>
            ))} */}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button className="register-btn register-btn-nav" style={{ padding: "0.55rem 1.4rem", fontSize: "0.85rem" }}
              onClick={() => scrollTo("contact")}>
              Register
            </button>

            {/* Hamburger */}
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                flexDirection: "column", gap: "5px", padding: "4px",
              }}>
              <span style={{
                display: "block", width: "24px", height: "2px", background: "#fff",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
              }} />
              <span style={{
                display: "block", width: "24px", height: "2px", background: "#fff",
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1
              }} />
              <span style={{
                display: "block", width: "24px", height: "2px", background: "#fff",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"
              }} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown — inside nav so it sits flush below */}
        <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
          {NAV_LINKS.map((l, i) => {
  const isTeam = l === "Team";

  return (
    <a
      key={l}
      href={isTeam ? "/team" : "#"}
      className="nav-link"
      onClick={e => {
        if (!isTeam) {
          e.preventDefault();
          scrollTo(l.toLowerCase().replace(/ /g, "-"));
        }
        setMenuOpen(false);
      }}
      style={{
        fontSize: "1rem",
        padding: "1rem 2rem",
        borderBottom:
          i < NAV_LINKS.length - 1
            ? "1px solid rgba(255,255,255,0.05)"
            : "none",
        display: "block",
        transition: `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${
          i * 0.05
        }s`,
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen
          ? "translateX(0)"
          : "translateX(-10px)",
      }}
    >
      {l}
    </a>
  );
})}
          {/* {NAV_LINKS.map((l, i) => (
            if(l==="Team")  {  return (<a key={l} href="#" className="nav-link"
              onClick={e => { e.preventDefault(); scrollTo(l.toLowerCase().replace(/ /g, "-")); setMenuOpen(false); }}
              style={{
                fontSize: "1rem", padding: "1rem 2rem",
                borderBottom: i < NAV_LINKS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                display: "block",
                transition: `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${i * 0.05}s`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-10px)",
              }}>
              {l}
            </a>);}
           return (<a key={l} href="#" className="nav-link"
              onClick={e => { e.preventDefault(); scrollTo(l.toLowerCase().replace(/ /g, "-")); setMenuOpen(false); }}
              style={{
                fontSize: "1rem", padding: "1rem 2rem",
                borderBottom: i < NAV_LINKS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                display: "block",
                transition: `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${i * 0.05}s`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-10px)",
              }}>
              {l}
            </a>)
          ))} */}
          <div style={{ padding: "1rem 2rem 1.5rem" }}>
            <button className="register-btn" style={{ width: "100%", fontSize: "0.95rem" }}
              onClick={() => { scrollTo("contact"); setMenuOpen(false); }}>
              Register Now →
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" ref={heroRef} style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
        padding: "7rem 1.25rem 5rem",
        boxSizing: "border-box", width: "100%",
      }}>
        {/* BG grid */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(235,45,45,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(235,45,45,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }} />

        {/* Red glow blobs */}
        <div style={{
          position: "absolute", top: "20%", left: "5%", width: "300px", height: "300px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(235,45,45,0.12) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "5%", width: "250px", height: "250px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(235,45,45,0.08) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none"
        }} />

        <div style={{
          position: "relative", zIndex: 1, textAlign: "center",
          width: "100%", maxWidth: "900px",
          padding: "0", boxSizing: "border-box",
        }}>
          <p style={{
            fontSize: "0.65rem", letterSpacing: "0.15em", color: "#eb2d2d",
            textTransform: "uppercase", marginBottom: "1.2rem",
            animation: "fadeSlideUp 0.6s ease forwards"
          }}>
            ✦ Sarasva Presents ✦
          </p>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.5rem, 18vw, 10rem)",
            lineHeight: 0.9, letterSpacing: "0.04em",
            marginBottom: "0.5rem",
            animation: "fadeSlideUp 0.8s ease 0.2s forwards", opacity: 0,
            wordBreak: "keep-all",
          }}>
            <span style={{ color: "#eb2d2d" }}>TED</span>
            <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.6em" }}>x</span>
            <span style={{ color: "#f0ede8" }}>IIITA</span>
          </h1>

          <p style={{
            fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
            fontSize: "clamp(1rem, 4vw, 1.8rem)", color: "rgba(240,237,232,0.7)",
            marginBottom: "2.5rem",
            animation: "fadeSlideUp 0.8s ease 0.4s forwards", opacity: 0
          }}>
            Innovate , Inspire , Impact
          </p>

          {/* Event info — stacks to 1 col on mobile */}
          <div style={{
            display: "flex", gap: "1.5rem", justifyContent: "center",
            flexWrap: "wrap", marginBottom: "2.5rem",
            animation: "fadeSlideUp 0.8s ease 0.6s forwards", opacity: 0
          }}>
            {[
              ["📅 DATE", "19th Nov, 2026 · 2:30 PM"],
              ["🎤 SPEAKERS", "4 Brilliant Minds"],
              ["📍 VENUE", "Auditorium, IIITA"],
            ].map(([label, val]) => (
              <div key={label} style={{
                textAlign: "center",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                padding: "0.6rem 1.2rem",
                minWidth: "120px",
              }}>
                <div style={{ fontSize: "0.55rem", letterSpacing: "0.15em", color: "#eb2d2d", marginBottom: "4px" }}>{label}</div>
                <div style={{ fontSize: "0.85rem", color: "#f0ede8", fontWeight: 500 }}>{val}</div>
              </div>
            ))}
          </div>

          <div style={{ animation: "fadeSlideUp 0.8s ease 0.8s forwards", opacity: 0, marginBottom: "2.5rem" }}>
            <CountdownTimer />
          </div>

          <div style={{
            display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap",
            animation: "fadeSlideUp 0.8s ease 1s forwards", opacity: 0
          }}>
            <button className="register-btn" onClick={() => scrollTo("contact")}>Register Now →</button>
            <button onClick={() => scrollTo("about")} style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.2)",
              color: "#f0ede8", padding: "0.9rem 2rem", borderRadius: "4px",
              cursor: "pointer", fontSize: "0.85rem", letterSpacing: "0.1em",
              fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s"
            }}>Learn More</button>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          animation: "float 2s ease-in-out infinite"
        }}>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#555" }}>SCROLL</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #eb2d2d, transparent)" }} />
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{
        background: "#eb2d2d", padding: "1.2rem 2rem",
        display: "flex", justifyContent: "center",
        gap: "clamp(1rem, 5vw, 4rem)", flexWrap: "wrap"
      }}>
        {STATS.map(({ value, label }) => (
          <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#fff" }}>{value}</span>
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.75)", textTransform: "uppercase" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: "7rem 3rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#eb2d2d", marginBottom: "1rem" }}>THE EXPERIENCE</p>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1, marginBottom: "1.5rem", color: "#f0ede8"
            }}>
              WHERE IDEAS<br />IGNITE FUTURES
            </h2>
            <p style={{ color: "rgba(240,237,232,0.6)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              TEDxIIITA was born from a vision to bring innovative and inspiring ideas to the student community of IIIT Allahabad. With editions spanning years, our event continues to grow, spark curiosity, and encourage people to rethink what's possible.
            </p>
            <p style={{ color: "rgba(240,237,232,0.6)", lineHeight: 1.8, fontSize: "0.95rem" }}>
              A gathering of brilliant thinkers, innovators, and storytellers — each talk a spark that ignites conversations beyond the auditorium walls.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{icon}</div>
                <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em", fontSize: "1rem", color: "#eb2d2d", marginBottom: "0.5rem" }}>{title}</h4>
                <p style={{ fontSize: "0.78rem", color: "rgba(240,237,232,0.55)", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEME */}
      <section id="theme" style={{
        padding: "7rem 3rem", position: "relative", overflow: "hidden",
        background: "rgba(235,45,45,0.04)", borderTop: "1px solid rgba(235,45,45,0.15)", borderBottom: "1px solid rgba(235,45,45,0.15)"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#eb2d2d", marginBottom: "1rem" }}>2025 EDITION</p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 0.95, marginBottom: "2rem", color: "#f0ede8"
          }}>
            Innovate , Inspire , Impact
          </h2>
          <p style={{
            fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
            fontSize: "1.3rem", color: "rgba(240,237,232,0.6)", marginBottom: "2rem", lineHeight: 1.8
          }}>
              Our 2025 theme, "Innovate, Inspire, Impact," encapsulates the essence of TEDxIIITA. It reflects our commitment to fostering groundbreaking ideas that not only push the boundaries of innovation but also inspire individuals to take action and create a meaningful impact on society. This theme serves as a call to our speakers and audience alike to think boldly, share passionately, and contribute to a future shaped by creativity and positive change.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            {["Technology", "Society", "Innovation", "Identity", "Future"].map(tag => (
              <span key={tag} style={{
                padding: "0.4rem 1.2rem", borderRadius: "999px",
                border: "1px solid rgba(235,45,45,0.4)", color: "rgba(235,45,45,0.9)",
                fontSize: "0.75rem", letterSpacing: "0.1em"
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section id="speakers" style={{ padding: "7rem 3rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#eb2d2d", marginBottom: "1rem" }}>OUR SPEAKERS</p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "#f0ede8"
          }}>Meet Our Speakers</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {PAST_SPEAKERS.map(({ name, topic, year }) => (
            <div key={name} className="speaker-card">
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.8rem" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "50%",
                  background: `hsl(${name.charCodeAt(0) * 17 % 360}, 40%, 35%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem", fontFamily: "'Bebas Neue', sans-serif", color: "#fff"
                }}>
                  {name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "#f0ede8" }}>{name}</div>
                  <div style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "#eb2d2d" }}>{year}</div>
                </div>
              </div>
              <p style={{ fontSize: "0.85rem", color: "rgba(240,237,232,0.55)", fontStyle: "italic" }}>"{topic}"</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "rgba(240,237,232,0.4)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
          
          </p>
          {/* <div style={{
            display: "inline-flex", gap: "0.5rem", alignItems: "center",
            padding: "0.8rem 2rem", border: "1px dashed rgba(235,45,45,0.4)", borderRadius: "4px"
          }}>
            <span style={{ animation: "pulse 1.5s infinite", color: "#eb2d2d" }}></span>
            <span style={{ fontSize: "0.8rem", letterSpacing: "0.1em", color: "rgba(240,237,232,0.5)" }}></span>
          </div> */}
        </div>
      </section>

      {/* WHAT IS TEDX */}
      <section style={{
        padding: "7rem 3rem", background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#eb2d2d", marginBottom: "1rem" }}>ABOUT TEDx</p>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#f0ede8", marginBottom: "1.5rem", lineHeight: 1
            }}>WHAT IS A TEDx EVENT?</h2>
            <p style={{ color: "rgba(240,237,232,0.6)", lineHeight: 1.9, marginBottom: "1rem", fontSize: "0.95rem" }}>
              A TEDx event is a local gathering where live TED-like talks and performances are shared with the community. These events are independently organized by volunteers, operating under a free license from TED.
            </p>
            <p style={{ color: "rgba(240,237,232,0.6)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "2rem" }}>
              TEDxIIITA brings together brilliant speakers and thought-provoking content to spark deep discussion and create lasting connections within our campus community.
            </p>
            <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" rel="noreferrer"
              style={{ color: "#eb2d2d", fontSize: "0.85rem", letterSpacing: "0.1em", textDecoration: "none", borderBottom: "1px solid rgba(235,45,45,0.4)", paddingBottom: "2px" }}>
              LEARN MORE ABOUT TEDx →
            </a>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", aspectRatio: "4/3",
              background: "linear-gradient(135deg, #1a0a0a 0%, #2a0808 50%, #0a0a0a 100%)",
              borderRadius: "12px", border: "1px solid rgba(235,45,45,0.2)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden"
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif", fontSize: "6rem", color: "rgba(235,45,45,0.15)",
                lineHeight: 1, userSelect: "none"
              }}>TEDx</div>
              <div style={{
                position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
                display: "flex", gap: "1rem"
              }}>
                {["💬", "🧠", "🌍", "✨"].map((e, i) => (
                  <div key={i} style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    background: "rgba(235,45,45,0.15)", border: "1px solid rgba(235,45,45,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem", animation: `float ${2 + i * 0.3}s ease-in-out infinite`
                  }}>{e}</div>
                ))}
              </div>
              <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(circle at 50% 50%, rgba(235,45,45,0.06) 0%, transparent 70%)"
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section id="contact" style={{ padding: "7rem 3rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#eb2d2d", marginBottom: "1rem" }}>JOIN US</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#f0ede8" }}>
              REGISTER FOR<br />THE EVENT 📝
            </h2>
            <p style={{ color: "rgba(240,237,232,0.5)", fontSize: "0.9rem", marginTop: "1rem" }}>
              Secure your spot at TEDxIIITA 2025
            </p>
          </div>

          {submitted ? (
            <div style={{
              textAlign: "center", padding: "4rem 2rem",
              background: "rgba(235,45,45,0.06)", border: "1px solid rgba(235,45,45,0.3)",
              borderRadius: "12px"
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#eb2d2d", marginBottom: "0.5rem" }}>
                YOU'RE REGISTERED!
              </h3>
              <p style={{ color: "rgba(240,237,232,0.6)", fontSize: "0.9rem" }}>
                We'll reach out with more details soon. See you at CONVERGENCE!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.2rem"
            }}>
              {[
                ["Full Name", "name", "text", "Your full name"],
                ["Email Address", "email", "email", "your@email.com"],
                ["Roll Number (IIITA students)", "roll", "text", "e.g. IIT2022001"],
              ].map(([label, field, type, ph]) => (
                <div key={field}>
                  <label style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: "rgba(240,237,232,0.5)", display: "block", marginBottom: "0.5rem" }}>{label.toUpperCase()}</label>
                  <input type={type} placeholder={ph} className="form-input"
                    value={formData[field]}
                    onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: "rgba(240,237,232,0.5)", display: "block", marginBottom: "0.5rem" }}>WHY DO YOU WANT TO ATTEND?</label>
                <textarea rows={3} placeholder="Share your thoughts..." className="form-input"
                  style={{ resize: "vertical" }}
                  value={formData.why}
                  onChange={e => setFormData({ ...formData, why: e.target.value })}
                />
              </div>
              <button type="submit" className="register-btn" style={{ marginTop: "0.5rem" }}>
                SECURE MY SPOT →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "3rem", textAlign: "center"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem",
            letterSpacing: "0.08em", marginBottom: "1rem"
          }}>
            <span style={{ color: "#eb2d2d" }}>TED</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>x</span>
            <span>IIITA</span>
          </div>
          <p style={{ color: "rgba(240,237,232,0.3)", fontSize: "0.8rem", marginBottom: "1rem", lineHeight: 1.7 }}>
            IIIT Allahabad, Deoghat, Jhalwa, Prayagraj — 211015
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "2rem", flexWrap: "wrap" }}>
            {["Instagram", "LinkedIn", "Twitter", "YouTube"].map(s => (
              <a key={s} href="#" style={{ color: "rgba(240,237,232,0.4)", fontSize: "0.75rem", letterSpacing: "0.1em", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#eb2d2d"}
                onMouseLeave={e => e.target.style.color = "rgba(240,237,232,0.4)"}>
                {s}
              </a>
            ))}
          </div>
          <div style={{ width: "40px", height: "1px", background: "rgba(235,45,45,0.3)", margin: "0 auto 1.5rem" }} />
          <p style={{ fontSize: "0.7rem", color: "rgba(240,237,232,0.2)", letterSpacing: "0.08em" }}>
            © TEDxIIITA. This independent TEDx event is operated under license from{" "}
            <a href="https://www.ted.com" target="_blank" rel="noreferrer" style={{ color: "#eb2d2d", textDecoration: "none" }}>TED</a>.
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}