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
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt />,
        },
        {
          name: "JavaScript",
          icon: <FaJsSquare />,
        },
        {
          name: "React.js",
          icon: <FaReact />,
        },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        {
          name: "C#",
          icon: <FaCode />,
        },
        {
          name: "ASP.NET Core",
          icon: <SiDotnet />,
        },
        {
          name: "PHP",
          icon: <FaPhp />,
        },
        {
          name: "REST APIs",
          icon: <FaServer />,
        },
      ],
    },

    {
      title: "Databases",
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
        {
          name: "SQL Server",
          icon: <FaDatabase />,
        },
      ],
    },

    {
      title: "Development Tools",
      skills: [
        {
          name: "Visual Studio Code",
          icon: <FaCode />,
        },
        {
          name: "Visual Studio",
          icon: <FaCode />,
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
        },
        {
          name: "npm",
          icon: <FaNpm />,
        },
        {
          name: "XAMPP",
          icon: <SiXampp />,
        },
        {
          name: "Android Studio",
          icon: <FaAndroid />,
        },
      ],
    },

    {
      title: "Deployment & Hosting",
      skills: [
        {
          name: "Vercel",
          icon: <SiVercel />,
        },
        {
          name: "Render",
          icon: <SiRender />,
        },
        {
          name: "AWS",
          icon: <FaCloud />,
        },
      ],
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
            Technologies, databases, development tools and deployment platforms
            I use to build modern and reliable software applications.
          </p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-group-header">
                <h3>{group.title}</h3>
              </div>

              <div className="skills-grid">
                {group.skills.map((skill) => (
                  <article className="skill-card" key={skill.name}>
                    <div className="skill-icon">{skill.icon}</div>

                    <span className="skill-name">
                      {skill.name}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;