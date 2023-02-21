import "./globals.css";
import Header from "@/Components/Header";
import BackgroundCircles from "@/Components/BackgroundCircles";
import AboutMe from "@/Components/AboutMe";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";

export default function Home() {
  return (
    <main>
      <section className="snap-center">
        <Header />
        <BackgroundCircles />
      </section>
      <section id="about" className="snap-start">
        <AboutMe />
      </section>
      <section id="skills" className="snap-center h-screen">
        Skill Section
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
    </main>
  );
}
