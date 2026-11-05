import { profile, projects, skills } from "./data.jsx";
import Hero from "./hero.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectList from "./ProjectList.jsx";
import Section from "./section.jsx";
import Skills from "./skills.jsx";


export default function App() {
  return (
    <>
     <Hero profile={profile} />
     <Skills skills={skills || []} />
     <ProjectCard projects={projects || []} />
     <Section id="projects" title="Featured Projects">
      <ProjectList projects={projects || []} />
     </Section>
     <ProjectList projects={projects || []} />
    </>
  )
}
