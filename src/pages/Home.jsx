import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import profileImage from "../assets/profile.jpeg";
import "../styles/home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <p className="home-greeting">Hello, I&apos;m</p>

          <h1 className="home-title">
            Thashmi
            <span className="second-name">Emaya</span>
            <span className="surname">Fernando</span>
          </h1>

          <h2 className="home-role">
            Software Developer | Data Science Undergraduate
          </h2>

          <p className="home-description">
            I build modern, responsive and user-friendly web applications. I am
            passionate about software development, data analysis and solving
            real-world problems through technology.
          </p>

          <div className="home-buttons">
            <a href="#contact" className="primary-button">
              Hire Me
              <FaArrowRight />
            </a>

            <a href="#projects" className="secondary-button">
              View My Work
              <FaArrowRight />
            </a>
          </div>

          <div className="social-area">
            <p>Connect with me</p>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a href="mailto:thashmiemaya@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>

              <a href="#contact" aria-label="Location">
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="home-image-area">
          <div className="image-glow"></div>

          <div className="image-circle">
            <img
              src={profileImage}
              alt="Thashmi Emaya Fernando"
              className="profile-image"
            />
          </div>

          <div className="floating-circle circle-one"></div>
          <div className="floating-circle circle-two"></div>
          <div className="floating-circle circle-three"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;