import {
  FaUser,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/about.css";

function About() {
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
      </div>
    </section>
  );
}

export default About;