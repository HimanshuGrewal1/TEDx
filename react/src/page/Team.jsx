import { useState } from "react";
//import { TEAM } from "../data/team";
const Navigate = (url) => {
  window.history.pushState({}, "", url);
  const navEvent = new PopStateEvent("popstate");
  window.dispatchEvent(navEvent);
}

const TEAM = [
  {
    department: "COOrdinators",
    members: [
      { name: "febiwbfe", role: "Head Curator", emoji: "🎤", color: "#eb2d2d" },
      { name: "wefhwfwf", role: "Speaker Coordinator", emoji: "🗣️", color: "#e67e22" },
        { name: "gergerg", role: "Content Creator", emoji: "✍️", color: "#9b59b6" },
        { name: "egergergr", role: "Social Media Manager", emoji: "📱", color: "#f39c12" }
      ],
  },
    {
      department: "Operations",
      members: [
        { name: "thgssf", role: "Event Manager", emoji: "📅", color: "#3498db" },
        { name: "Dsefsfsf", role: "Logistics Coordinator", emoji: "📦", color: "#2ecc71" },
          { name: "gergerg", role: "Content Creator", emoji: "✍️", color: "#9b59b6" },
        { name: "egergergr", role: "Social Media Manager", emoji: "📱", color: "#f39c12" }
      ]
    },
    {
      department: "Marketing",
      members: [
        { name: "sefsfe", role: "Content Creator", emoji: "✍️", color: "#9b59b6" },
        { name: "Ffsefsf", role: "Social Media Manager", emoji: "📱", color: "#f39c12" },
          { name: "gergerg", role: "Content Creator", emoji: "✍️", color: "#9b59b6" },
        { name: "egergergr", role: "Social Media Manager", emoji: "📱", color: "#f39c12" }
      ]
    }, 
      {
      department: "Design",
      members: [
        { name: "gergerg", role: "Content Creator", emoji: "✍️", color: "#9b59b6" },
        { name: "egergergr", role: "Social Media Manager", emoji: "📱", color: "#f39c12" },
          { name: "gergerg", role: "Content Creator", emoji: "✍️", color: "#9b59b6" },
        { name: "egergergr", role: "Social Media Manager", emoji: "📱", color: "#f39c12" }
      ]
    }, 
      {
      department: "Speaker Relations",
      members: [
        { name: "thrthrt", role: "Content Creator", emoji: "✍️", color: "#9b59b6" },
        { name: "Fhyjtyj", role: "Social Media Manager", emoji: "📱", color: "#f39c12" },
        { name: "thrthrt", role: "Content Creator", emoji: "✍️", color: "#9b59b6" },
        { name: "Fhyjtyj", role: "Social Media Manager", emoji: "📱", color: "#f39c12" }
      ]
    },  



];
const onBack = () => {
    Navigate("/");
  console.log("Back button clicked");
}

