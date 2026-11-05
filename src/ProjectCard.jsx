import './App.css';

export default function ProjectCard({
  title,
  description,
  tech = [],
  featured,
  link
}) {
  return (
    <article className="project-card">
      {featured && (
        <span className="featured-badge">
          Featured
        </span>
      )}

      <h3>{title}</h3>

      <p className="project-description">
        {description}
      </p>

      <div className="project-tech">
        {tech.map((item, index) => (
          <span className="tech-tag" key={index}>
            {item}
          </span>
        ))}
      </div>

      <a
        className="project-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </article>
  );
}