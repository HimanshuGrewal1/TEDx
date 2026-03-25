import React from 'react'

const nav = () => {
  return (
    <div>
       <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1rem 3rem",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s",
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
          {NAV_LINKS.map(l => (
            <a key={l} href="#" className="nav-link"
              onClick={e => { e.preventDefault(); scrollTo(l.toLowerCase().replace(/ /g, "-")); }}>
              {l}
            </a>
          ))}
        </div>

        <button className="register-btn" style={{ padding: "0.55rem 1.4rem", fontSize: "0.85rem" }}
          onClick={() => scrollTo("contact")}>
          Register
        </button>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: "5px", display: "none" }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: "block", width: "24px", height: "2px", background: "#fff", transition: "all 0.3s" }} />
          ))}
        </button>
      </nav>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div className="mobile-nav" style={{
          position: "fixed", top: "60px", left: 0, right: 0, zIndex: 99,
          background: "rgba(10,10,10,0.98)", padding: "2rem",
          display: "flex", flexDirection: "column", gap: "1.5rem"
        }}>
          {NAV_LINKS.map(l => (
            <a key={l} href="#" className="nav-link" style={{ fontSize: "1.1rem" }}
              onClick={e => { e.preventDefault(); scrollTo(l.toLowerCase().replace(/ /g, "-")); }}>
              {l}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default nav
