import {
  FaUser,
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/about.css";

function About() {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      label: "Current Education",
      title: "BSc (Hons) Data Science",
      description: "Cardiff Metropolitan University through ICBT Campus",
    },
    {
      icon: <FaBriefcase />,
      label: "Experience",
      title: "Software Developer Intern",
      description: "Ceylon Innovation Services (Pvt) Ltd",
    },
    {
      icon: <FaLaptopCode />,
      label: "Technical Focus",
      title: "Full-Stack Development",
      description: "React, ASP.NET Core, C#, SQL and REST APIs",
    },
  ];

  const strengths = [
    "Software development and problem-solving",
    "Responsive and user-friendly interface design",
    "Database and REST API integration",
    "Continuous learning and professional development",
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-heading">
          <span className="about-label">
            <FaUser />
            ABOUT ME
          </span>

          <h2>
            Professional <span>Profile</span>
          </h2>

          <p>
            Learn more about my academic background, technical experience and
            career interests.
          </p>
        </div>

        <div className="about-main">
          <div className="about-introduction">
            <span className="about-small-label">WHO I AM</span>

            <h3>
              Software developer and undergraduate specialising in data
              science.
            </h3>

            <p>
              I am a motivated software developer and BSc (Hons) Data Science
              undergraduate with a strong foundation in software engineering,
              web development and database management.
            </p>

            <p>
              Through my academic projects and internship at Ceylon Innovation
              Services, I have gained practical experience developing
              responsive applications using React, ASP.NET Core, C#,
              JavaScript, SQL Server and RESTful APIs.
            </p>

            <p>
              My goal is to build reliable, user-focused software solutions
              while continuously improving my knowledge in software development
              and data science.
            </p>
          </div>

          <div className="about-focus-card">
            <span className="about-small-label">PROFESSIONAL FOCUS</span>

            <h3>What I bring to a development team</h3>

            <div className="about-strengths">
              {strengths.map((strength) => (
                <div className="about-strength-item" key={strength}>
                  <FaCheckCircle />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => (
            <article className="about-highlight-card" key={item.label}>
              <div className="about-highlight-icon">{item.icon}</div>

              <div className="about-highlight-content">
                <span>{item.label}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;