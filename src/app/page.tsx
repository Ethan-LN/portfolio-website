import "./globals.css";
import BackgroundCircles from "@/Components/BackgroundCircles";
import AboutMe from "@/Components/AboutMe";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Footer from "@/Components/Footer";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <main>
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
    // </ThemeProvider>
  );
}
