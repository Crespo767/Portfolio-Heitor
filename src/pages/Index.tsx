import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import SoftSkills from "@/components/portfolio/SoftSkills";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <SoftSkills />
      <Footer />
    </main>
  );
};

export default Index;
