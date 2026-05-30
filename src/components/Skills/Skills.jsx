import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    label: "Backend Core",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Socket.IO", level: 75 },
    ],
  },
  {
    label: "Auth & Security",
    icon: "🔐",
    skills: [
      { name: "JWT Authentication", level: 88 },
      { name: "RBAC", level: 82 },
      { name: "Rate Limiting", level: 78 },
      { name: "Input Validation", level: 85 },
    ],
  },
  {
    label: "Database",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Aggregation Pipelines", level: 78 },
      { name: "Query Optimization", level: 75 },
      { name: "MySQL", level: 68 },
    ],
  },
  {
    label: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 65 },
      { name: "AWS EC2/S3", level: 60 },
      { name: "Linux / CI-CD", level: 65 },
    ],
  },
  {
    label: "Currently Learning",
    icon: "📚",
    skills: [
      { name: "Load Balancing", level: 55 },
      { name: "Morgan Logging", level: 70 },
      { name: "Message Queues", level: 45 },
      { name: "Microservices", level: 50 },
    ],
  },
];

const techStack = [
  "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT",
  "Socket.IO", "Docker", "AWS", "Git", "Postman", "Linux",
  "MySQL", "Python", "REST API", "RBAC", "Morgan",
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7,
          scrollTrigger: { trigger: ".skills-header", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".skill-bar-fill",
        { width: 0 },
        {
          width: "var(--target-width)",
          duration: 1.2, ease: "power3.out", stagger: 0.08,
          scrollTrigger: { trigger: ".skills-panel", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [active]);

  return (
    <section className="section skills-section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="skills-header">
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">
            My <span className="highlight">Tech Stack</span>
          </h2>
        </div>

        <div className="skills-layout">
          <div className="skills-tabs">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`skill-tab ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="skills-panel">
            <h3 className="panel-title">
              {categories[active].icon} {categories[active].label}
            </h3>
            {categories[active].skills.map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-meta">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ "--target-width": `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-wrapper">
          <p className="marquee-label">Tools & Technologies</p>
          <div className="tech-marquee">
            <div className="marquee-track">
              {[...techStack, ...techStack].map((t, i) => (
                <span key={i} className="marquee-item">
                  <span className="marquee-dot" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
