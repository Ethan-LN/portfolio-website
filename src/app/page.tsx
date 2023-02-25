import "./globals.css";
import Header from "@/Components/Header";
import BackgroundCircles from "@/Components/BackgroundCircles";
import AboutMe from "@/Components/AboutMe";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="snap-start h-screen">
        <BackgroundCircles />
      </section>
      <section className="snap-center h-screen">
        <AboutMe />
      </section>
      <section className="h-screen snap-center">
        Skill Section
        <Skills />
      </section>
      <section className="h-screen">{/* <Projects /> */}</section>
    </main>
  );
}
