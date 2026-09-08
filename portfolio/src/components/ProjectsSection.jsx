import { Link, useSearchParams } from 'react-router-dom';
import ProjectCard from './ProjectCard.jsx';
import './ProjectsSection.css';

/**
 * mode="preview" (Home page): shows category buttons that LINK to the
 *   Works page filtered by that category, and previews the default category.
 * mode="browse" (Works page): shows category buttons that FILTER in place
 *   using the ?category= query param, defaulting to "frontend".
 */
export default function ProjectsSection({
  projects,
  limit,
  title = 'projects',
  mode = 'browse',
  defaultCategory = 'frontend',
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory =
    mode === 'browse' ? searchParams.get('category') || defaultCategory : defaultCategory;

  const filtered = projects.filter((p) => p.category === activeCategory);
  const list = limit ? filtered.slice(0, limit) : filtered;

  function handleTabClick(category) {
    if (mode === 'browse') {
      setSearchParams(category === defaultCategory ? {} : { category });
    }
  }

  return (
    <section id="works" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <h2>
            <span className="hash">#</span>
            <span className="text">{title}</span>
          </h2>
          <span className="line" />
        </div>

        <div className="projects-section__tabs">
          {mode === 'browse' ? (
            <>
              <button
                type="button"
                className={`projects-tab${activeCategory === 'frontend' ? ' projects-tab--active' : ''}`}
                onClick={() => handleTabClick('frontend')}
              >
                Frontend projects
              </button>
              <button
                type="button"
                className={`projects-tab${activeCategory === 'Full Stack' ? ' projects-tab--active' : ''}`}
                onClick={() => handleTabClick('Full Stack')}
              >
                Full Stack projects
              </button>
            </>
          ) : (
            <>
              <Link to="/works?category=frontend" className="projects-tab">
                Frontend projects
              </Link>
              <Link to="/works?category=Full Stack" className="projects-tab">
                Full Stack projects
              </Link>
            </>
          )}
        </div>

        <div className="projects-section__grid">
          {list.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          {list.length === 0 && (
            <p className="projects-section__empty">No projects in this category yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
