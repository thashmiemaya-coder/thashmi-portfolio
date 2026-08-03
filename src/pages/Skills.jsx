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
        "Technologies I use to create responsive, interactive and user-friendly web applications.",
      skills: [
        {
          name: "HTML5",
          subtitle: "Web Structure",
          icon: <FaHtml5 />,
        },
        {
          name: "CSS3",
          subtitle: "Responsive Styling",
          icon: <FaCss3Alt />,
        },
        {
          name: "JavaScript",
          subtitle: "Web Development",
          icon: <FaJsSquare />,
        },
        {
          name: "React.js",
          subtitle: "Frontend Library",
          icon: <FaReact />,
        },
      ],
    },

    backend: {
      label: "Backend",
      title: "Backend Development",
      description:
        "Technologies I use for application logic, APIs and server-side development.",
      skills: [
        {
          name: "C#",
          subtitle: "Programming Language",
          icon: <FaCode />,
        },
        {
          name: "ASP.NET Core",
          subtitle: "Web API Development",
          icon: <SiDotnet />,
        },
        {
          name: "PHP",
          subtitle: "Server-Side Development",
          icon: <FaPhp />,
        },
        {
          name: "REST APIs",
          subtitle: "API Development",
          icon: <FaServer />,
        },
      ],
    },

    databases: {
      label: "Databases",
      title: "Database Technologies",
      description:
        "Database technologies I use to manage and store application data.",
      skills: [
        {
          name: "MySQL",
          subtitle: "Relational Database",
          icon: <SiMysql />,
        },
        {
          name: "SQL Server",
          subtitle: "Relational Database",
          icon: <FaDatabase />,
        },
        {
          name: "MongoDB",
          subtitle: "NoSQL Database",
          icon: <SiMongodb />,
        },
      ],
    },

    tools: {
      label: "Tools",
      title: "Development Tools",
      description:
        "Tools and development environments I use throughout software development.",
      skills: [
        {
          name: "Visual Studio Code",
          subtitle: "Code Editor",
          icon: <FaCode />,
        },
        {
          name: "Visual Studio",
          subtitle: "Development IDE",
          icon: <FaCode />,
        },
        {
          name: "GitHub",
          subtitle: "Version Control",
          icon: <FaGithub />,
        },
        {
          name: "npm",
          subtitle: "Package Management",
          icon: <FaNpm />,
        },
        {
          name: "XAMPP",
          subtitle: "Local Development",
          icon: <SiXampp />,
        },
        {
          name: "Android Studio",
          subtitle: "Android Development",
          icon: <FaAndroid />,
        },
      ],
    },

    deployment: {
      label: "Deployment & Hosting",
      title: "Deployment & Hosting",
      description:
        "Platforms I use to deploy and host frontend and backend applications.",
      skills: [
        {
          name: "Vercel",
          subtitle: "Frontend Deployment",
          icon: <SiVercel />,
        },
        {
          name: "Render",
          subtitle: "Backend Deployment",
          icon: <SiRender />,
        },
        {
          name: "AWS",
          subtitle: "Cloud Hosting",
          icon: <FaCloud />,
        },
      ],
    },
  };

  const [activeCategory, setActiveCategory] = useState("frontend");

  const currentCategory = categories[activeCategory];

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

        <div className="skills-tabs-wrapper">
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
        </div>

        <div className="active-category-heading">
          <span>TECHNICAL CATEGORY</span>

          <h3>{currentCategory.title}</h3>

          <p>{currentCategory.description}</p>
        </div>

        <div className="skills-grid">
          {currentCategory.skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-card-top">
                <div className="skill-icon">{skill.icon}</div>

                <span className="skill-category-badge">
                  {currentCategory.label}
                </span>
              </div>

              <div className="skill-card-content">
                <h4>{skill.name}</h4>

                <p>{skill.subtitle}</p>
              </div>

              <div className="skill-card-line"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;