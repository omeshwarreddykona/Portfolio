import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

const terminalLines = [
  { type: "prompt", text: "node server.js" },
  { type: "info", text: "✓  Server running on port 5000" },
  { type: "info", text: "✓  MongoDB connected successfully" },
  { type: "info", text: "✓  JWT middleware initialized" },
  { type: "info", text: "✓  Rate limiter active (100 req/15min)" },
  { type: "info", text: "✓  Morgan HTTP logger ready" },
  { type: "info", text: "✓  Load balancer configured" },
  { type: "success", text: "🚀  Backend ready — awaiting requests..." },
];

export default function Hero() {
  const heroRef = useRef(null);
  const termRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    tl.fromTo(
      ".hero-label",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".hero-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        ".hero-actions",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        ".hero-stats",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 },
        "-=0.2"
      )
      .fromTo(
        ".terminal-card",
        { opacity: 0, x: 40, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="grid-bg" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-label">
              <span className="status-dot" />
              Available for full-time roles
            </div>

            <h1 className="hero-title">
              Kona <span className="highlight">Omeshwar</span>
              <br />
              Reddy
            </h1>

            <p className="hero-subtitle">
              <span className="typed-prefix">$ role: </span>
              Backend Developer
            </p>

            <p className="hero-desc">
              Building scalable backend systems with Node.js, Express.js &
              MongoDB. Focused on clean architecture, JWT auth, real-time
              features, and production-grade API design.
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => handleScroll("#projects")}
              >
                View Projects
              </button>
              <button
                className="btn btn-outline"
                onClick={() => handleScroll("#contact")}
              >
                Let's Talk →
              </button>
            </div>

            <div className="hero-stats-row">
              <div className="hero-stats">
                <span className="stat-num">6+</span>
                <span className="stat-label">Months Exp.</span>
              </div>
              <div className="stat-divider" />
              <div className="hero-stats">
                <span className="stat-num">3+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-divider" />
              <div className="hero-stats">
                <span className="stat-num">1</span>
                <span className="stat-label">Patent Filed</span>
              </div>
              <div className="stat-divider" />
              <div className="hero-stats">
                <span className="stat-num">8.02</span>
                <span className="stat-label">CGPA</span>
              </div>
            </div>
          </div>

          <div className="hero-terminal" ref={termRef}>
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="terminal-title">server.js — bash</span>
              </div>
              <div className="terminal-body">
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className={`term-line ${line.type}`}
                    style={{ animationDelay: `${1.4 + i * 0.18}s` }}
                  >
                    {line.type === "prompt" && (
                      <span className="term-prompt">omeshwar@api:~$ </span>
                    )}
                    {line.text}
                  </div>
                ))}
                <div className="term-cursor" />
              </div>
            </div>

            <div className="tech-badges">
              {[
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
                "Socket.IO",
                "Docker",
                "AWS",
              ].map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
