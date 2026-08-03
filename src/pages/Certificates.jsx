import {
  FaCertificate,
  FaCode,
  FaPython,
  FaExternalLinkAlt,
  FaUniversity,
} from "react-icons/fa";

import "../styles/certificates.css";

function Certificates() {
  const certificates = [
    {
      id: "01",
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      category: "Web Development",
      icon: <FaCode />,
      link: "",
    },
    {
      id: "02",
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      category: "Programming",
      icon: <FaPython />,
      link: "",
    },
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <div className="certificates-heading">
          <span className="certificates-label">
            <FaCertificate />
            CERTIFICATIONS
          </span>

          <h2>
            Certificates & <span>Learning</span>
          </h2>

          <p>
            Professional certifications and learning achievements that
            demonstrate my commitment to continuous technical development.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <article
              className="certificate-card"
              key={certificate.id}
            >
              <span className="certificate-number">
                {certificate.id}
              </span>

              <div className="certificate-card-top">
                <div className="certificate-icon">
                  {certificate.icon}
                </div>

                <span className="certificate-badge">
                  {certificate.category}
                </span>
              </div>

              <div className="certificate-content">
                <span className="certificate-small-label">
                  CERTIFICATE
                </span>

                <h3>{certificate.title}</h3>

                <div className="certificate-issuer">
                  <FaUniversity />

                  <div>
                    <span>Issued by</span>
                    <p>{certificate.issuer}</p>
                  </div>
                </div>
              </div>

              <div className="certificate-bottom">
                {certificate.link ? (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-link"
                  >
                    View Certificate
                    <FaExternalLinkAlt />
                  </a>
                ) : (
                  <span className="certificate-completed">
                    <FaCertificate />
                    Completed
                  </span>
                )}
              </div>

              <div className="certificate-accent-line"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;