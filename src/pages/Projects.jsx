import {
  FaShoppingBasket,
  FaDumbbell,
  FaHotel,
  FaShoppingCart,
  FaBookOpen,
  FaVoteYea,
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaHeartbeat,
} from "react-icons/fa";

import { useState } from "react";

import "../styles/projects.css";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    // ==========================================
    // SOFTWARE DEVELOPMENT
    // ==========================================

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
        "React.js",
        "JavaScript",
        "ethers.js",
        "Solidity",
        "MetaMask",
        "Ethereum Sepolia",
        "Hardhat",
        "Mocha + Chai",
        "Vite",
        "HTML & CSS",
        "Git & GitHub",
      ],
      category: "Software Development",
      link: "https://github.com/thashmiemaya-coder/decentralized-voting-dapp",
    },

    // ==========================================
    // DATA SCIENCE & ANALYTICS
    // ==========================================

    {
      icon: <FaDatabase />,
      image: "/images/sales-analysis.png",
      title: "Sales Data Analysis",
      description:
        "A data analysis project focused on exploring sales data, identifying trends and generating meaningful business insights.",
      technologies: [
        "Python",
        "Pandas",
        "SQL",
        "Data Analysis",
        "Power BI",
      ],
      category: "Data Science & Analytics",

      // Image will be opened in a new tab
      dashboardLink: "/images/sales-analysis.png",
    },

    {
      icon: <FaHeartbeat />,
      image: "/images/heart-disease-dashboard.png",
      title: "Heart Disease Analysis Dashboard",
      description:
        "An interactive Tableau dashboard designed to analyse heart disease patterns, patient characteristics and key health indicators.",
      technologies: [
        "Tableau",
        "Python",
        "Pandas",
        "Data Visualisation",
      ],
      category: "Data Science & Analytics",

      // Image will be opened in a new tab
      dashboardLink: "/images/heart-disease-dashboard.png",
    },
  ];

  // ==========================================
  // FILTER PROJECTS
  // ==========================================

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="projects" className="projects-section">

      {/* ======================================
          SECTION HEADER
      ====================================== */}

      <div className="projects-heading">

        <span className="projects-label">
          <FaCode />
          PROJECTS
        </span>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p>
          A selection of software development, data science and
          analytics projects that demonstrate my technical knowledge,
          creativity and problem-solving skills.
        </p>

      </div>


      {/* ======================================
          CATEGORY FILTERS
      ====================================== */}

      <div className="project-filters">

        <button
          className={activeCategory === "All" ? "active" : ""}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>

        <button
          className={
            activeCategory === "Software Development"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveCategory("Software Development")
          }
        >
          Software Development
        </button>

        <button
          className={
            activeCategory === "Data Science & Analytics"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveCategory("Data Science & Analytics")
          }
        >
          Data Science & Analytics
        </button>

      </div>


      {/* ======================================
          PROJECT CARDS
      ====================================== */}

      <div className="projects-grid">

        {filteredProjects.map((project, index) => (

          <article
            className="project-card"
            key={project.title}
          >

            {/* ==================================
                DASHBOARD IMAGE
            ================================== */}

            {project.image && (

              <a
                href={project.dashboardLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link"
                title="Click to view dashboard"
              >

                <div className="project-image-wrapper">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="project-image-overlay">

                    <div className="dashboard-view">

                      <FaArrowRight />

                      <span>
                        View Dashboard
                      </span>

                    </div>

                  </div>

                </div>

              </a>

            )}


            {/* ==================================
                TOP AREA
            ================================== */}

            <div className="project-top">

              <div className="project-icon">
                {project.icon}
              </div>

              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>

            </div>


            {/* ==================================
                CATEGORY
            ================================== */}

            <div className="project-category">
              {project.category}
            </div>


            {/* ==================================
                TITLE
            ================================== */}

            <h3>
              {project.title}
            </h3>


            {/* ==================================
                DESCRIPTION
            ================================== */}

            <p className="project-description">
              {project.description}
            </p>


            {/* ==================================
                TECHNOLOGIES
            ================================== */}

            <div className="project-technologies">

              {project.technologies.map(
                (technology) => (

                  <span
                    key={technology}
                    className="technology-tag"
                  >
                    {technology}
                  </span>

                )
              )}

            </div>


            {/* ==================================
                PROJECT BUTTON
            ================================== */}

            {project.dashboardLink ? (

              <a
                href={project.dashboardLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >

                View Dashboard

                <FaArrowRight />

              </a>

            ) : (

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >

                View Project

                <FaArrowRight />

              </a>

            )}

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;