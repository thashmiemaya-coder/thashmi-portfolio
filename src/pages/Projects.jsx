import {
  FaShoppingBasket,
  FaDumbbell,
  FaHotel,
  FaShoppingCart,
  FaBookOpen,
  FaVoteYea,
  FaArrowRight,
  FaCode,
  FaChartBar,
  FaDatabase,
  FaChartLine,
} from "react-icons/fa";

import { useState } from "react";

import "../styles/projects.css";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      icon: <FaShoppingBasket />,
      title: "Mini Inventory System",
      description:
        "A full-stack inventory management system for managing products, categories, suppliers and stock transactions.",
      technologies: ["React", "ASP.NET Core", "SQL Server"],
      category: "Software Development",
      link: "https://frontend-mini-inventory-shop.vercel.app/dashboard",
    },

    {
      icon: <FaDumbbell />,
      title: "FitZone Fitness Centre",
      description:
        "A fitness centre web application with member registration, staff management and enquiry handling.",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      category: "Software Development",
      link: "https://github.com/thashmiemaya-coder/Fitzone-Gym-Website",
    },

    {
      icon: <FaHotel />,
      title: "LuxeVista Resort App",
      description:
        "An Android mobile application for resort booking, room information and nearby attraction discovery.",
      technologies: ["Java", "Android", "MySQL"],
      category: "Software Development",
      link: "https://github.com/thashmiemaya-coder/LuxeVistaResort-MobileApp",
    },

    {
      icon: <FaShoppingCart />,
      title: "Murukku E-Commerce Web Application",
      description:
        "A responsive e-commerce platform for selling traditional murukku products with product browsing, shopping cart and order management features.",
      technologies: ["React", "JavaScript", "C#", "SQL Server"],
      category: "Software Development",
      link: "https://github.com/thashmiemaya-coder/murukku-react-frontend",
    },

    {
      icon: <FaBookOpen />,
      title: "BookHeaven – Online Bookstore",
      description:
        "A modern online bookstore developed using React, JavaScript and MongoDB, featuring dynamic book listings, category filtering, search functionality and a responsive user interface.",
      technologies: ["React", "JavaScript", "MongoDB"],
      category: "Software Development",
      link: "https://book-heaven-frontend-pink.vercel.app/",
    },

    {
      icon: <FaVoteYea />,
      title: "Decentralized Voting DApp",
      description:
        "A secure decentralized voting application enabling users to connect their MetaMask wallet, participate in blockchain-based elections, cast votes and view transparent election results through a smart contract.",
      technologies: [
        "React",
        "JavaScript",
        "ethers.js",
        "Solidity",
        "MetaMask",
        "Ethereum",
      ],
      category: "Software Development",
      link: "https://github.com/thashmiemaya-coder/decentralized-voting-dapp",
    },

    // =========================
    // DATA SCIENCE PROJECTS
    // =========================

    {
      icon: <FaChartBar />,
      title: "Vehicle Price Analysis",
      description:
        "An exploratory data analysis project investigating vehicle characteristics and their relationship with vehicle prices using statistical analysis and data visualization.",
      technologies: ["Python", "Pandas", "Statistics", "Matplotlib"],
      category: "Data Science & Analytics",
      link: "#",
    },

    {
      icon: <FaDatabase />,
      title: "Business Sales Analysis",
      description:
        "A data analysis project focused on identifying sales trends, top-performing products and key business insights from sales data.",
      technologies: ["Python", "Pandas", "SQL", "Data Analysis"],
      category: "Data Science & Analytics",
      link: "#",
    },

    {
      icon: <FaChartLine />,
      title: "Business Performance Dashboard",
      description:
        "An interactive business intelligence dashboard designed to monitor sales, profit, product performance and overall business performance.",
      technologies: ["Power BI", "Excel", "Data Analytics"],
      category: "Data Science & Analytics",
      link: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* Heading */}
        <div className="projects-heading">
          <span className="projects-label">
            <FaCode />
            PROJECTS
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A selection of software development, data science and analytics
            projects that demonstrate my technical knowledge, creativity and
            problem-solving skills.
          </p>
        </div>

        {/* Category Filter */}
        <div className="project-filters">

          <button
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>

          <button
            className={
              activeCategory === "Software Development" ? "active" : ""
            }
            onClick={() =>
              setActiveCategory("Software Development")
            }
          >
            Software Development
          </button>

          <button
            className={
              activeCategory === "Data Science & Analytics" ? "active" : ""
            }
            onClick={() =>
              setActiveCategory("Data Science & Analytics")
            }
          >
            Data Science & Analytics
          </button>

        </div>

        {/* Projects */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.title}>

              <div className="project-top">
                <div className="project-icon">
                  {project.icon}
                </div>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {project.link && project.link !== "#" ? (
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