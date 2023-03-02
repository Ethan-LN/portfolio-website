import "./globals.css";
import Header from "@/Components/Header";
import BackgroundCircles from "@/Components/BackgroundCircles";
import AboutMe from "@/Components/AboutMe";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Footer from "@/Components/Footer";
import Contact from "@/Components/Contact";
// import 'react';
// import { useState } from "react";

export default function Home() {
  // const [bgColor, setBgColor] = useState("bg-slate-900")
  // const switchMode = () => { setBgColor("bg-neutral-200")}
  return (
    <main className="bg-slate-900">
      <Header />
      <section id="hero" className="snap-start">
        <BackgroundCircles />
      </section>
      <section id="about" className="snap-center">
        <AboutMe />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-none">
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
