import "./globals.css";
import Header from "@/Components/Header";
import BackgroundCircles from "@/Components/BackgroundCircles";
import AboutMe from "@/Components/AboutMe";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="snap-start h-screen">
        <BackgroundCircles />
      </section>
      <section id="about" className="snap-center h-screen">
        <AboutMe />
      </section>
      <section id="skills" className="snap-center h-screen">
        <Skills />
      </section>
      <section id="projects" className="snap-none h-screen">
        <Projects />
      </section>
    </main>
  );
}
