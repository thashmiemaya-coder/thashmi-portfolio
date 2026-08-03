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
  FaLaptopCode,
  FaTools,
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
      heading: "Frontend Development",
      description:
        "Technologies I use to create responsive, interactive and user-friendly web applications.",
      icon: <FaLaptopCode />,
      skills: [
        {
          name: "HTML5",
          description: "Web Structure",
          icon: <FaHtml5 />,
        },
        {
          name: "CSS3",
          description: "Responsive Styling",
          icon: <FaCss3Alt />,
        },
        {
          name: "JavaScript",
          description: "Web Development",
          icon: <FaJsSquare />,
        },
        {
          name: "React.js",
          description: "Frontend Library",
          icon: <FaReact />,
        },
      ],
    },

    backend: {
      label: "Backend",
      heading: "Backend Development",
      description:
        "Technologies I use to develop application logic, REST APIs and server-side functionality.",
      icon: <FaServer />,
      skills: [
        {
          name: "C#",
          description: "Programming Language",
          icon: <FaCode />,
        },
        {
          name: "ASP.NET Core",
          description: "Web API Development",
          icon: <SiDotnet />,
        },
        {
          name: "PHP",
          description: "Server-side Development",
          icon: <FaPhp />,
        },
        {
          name: "REST APIs",
          description: "API Integration",
          icon: <FaServer />,
        },
      ],
    },

    databases: {
      label: "Databases",
      heading: "Database Technologies",
      description:
        "Database technologies I use to store, organise, manage and retrieve application data.",
      icon: <FaDatabase />,
      skills: [
        {
          name: "MySQL",
          description: "Relational Database",
          icon: <SiMysql />,
        },
        {
          name: "SQL Server",
          description: "Relational Database",
          icon: <FaDatabase />,
        },
        {
          name: "MongoDB",
          description: "NoSQL Database",
          icon: <SiMongodb />,
        },
      ],
    },

    tools: {
      label: "Tools",
      heading: "Development Tools",
      description:
        "Tools and development environments I use throughout the software development process.",
      icon: <FaTools />,
      skills: [
        {
          name: "VS Code",
          description: "Code Editor",
          icon: <FaCode />,
        },
        {
          name: "Visual Studio",
          description: "Development IDE",
          icon: <FaCode />,
        },
        {
          name: "GitHub",
          description: "Version Control",
          icon: <FaGithub />,
        },
        {
          name: "npm",
          description: "Package Management",
          icon: <FaNpm />,
        },
        {
          name: "XAMPP",
          description: "Local Development",
          icon: <SiXampp />,
        },
        {
          name: "Android Studio",
          description: "Android Development",
          icon: <FaAndroid />,
        },
      ],
    },

    deployment: {
      label: "Deployment & Hosting",
      heading: "Deployment & Hosting",
      description:
        "Cloud and deployment platforms I use to publish and host frontend and backend applications.",
      icon: <FaCloud />,
      skills: [
        {
          name: "Vercel",
          description: "Frontend Deployment",
          icon: <SiVercel />,
        },
        {
          name: "Render",
          description: "Backend Deployment",
          icon: <SiRender />,
        },
        {
          name: "AWS",
          description: "Cloud Hosting",
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

        {/* Heading */}
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

        {/* Tabs */}
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

        {/* Category Content */}
        <div className="skills-category-container">

          <div className="category-header">
            <div className="category-heading-left">
              <div className="category-icon">
                {currentCategory.icon}
              </div>

              <div>
                <span className="category-label">
                  TECHNICAL CATEGORY
                </span>

                <h3>{currentCategory.heading}</h3>

                <p>{currentCategory.description}</p>
              </div>
            </div>

            <span className="category-count">
              {currentCategory.skills.length} Skills
            </span>
          </div>

          {/* Skills */}
          <div className="skills-grid">
            {currentCategory.skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div className="skill-information">
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </div>

                <span className="skill-dot"></span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;