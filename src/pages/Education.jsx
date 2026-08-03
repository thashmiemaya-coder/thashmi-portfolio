import {
  FaUniversity,
  FaGraduationCap,
  FaBookOpen,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/education.css";

function Education() {
  const educationData = [
    {
      
      status: "Currently Studying",
      title: "BSc (Hons) in Data Science",
      institution: "Cardiff Metropolitan University through ICBT Campus",
      description:
        "Developing knowledge in data analysis, machine learning, databases, statistics and software development.",
      period: "2026 – Present",
      completion: "Currently Studying",
      icon: <FaUniversity />,
    },
    {
      
      status: "Completed",
      title: "Higher National Diploma in Computing and Software Engineering",
      institution: "ICBT Campus",
      description:
        "Built a strong foundation in programming, software engineering, web development, databases and system design.",
      period: "Completed",
      completion: "Completed",
      icon: <FaGraduationCap />,
    },
    {
      
      status: "Additional Learning",
      title: "Professional and Online Courses",
      institution: "University of Moratuwa and Online Learning Platforms",
      description:
        "Completed courses in web design, Python programming and other technical areas to strengthen my practical skills.",
      period: "Completed",
      completion: "Additional Learning",
      icon: <FaBookOpen />,
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-heading">
          <span className="education-label">
            <FaGraduationCap />
            Education
          </span>

          <h2>
            Academic <span>Journey</span>
          </h2>

          <p>
            My academic background combines software engineering knowledge with
            current studies in data science and continuous professional
            development.
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((item) => (
            <article className="education-item" key={item.number}>
              <div className="education-dot"></div>

              <div className="education-card">
                <span className="education-number">{item.number}</span>

                <div className="education-icon">{item.icon}</div>

                <div className="education-content">
                  <span className="education-status">{item.status}</span>

                  <h3>{item.title}</h3>

                  <p className="education-institution">{item.institution}</p>

                  <p className="education-description">{item.description}</p>

                  <div className="education-completion">
                    <FaCheckCircle />
                    <span>{item.completion}</span>
                  </div>
                </div>

                <div className="education-period">
                  <FaCalendarAlt />
                  <span>{item.period}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;