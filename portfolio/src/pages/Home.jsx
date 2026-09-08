import Hero from '../components/Hero.jsx';
import QuoteCarousel from '../components/QuoteCarousel.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import SkillsSection from '../components/SkillsSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import SideMedia from '../components/SideMedia.jsx';
import projects from '../data/projects.js';

export default function Home() {
  return (
    <>
      <SideMedia />

      <div className="container">
        <Hero />
      </div>

      <div className="section">
        <div className="container">
          <QuoteCarousel />
        </div>
      </div>

      <ProjectsSection projects={projects} limit={3} title="projects" mode="preview" />
      <SkillsSection />
      <AboutSection showReadMore />
      <ContactSection />
    </>
  );
}
