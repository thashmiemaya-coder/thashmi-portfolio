import { useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaDatabase,
  FaGithub,
  FaNpm,
  FaAndroid,
  FaCode,
  FaServer,
  FaCloud,
} from "react-icons/fa";

import {
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiXampp,
  SiVercel,
  SiRender,
} from "react-icons/si";

import "../styles/skills.css";

function Skills() {
  const categories = {
    frontend: {
      label: "Frontend",
      title: "Frontend Development",
      description:
        "Technologies I use to build responsive and interactive user interfaces.",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "React.js", icon: <FaReact /> },
      ],
    },

    backend: {
      label: "Backend",
      title: "Backend Development",
      description:
        "Technologies I use to build APIs, application logic and server-side functionality.",
      skills: [
        { name: "C#", icon: <FaCode /> },
        { name: "ASP.NET Core", icon: <SiDotnet /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "REST APIs", icon: <FaServer /> },
      ],
    },

    databases: {
      label: "Databases",
      title: "Database Technologies",
      description:
        "Database technologies I use for storing, managing and retrieving application data.",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQL Server", icon: <FaDatabase /> },
      ],
    },

    tools: {
      label: "Tools",
      title: "Development Tools",
      description:
        "Development environments and tools I use while building and managing software projects.",
      skills: [
        { name: "Visual Studio Code", icon: <FaCode /> },
        { name: "Visual Studio", icon: <FaCode /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "npm", icon: <FaNpm /> },
        { name: "XAMPP", icon: <SiXampp /> },
        { name: "Android Studio", icon: <FaAndroid /> },
      ],
    },

    deployment: {
      label: "Deployment & Hosting",
      title: "Deployment & Hosting",
      description:
        "Platforms I use to deploy, host and manage frontend and backend applications.",
      skills: [
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Render", icon: <SiRender /> },
        { name: "AWS", icon: <FaCloud /> },
      ],
    },
  };

  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeSkills = categories[activeCategory];

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
            Explore the technologies, databases, development tools and
            deployment platforms I use in software development.
          </p>
        </div>

        <div className="skills-tabs">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              type="button"
              className={`skills-tab ${
                activeCategory === key ? "active" : ""
              }`}
              onClick={() => setActiveCategory(key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-content-heading">
            <span>TECHNICAL CATEGORY</span>
            <h3>{activeSkills.title}</h3>
            <p>{activeSkills.description}</p>
          </div>

          <div className="skills-grid">
            {activeSkills.skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>

                <span className="skill-name">{skill.name}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;