import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

import webDesignCertificate from "../assets/certificates/web-design-certificate.jpg";
import pythonCertificate from "../assets/certificates/python-certificate.jpg";
import futureCareersCertificate from "../assets/certificates/future-careers-bridge.jpg";

import "../styles/certificates.css";

function Certificates() {
  const certificates = [
    {
      image: webDesignCertificate,
      title: "Web Design for Beginners",
      organisation: "University of Moratuwa",
      year: "2026",
    },
    {
      image: pythonCertificate,
      title: "Python for Beginners",
      organisation: "University of Moratuwa",
      year: "2026",
    },
    {
      image: futureCareersCertificate,
      title: "Future Careers Bridge",
      organisation: "University of Moratuwa",
      year: "2026",
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
            Professional <span>Certificates</span>
          </h2>

          <p>
            Certifications and professional learning achievements that support
            my continuous development in technology and software development.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <article className="certificate-card" key={certificate.title}>

              <div className="certificate-image">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                />

                <div className="certificate-overlay">
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="certificate-content">
                <div className="certificate-top">
                  <span className="certificate-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="certificate-year">
                    {certificate.year}
                  </span>
                </div>

                <h3>{certificate.title}</h3>

                <p>{certificate.organisation}</p>

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