import {
  FaAward,
  FaExternalLinkAlt,
  FaCertificate,
} from "react-icons/fa";

import webDesignCertificate from "../assets/certificates/web-design-certificate.png";
import pythonCertificate from "../assets/certificates/Python- Beginners-certificate.png";

import "../styles/certificates.css";

function Certificates() {
  const certificates = [
    {
      id: 1,
      image: webDesignCertificate,
      title: "Web Design for Beginners",
      organisation: "University of Moratuwa",
      category: "Web Development",
      description:
        "Completed foundational learning in web design, including core concepts related to modern and responsive web development.",
    },
    {
      id: 2,
      image: pythonCertificate,
      title: "Python for Beginners",
      organisation: "University of Moratuwa",
      category: "Programming",
      description:
        "Completed foundational training in Python programming, covering essential programming concepts and problem-solving techniques.",
    },
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <div className="certificates-heading">
          <span className="certificates-label">
            <FaAward />
            CERTIFICATIONS
          </span>

          <h2>
            Professional <span>Certificates</span>
          </h2>

          <p>
            Certifications and learning achievements that demonstrate my
            continuous development in software development and programming.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.id}>
              <div className="certificate-image-wrapper">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="certificate-image"
                />

                <div className="certificate-image-overlay">
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-view-button"
                  >
                    View Certificate
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="certificate-content">
                <div className="certificate-top">
                  <div className="certificate-icon">
                    <FaCertificate />
                  </div>

                  <span className="certificate-category">
                    {certificate.category}
                  </span>
                </div>

                <h3>{certificate.title}</h3>

                <p className="certificate-organisation">
                  {certificate.organisation}
                </p>

                <p className="certificate-description">
                  {certificate.description}
                </p>

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate
                  <FaExternalLinkAlt />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;