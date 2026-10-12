import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import ProjectsSection from "@/app/components/projects-section";
import AboutSection from "@/app/components/about-section";
import SkillsSection from "@/app/components/skills-section";
import ContactSection from "@/app/components/contact-section";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
