import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: "⚡", label: "Performance-First", desc: "MongoDB indexing & query optimization for fast APIs" },
  { icon: "🔒", label: "Security-Focused", desc: "JWT auth, RBAC, rate limiting & input validation" },
  { icon: "📡", label: "Real-Time Systems", desc: "Socket.IO, WebSockets & event-driven architecture" },
  { icon: "🏗️", label: "Clean Architecture", desc: "MVC patterns, modular routing & reusable middleware" },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text-block",
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".about-text-block", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".highlight-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".about-grid", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-inner">
          <div className="about-text-block">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Building backends that <span className="highlight">scale</span>
            </h2>
            <p className="about-desc">
              I'm a Backend Developer from Hyderabad, India — a 2025 B.Tech
              graduate in Electronics & Communication Engineering who found a
              deep passion for backend systems and scalable API design.
            </p>
            <p className="about-desc">
              Currently at <span className="highlight-text">RyzeUP Labs</span>,
              I build production-grade Node.js APIs with real-world challenges:
              rate limiting, Morgan logging, load balancing concepts, WebSockets,
              and MongoDB aggregation pipelines. I filed an Indian patent for an
              Offline GPS-Based Peer-to-Peer Navigation System.
            </p>
            <p className="about-desc">
              I'm actively learning real-time concepts, distributed systems
              patterns, and DevOps practices — always pushing toward
              production-ready code.
            </p>

            <div className="about-meta">
              <div className="meta-item">
                <span className="meta-key">Location</span>
                <span className="meta-val">📍 Hyderabad, India</span>
              </div>
              <div className="meta-item">
                <span className="meta-key">Status</span>
                <span className="meta-val meta-open">🟢 Open to Work</span>
              </div>
              <div className="meta-item">
                <span className="meta-key">Focus</span>
                <span className="meta-val">Backend / Node.js</span>
              </div>
              <div className="meta-item">
                <span className="meta-key">Email</span>
                <span className="meta-val">omeshwarreddy66@gmail.com</span>
              </div>
            </div>

            <div className="about-links">
              <a
                href="https://www.linkedin.com/in/kona-omeshwar-reddy-60a0b72b4/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/omeshwarreddykona"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="about-grid">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-card">
                <span className="card-icon">{h.icon}</span>
                <h4 className="card-title">{h.label}</h4>
                <p className="card-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
