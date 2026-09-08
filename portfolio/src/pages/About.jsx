import PageIntro from '../components/PageIntro.jsx';
import AboutSection from '../components/AboutSection.jsx';
import SkillsSection from '../components/SkillsSection.jsx';
import FactsSection from '../components/FactsSection.jsx';

export default function About() {
  return (
    <>
      <div className="container">
        <PageIntro crumb="about-me" subtitle="Who am i?" />
      </div>
      <AboutSection showReadMore={false} fullText />
      <SkillsSection />
      <FactsSection />
    </>
  );
}
