import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
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

        <a href="mailto:your-email@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>

      <p>
        © {new Date().getFullYear()} Thashmi Emaya Fernando. All rights
        reserved.
      </p>

      <a href="#home" className="back-to-top" aria-label="Back to top">
        <FaArrowUp />
      </a>
    </footer>
  );
}

export default Footer;