import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const { title, description, tags = [], image, liveUrl, cachedUrl } = project;

  return (
    <article className="project-card">
      <div className="project-card__image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="project-card__placeholder">{title.slice(0, 1)}</div>
        )}
      </div>

      {tags.length > 0 && (
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      <div className="project-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-card__actions">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary project-card__btn">
              Live {'<~>'}
            </a>
          )}
          {cachedUrl && (
            <a href={cachedUrl} target="_blank" rel="noreferrer" className="btn btn-secondary project-card__btn">
              Cached {'>='}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
