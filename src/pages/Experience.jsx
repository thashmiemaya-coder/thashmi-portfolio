import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCode,
  FaDatabase,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/experience.css";

function Experience() {
  const responsibilities = [
    {
      icon: <FaCode />,
      text: "Developed responsive web applications using React, C# and ASP.NET Core.",
    },
    {
      icon: <FaDatabase />,
      text: "Worked with SQL Server to design, manage and maintain application databases.",
    },
    {
      icon: <FaCheckCircle />,
      text: "Built and integrated RESTful APIs and worked with JSON-based data.",
    },
    {
      icon: <FaUsers />,
      text: "Collaborated with team members to develop practical and user-friendly software solutions.",
    },
  ];

  const technologies = [
    "React",
    "C#",
    "ASP.NET Core",
    "SQL Server",
    "REST APIs",
    "Git",
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-heading">
          <span className="experience-label">
            <FaBriefcase />
            EXPERIENCE
          </span>

          <h2>
            Professional <span>Experience</span>
          </h2>

          <p>
            Practical industry experience that strengthened my software
            development, database, teamwork and problem-solving skills.
          </p>
        </div>

        <div className="experience-timeline">
          <div className="timeline-marker">
            <span className="timeline-dot"></span>
            <span className="timeline-line"></span>
          </div>

          <article className="experience-card">
            <div className="experience-card-header">
              <div className="experience-icon">
                <FaBriefcase />
              </div>

              <div className="experience-title-area">
                <span className="experience-type">Internship</span>

                <h3>Software Developer Intern</h3>

                <h4>Ceylon Innovation Services (PVT) LTD</h4>
              </div>

              <span className="experience-year">2026</span>
            </div>

            <div className="experience-meta">
              <span>
                <FaCalendarAlt />
                2026
              </span>

              <span>
                <FaMapMarkerAlt />
                Negombo, Sri Lanka
              </span>
            </div>

            <div className="experience-content">
              <p className="experience-introduction">
                During my internship, I gained hands-on experience in full-stack
                software development and contributed to the development of
                practical business applications.
              </p>

              <div className="experience-responsibilities">
                {responsibilities.map((item) => (
                  <div className="responsibility-item" key={item.text}>
                    <div className="responsibility-icon">{item.icon}</div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="experience-technologies">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;