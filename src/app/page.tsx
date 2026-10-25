import Hero from "@/app/components/hero";
import ProjectsSection from "@/app/components/projects-section";
import AboutSection from "@/app/components/about-section";
import SkillsSection from "@/app/components/skills-section";
import ContactSection from "@/app/components/contact-section";

import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <main id="home">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
