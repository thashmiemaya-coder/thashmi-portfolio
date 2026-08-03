import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaDatabase,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import { SiDotnet } from "react-icons/si";
import "../styles/skills.css";

function Skills() {
  const skills = [
    {
      name: "HTML",
      level: 90,
      icon: <FaHtml5 />,
      category: "Frontend",
    },
    {
      name: "CSS",
      level: 85,
      icon: <FaCss3Alt />,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      level: 80,
      icon: <FaJsSquare />,
      category: "Frontend",
    },
    {
      name: "React",
      level: 80,
      icon: <FaReact />,
      category: "Frontend",
    },
    {
      name: "C#",
      level: 80,
      icon: <FaCode />,
      category: "Backend",
    },
    {
      name: "ASP.NET Core Web API",
      level: 75,
      icon: <SiDotnet />,
      category: "Backend",
    },
    {
      name: "Python",
      level: 70,
      icon: <FaPython />,
      category: "Programming",
    },
    {
      name: "SQL Server",
      level: 85,
      icon: <FaDatabase />,
      category: "Database",
    },
    {
      name: "Git & GitHub Source code",
      level: 80,
      icon: <FaGithub />,
      category: "Development Tool",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-heading">
          <span className="skills-label">
            <FaCode />
            MY SKILLS
          </span>

          <h2>
            Technical <span>Skills</span>
          </h2>

          <p>
            Technologies and development tools I use to build modern,
            responsive and reliable software applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-card-top">
                <div className="skill-icon">{skill.icon}</div>

                <span className="skill-category">{skill.category}</span>
              </div>

              <div className="skill-title-row">
                <h3>{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>

              <div className="skill-progress-track">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="progress-glow"></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;