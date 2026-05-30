import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "DevConnect",
    subtitle: "Developer Collaboration Platform",
    desc: "A scalable backend system for a developer collaboration platform supporting authentication, profile management, posts, and networking features. Built with production-ready practices.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    highlights: [
      "JWT auth + modular routing",
      "Middleware validation pipeline",
      "Scalable MongoDB schema design",
      "Git-flow based development",
    ],
    status: "In Progress",
    featured: true,
  },
  {
    id: "02",
    title: "Real-Time Chat App",
    subtitle: "Multi-User WebSocket Chat",
    desc: "Scalable real-time multi-user chat application using WebSockets with room-based communication. Token-based authentication with concurrent event-driven messaging.",
    stack: ["Socket.IO", "Node.js", "MongoDB", "JWT"],
    highlights: [
      "Room-based multi-user chat",
      "Token-based auth",
      "Event-driven architecture",
      "Real-time message delivery",
    ],
    status: "Completed",
    featured: false,
  },
  {
    id: "03",
    title: "User-Product Backend System",
    subtitle: "Full-Featured API Backend",
    desc: "Production-grade backend APIs with authentication, authorization, filtering, search, and pagination. MongoDB aggregation pipelines for complex data operations.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "RBAC"],
    highlights: [
      "JWT + RBAC auth system",
      "Advanced filtering & pagination",
      "MongoDB aggregation pipelines",
      "Centralized error handling",
    ],
    status: "Completed",
    featured: false,
  },
  {
    id: "04",
    title: "Offline GPS Navigation",
    subtitle: "Patent-Filed P2P System",
    desc: "Peer-to-peer navigation system that works offline using GPS data. Developed innovative approach for offline route sharing and navigation between nearby devices.",
    stack: ["Python", "P2P Networking", "GPS", "Algorithms"],
    highlights: [
      "Indian Patent Filed",
      "Offline-first architecture",
      "P2P data sharing",
      "GPS route optimization",
    ],
    status: "Patented",
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".projects-grid", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="projects" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">
          Things I've <span className="highlight">Built</span>
        </h2>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`project-card ${proj.featured ? "featured" : ""}`}
            >
              <div className="proj-top">
                <div className="proj-id-block">
                  <span className="proj-id">{proj.id}</span>
                  <span
                    className={`proj-status ${proj.status === "Patented" ? "status-patent" : proj.status === "In Progress" ? "status-wip" : "status-done"}`}
                  >
                    {proj.status}
                  </span>
                </div>
                {proj.featured && <span className="featured-badge">Featured</span>}
              </div>

              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-subtitle">{proj.subtitle}</p>
              <p className="proj-desc">{proj.desc}</p>

              <div className="proj-highlights">
                {proj.highlights.map((h, i) => (
                  <span key={i} className="highlight-item">
                    <span className="hi-dot" /> {h}
                  </span>
                ))}
              </div>

              <div className="proj-stack">
                {proj.stack.map((t, i) => (
                  <span key={i} className="tag proj-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
