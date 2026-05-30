import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Experience.css";

gsap.registerPlugin(ScrollTrigger);

const experience = {
  company: "RyzeUP Labs",
  role: "Backend Developer Intern",
  period: "Dec 2025 – May 2026",
  location: "Hyderabad, India",
  type: "Internship",
  points: [
    "Developed scalable RESTful APIs using Node.js, Express.js, and MongoDB following MVC architecture principles.",
    "Implemented JWT-based authentication and Role-Based Access Control (RBAC) for secure user access management.",
    "Built backend features including pagination, filtering, sorting, search operations, and file upload handling.",
    "Optimized MongoDB queries and indexing strategies to improve API performance and data retrieval efficiency.",
    "Designed reusable middleware for validation, centralized error handling, request logging (Morgan), and API monitoring.",
    "Collaborated using Git/GitHub workflows, Postman API testing, debugging, and Agile backend development practices.",
  ],
  learningNow: [
    "Rate Limiting strategies",
    "Morgan HTTP Logging",
    "Load Balancing concepts",
    "Redis caching patterns",
    "WebSocket real-time events",
    "Microservices patterns",
  ],
};

const certifications = [
  { title: "Backend Development", sub: "Node.js, Express.js & MongoDB" },
  { title: "REST API Development", sub: "JWT Authentication" },
  { title: "Git, GitHub & Postman", sub: "API Testing & CI/CD Fundamentals" },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".exp-card", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".cert-item",
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".certs-block", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="experience" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">
          Where I've <span className="highlight">Worked</span>
        </h2>

        <div className="exp-layout">
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{experience.role}</h3>
                <p className="exp-company">{experience.company}</p>
              </div>
              <div className="exp-meta">
                <span className="tag">{experience.type}</span>
                <span className="exp-period">{experience.period}</span>
                <span className="exp-location">📍 {experience.location}</span>
              </div>
            </div>

            <div className="exp-divider" />

            <ul className="exp-points">
              {experience.points.map((pt, i) => (
                <li key={i} className="exp-point">
                  <span className="point-arrow">▶</span>
                  {pt}
                </li>
              ))}
            </ul>

            <div className="learning-block">
              <p className="learning-title">
                <span className="learn-icon">🔥</span>
                Currently Learning & Implementing
              </p>
              <div className="learning-tags">
                {experience.learningNow.map((item, i) => (
                  <span key={i} className="tag learning-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="certs-block">
            <h3 className="certs-title">Certifications</h3>
            {certifications.map((cert, i) => (
              <div key={i} className="cert-item">
                <div className="cert-icon">✓</div>
                <div>
                  <p className="cert-name">{cert.title}</p>
                  <p className="cert-sub">{cert.sub}</p>
                </div>
              </div>
            ))}

            <div className="education-block">
              <h3 className="certs-title" style={{ marginTop: "2rem" }}>Education</h3>
              <div className="edu-card">
                <p className="edu-degree">B.Tech — ECE</p>
                <p className="edu-college">A.M Reddy Memorial College of Engineering & Technology</p>
                <p className="edu-year">2022 – 2025</p>
                <div className="edu-cgpa">
                  <span className="cgpa-label">CGPA</span>
                  <span className="cgpa-val">8.02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
