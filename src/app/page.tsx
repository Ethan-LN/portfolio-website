import "./globals.css";
import Header from "@/Components/Header";
import BackgroundCircles from "@/Components/BackgroundCircles";
import AboutMe from "@/Components/AboutMe";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";

export default function Home() {
  return (
    <main>
      <section className="snap-start">
        <Header />
        <BackgroundCircles />
      </section>
      <section className="snap-center">
        <AboutMe />
      </section>
      <section className="h-screen">
        Skill Section
        <Skills />
      </section>
      <section  className="">
        <Projects />
      </section>
    </main>
  );
}
