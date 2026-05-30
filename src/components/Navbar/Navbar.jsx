import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Omeshwar</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a href={link.href} onClick={(e) => handleLink(e, link.href)}>
                <span className="link-num">0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:omeshwarreddy66@gmail.com"
          className="btn btn-outline nav-cta"
        >
          Hire Me
        </a>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link, i) => (
          <a key={i} href={link.href} onClick={(e) => handleLink(e, link.href)}>
            <span className="link-num">0{i + 1}.</span> {link.label}
          </a>
        ))}
        <a href="mailto:omeshwarreddy66@gmail.com" className="btn btn-outline">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
