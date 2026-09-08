import PageIntro from '../components/PageIntro.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import projects from '../data/projects.js';

export default function Projects() {
  return (
    <>
      <div className="container">
        <PageIntro crumb="projects" subtitle="List of my projects" />
      </div>
      <ProjectsSection projects={projects} title="all projects" mode="browse" />
    </>
  );
}