export default function TeamPage({  scrollTo }) {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [activeDept, setActiveDept] = useState("All");
 
  const departments = ["All", ...TEAM.map(t => t.department)];
  const filtered = activeDept === "All" ? TEAM : TEAM.filter(t => t.department === activeDept);
 
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", paddingTop: "5rem" }}>
 
      {/* BG texture */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(235,45,45,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(235,45,45,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }} />
 
      {/* Large bg text */}
      <div style={{
        position: "fixed", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(8rem, 25vw, 22rem)",
        color: "rgba(235,45,45,0.03)",
        letterSpacing: "0.05em", whiteSpace: "nowrap",
        pointerEvents: "none", userSelect: "none", zIndex: 0,
      }}>TEAM</div>
 
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>
 
        {/* Back button */}
        <button onClick={onBack} style={{
          background: "none", border: "1px solid rgba(255,255,255,0.12)",
          color: "rgba(240,237,232,0.6)", padding: "0.5rem 1.2rem",
          borderRadius: "999px", cursor: "pointer", fontSize: "0.78rem",
          letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif",
          display: "flex", alignItems: "center", gap: "0.5rem",
          marginBottom: "3.5rem", transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#eb2d2d"; e.currentTarget.style.color = "#eb2d2d"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(240,237,232,0.6)"; }}
        >
          ← Back to Home
        </button>
 
        {/* Hero header */}
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#eb2d2d", marginBottom: "0.8rem" }}>
            TEDxIIITA 2026
          </p>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            lineHeight: 0.95, color: "#f0ede8",
            marginBottom: "1.2rem",
          }}>
            MEET THE<br />
            <span style={{ color: "#eb2d2d" }}>TEAM</span>
          </h1>
          <p style={{
            fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            color: "rgba(240,237,232,0.4)", maxWidth: "480px", lineHeight: 1.7,
          }}>
            The passionate minds behind the event — curating ideas, crafting experiences, and building community.
          </p>
 
          {/* Stats row */}
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            {[
              [TEAM.reduce((s, d) => s + d.members.length, 0), "Team Members"],
              [TEAM.length, "Departments"],
              ["2025", "Edition"],
            ].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "#eb2d2d", lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "rgba(240,237,232,0.35)", textTransform: "uppercase", marginTop: "2px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
 
        {/* Department filter tabs */}
        <div style={{
          display: "flex", gap: "0.6rem", flexWrap: "wrap",
          marginBottom: "3.5rem",
          paddingBottom: "1.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          {departments.map(dept => (
            <button key={dept} onClick={() => setActiveDept(dept)} style={{
              background: activeDept === dept ? "#eb2d2d" : "rgba(255,255,255,0.04)",
              border: `1px solid ${activeDept === dept ? "#eb2d2d" : "rgba(255,255,255,0.1)"}`,
              color: activeDept === dept ? "#fff" : "rgba(240,237,232,0.5)",
              padding: "0.45rem 1rem", borderRadius: "999px",
              cursor: "pointer", fontSize: "0.75rem", letterSpacing: "0.08em",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
              transition: "all 0.2s",
            }}>
              {dept}
            </button>
          ))}
        </div>
 
        {/* Departments */}
        {filtered.map(({ department, members }) => (
          <div key={department} style={{ marginBottom: "4.5rem" }}>
 
            {/* Dept header */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.1rem", letterSpacing: "0.15em",
                color: "rgba(240,237,232,0.25)",
              }}>
                {department.toUpperCase()}
              </div>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
              <div style={{
                fontSize: "0.65rem", letterSpacing: "0.1em",
                color: "rgba(240,237,232,0.2)",
              }}>
                {members.length} {members.length === 1 ? "member" : "members"}
              </div>
            </div>
 
            {/* Members */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1.2rem",
            }}>
              {members.map(({ name, role, emoji, color }) => {
                const id = `${department}-${name}`;
                const isHovered = hoveredMember === id;
                return (
                  <div
                    key={name}
                    onMouseEnter={() => setHoveredMember(id)}
                    onMouseLeave={() => setHoveredMember(null)}
                    style={{
                      background: isHovered ? `${color}12` : "rgba(255,255,255,0.025)",
                      border: `1px solid ${isHovered ? color + "50" : "rgba(255,255,255,0.07)"}`,
                      borderRadius: "16px",
                      padding: "1.8rem 1.4rem 1.5rem",
                      textAlign: "center",
                      cursor: "default",
                      transition: "all 0.25s ease",
                      transform: isHovered ? "translateY(-5px)" : "none",
                      position: "relative", overflow: "hidden",
                    }}
                  >
                    {/* Top gradient sweep on hover */}
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0,
                      height: "2px",
                      background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                      opacity: isHovered ? 1 : 0,
                      transition: "opacity 0.25s",
                    }} />
 
                    {/* Avatar circle */}
                    <div style={{
                      width: "72px", height: "72px", borderRadius: "50%",
                      background: `${color}18`,
                      border: `2px solid ${color}${isHovered ? "99" : "33"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.8rem", margin: "0 auto 1.1rem",
                      transition: "all 0.25s",
                      boxShadow: isHovered ? `0 0 20px ${color}30` : "none",
                    }}>
                      {emoji}
                    </div>
 
                    {/* Name */}
                    <div style={{
                      fontWeight: 600, fontSize: "0.95rem",
                      color: isHovered ? "#fff" : "#f0ede8",
                      marginBottom: "0.35rem", transition: "color 0.2s",
                      letterSpacing: "0.01em",
                    }}>
                      {name}
                    </div>
 
                    {/* Role badge */}
                    <div style={{
                      display: "inline-block",
                      background: `${color}18`,
                      border: `1px solid ${color}30`,
                      borderRadius: "999px",
                      padding: "0.2rem 0.75rem",
                      fontSize: "0.65rem", letterSpacing: "0.1em",
                      color: color, fontWeight: 600,
                      textTransform: "uppercase",
                    }}>
                      {role}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
 
        {/* CTA */}
        <div style={{
          marginTop: "2rem",
          background: "rgba(235,45,45,0.05)",
          border: "1px dashed rgba(235,45,45,0.25)",
          borderRadius: "20px",
          padding: "3.5rem 2rem",
          textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px", height: "300px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(235,45,45,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🙌</div>
          <h3 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#f0ede8", marginBottom: "0.7rem",
          }}>
            WANT TO JOIN THE TEAM?
          </h3>
          <p style={{
            color: "rgba(240,237,232,0.4)", fontSize: "0.9rem",
            maxWidth: "400px", margin: "0 auto 2rem", lineHeight: 1.8,
          }}>
            We're always looking for passionate people to help us spread ideas that matter at IIITA.
          </p>
          <button
            className="register-btn"
            onClick={() => { onBack(); setTimeout(() => scrollTo("contact"), 100); }}
          >
            Get in Touch →
          </button>
        </div>
 
      </div>
 
      {/* Mini footer */}
      <footer style={{
        background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "2rem", textAlign: "center",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem",
          letterSpacing: "0.08em", marginBottom: "0.5rem",
        }}>
          <span style={{ color: "#eb2d2d" }}>TED</span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>x</span>
          <span>IIITA</span>
        </div>
        <p style={{ fontSize: "0.7rem", color: "rgba(240,237,232,0.15)", letterSpacing: "0.08em" }}>
          © TEDxIIITA 2025. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}