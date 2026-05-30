import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Achievements from "../components/Achievements/Achievements.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
