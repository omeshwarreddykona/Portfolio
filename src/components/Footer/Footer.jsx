import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              Omeshwar
              <span className="logo-bracket"> /&gt;</span>
            </span>
            <p className="footer-tagline">Backend Developer · Node.js · MongoDB</p>
          </div>

          <div className="footer-links">
            <a href="mailto:omeshwarreddy66@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/kona-omeshwar-reddy-60a0b72b4/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/omeshwarreddykona " target="_blank" rel="noreferrer">GitHub</a>
          </div>

          <p className="footer-copy">
            © {year} Kona Omeshwar Reddy. Built with React + Vite.
          </p>
        </div>
      </div>
    </footer>
  );
}
