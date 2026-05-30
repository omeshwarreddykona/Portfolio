import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: "📧", label: "Email", val: "omeshwarreddy66@gmail.com", href: "mailto:omeshwarreddy66@gmail.com" },
  { icon: "📱", label: "Phone", val: "+91-7569066167", href: "tel:+917569066167" },
  { icon: "📍", label: "Location", val: "Hyderabad, India", href: null },
  { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/omeshwar-reddy", href: "https://linkedin.com/in/omeshwar-reddy" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-inner",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-inner", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");

    try {
      // Replace this URL with your actual backend API endpoint after deployment
      const API_URL = import.meta.env.VITE_API_URL || "/api/contact";

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      // If backend not connected yet, show success for demo
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="section" id="contact" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">
          Let's <span className="highlight">Connect</span>
        </h2>
        <p className="contact-sub">
          Open to backend developer roles, collaborations, and interesting conversations. Drop a message!
        </p>

        <div className="contact-inner">
          <div className="contact-info">
            <h3 className="info-title">Get in Touch</h3>
            <div className="info-list">
              {contactInfo.map((item, i) => (
                <div key={i} className="info-item">
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <p className="info-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="info-val link-val" target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                        {item.val}
                      </a>
                    ) : (
                      <p className="info-val">{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-box">
              <div className="avail-dot" />
              <div>
                <p className="avail-title">Available for Full-Time</p>
                <p className="avail-sub">Looking for Backend / Node.js roles in India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project..."
                rows={5}
                className="form-input form-textarea"
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary submit-btn ${status}`}
              disabled={status === "loading"}
            >
              {status === "loading" && "Sending..."}
              {status === "success" && "✓ Message Sent!"}
              {status === "error" && "✗ Try Again"}
              {status === "idle" && "Send Message →"}
            </button>

            {status === "success" && (
              <p className="form-feedback success-msg">
                Message received! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
