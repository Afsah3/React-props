import "./App.css";
export default function Skills({ skills }) {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <p className="skills-description">Technologies and tools I work with</p>
      {skills.length === 0 ? (
        <p>No skills available</p>
      ) : (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </section>
  );
}