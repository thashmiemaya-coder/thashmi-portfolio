import {
  FaUser,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

import "../styles/about.css";

function About() {
  const details = [
    {
      icon: <FaUser />,
      title: "Profile",
      value: "Software Developer | Data Science Undergraduate",
    },
    {
      icon: <FaGraduationCap />,
      title: "Degree",
      value: "BSc (Hons) in Data Science",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Negombo, Sri Lanka",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "thashmiemaya@gmail.com",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <span className="about-label">
          <FaUser />
          ABOUT ME
        </span>

        <h2 className="about-title">
          About <span>Me</span>
        </h2>

        <div className="about-description">
          <p>
            I am a <span>Software Developer</span> and{" "}
            <span>BSc (Hons) in Data Science undergraduate</span> at ICBT
            Campus with a strong foundation in software development and
            problem-solving. Through my academic background and internship at{" "}
            <span>Ceylon Innovation (Pvt) Ltd</span>, I have gained hands-on
            experience in React, ASP.NET Core, C#, JavaScript, SQL Server and
            RESTful APIs. I am passionate about building modern,
            user-friendly applications and continuously improving my
            technical skills to create innovative software solutions.
          </p>
        </div>

        <div className="about-cards">
          {details.map((detail) => (
            <div className="about-card" key={detail.title}>
              <div className="about-icon">
                {detail.icon}
              </div>

              <h3>{detail.title}</h3>

              <p>{detail.value}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;