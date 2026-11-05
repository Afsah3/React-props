import ProjectCard from "./ProjectCard.jsx";

export default function ProjectList({ projects }) {
    
    if (!projects || projects.length === 0) {
        return <p>No projects available.</p>;
        }

    return (
        <div className="project-list">
            {projects.map((project) => (
                <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tech={project.tech}
                featured={project.featured}
                link={project.link}
                />
            ))}
        </div>
    )
}