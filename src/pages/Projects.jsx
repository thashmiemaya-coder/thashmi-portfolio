import {
  FaShoppingBasket,
  FaDumbbell,
  FaHotel,
  FaShoppingCart,
  FaBookOpen,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

import "../styles/projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      icon: <FaShoppingBasket />,
      title: "Mini Inventory System",
      description:
        "A full-stack inventory management system for managing products, categories, suppliers and stock transactions.",
      technologies: ["React", "ASP.NET Core", "SQL Server"],
      link: "https://frontend-mini-inventory-shop.vercel.app/dashboard",
    },
    {
      number: "02",
      icon: <FaDumbbell />,
      title: "FitZone Fitness Centre",
      description:
        "A fitness centre web application with member registration, staff management and enquiry handling.",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      link: "https://github.com/thashmiemaya-coder/Fitzone-Gym-Website",
    },
    {
      number: "03",
      icon: <FaHotel />,
      title: "LuxeVista Resort App",
      description:
        "An Android mobile application for resort booking, room information and nearby attraction discovery.",
      technologies: ["Java", "Android", "MySQL"],
      link: "https://github.com/thashmiemaya-coder/LuxeVistaResort-MobileApp",
    },
    {
      number: "04",
      icon: <FaShoppingCart />,
      title: "Murukku E-Commerce Web Application",
      description:
        "A responsive e-commerce platform for selling traditional murukku products with product browsing, shopping cart and order management features.",
      technologies: ["React", "JavaScript", "C#", "SQL Server"],
      link: "https://github.com/thashmiemaya-coder/murukku-react-frontend",
    },
    {
      number: "05",
      icon: <FaBookOpen />,
      title: "BookHeaven – Online Bookstore",
      description:
        "A modern online bookstore developed using React, JavaScript and MongoDB, featuring dynamic book listings, category filtering, search functionality and a responsive user interface.",
      technologies: ["React", "JavaScript", "MongoDB"],
      link: "https://book-heaven-frontend-pink.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="projects-label">
            <FaCode />
            PROJECTS
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A selection of academic and software development projects that
            demonstrate my technical knowledge, creativity and problem-solving
            skills.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <div className="project-icon">{project.icon}</div>
                <span className="project-number">{project.number}</span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <FaArrowRight />
                </a>
              ) : (
                <span className="project-link project-link-disabled">
                  Coming Soon
                  <FaArrowRight />
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;