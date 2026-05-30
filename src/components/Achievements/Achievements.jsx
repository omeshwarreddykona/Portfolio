import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Achievements.css";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: "🏛️",
    title: "Indian Patent Filed",
    desc: "Filed official Indian Patent for an Offline GPS-Based Peer-to-Peer Navigation System — an innovative approach to navigation without internet connectivity.",
    label: "Patent",
  },
  {
    icon: "🏆",
    title: "ECE Branch Topper",
    desc: "Recognized as top student in Electronics & Communication Engineering branch for outstanding academic performance with 8.02 CGPA.",
    label: "Academic",
  },
  {
    icon: "⚡",
    title: "Technical Quiz Champion",
    desc: "Won 1st Place in Technical Quiz competitions at both college-level and inter-college events, demonstrating strong technical knowledge across CS domains.",
    label: "Competition",
  },
  {
    icon: "📡",
    title: "LinkedIn Journey Series",
    desc: "Publicly documenting backend development learnings as a daily post series — covering JWT, RBAC, MongoDB aggregations, middleware, and clean architecture.",
    label: "Community",
  },
];

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".achievement-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".achievements-grid", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section achievements-section" id="achievements" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">
          Achievements & <span className="highlight">Milestones</span>
        </h2>

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <div key={i} className="achievement-card">
              <div className="ach-icon-wrap">
                <span className="ach-icon">{item.icon}</span>
              </div>
              <div className="ach-body">
                <div className="ach-header">
                  <h3 className="ach-title">{item.title}</h3>
                  <span className="ach-label">{item.label}</span>
                </div>
                <p className="ach-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
