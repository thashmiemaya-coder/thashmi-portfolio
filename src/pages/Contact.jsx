import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedinIn,
  FaGithub,
  FaComments,
} from "react-icons/fa";

import "../styles/contact.css";
import emailjs from "@emailjs/browser";


/* const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const serviceId = "service_4mxs6p5"; 
    const templateId = "service_4mxs6p5";
    const publicKey = "O9K9X8UpKAivcIpzx";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Thashmi ",
      message: formData.message,
      reply_to: formData.email,
    };

    await emailjs.send(serviceId, templateId, templateParams, {
      publicKey: publicKey,
    });
    
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error?.text || error?.message || "Failed to send message. Please try again later.";
    setSubmitStatus(`error: ${errorMessage}`);
  } finally {
    setIsSubmitting(false);
  }
};
*/

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "thashmiemaya@gmail.com",
      link: "mailto:thashmiemaya@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+94 76 123 4567",
      link: "tel:+94761234567",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Negombo, Sri Lanka",
      link: "#contact",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = "service_4mxs6p5";
    const templateId = "template_xn445wf";
    const publicKey = "O9K9X8UpKAivcIpzx";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Thashmi",
          reply_to: formData.email,
        },
        { publicKey }
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      const errorMessage =
        error?.text ||
        error?.message ||
        "Failed to send message. Please try again later.";
      setSubmitStatus(`error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-label">
            <FaComments />
            CONTACT
          </span>

          <h2>
            Let&apos;s <span>Connect</span>
          </h2>

          <p>
            I am open to discussing software development opportunities,
            interesting projects and professional collaborations.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-information">
            <span className="contact-small-label">GET IN TOUCH</span>

            <h3>Let&apos;s create something meaningful together.</h3>

            <p className="contact-introduction">
              Have a project, opportunity or question in mind? Send me a
              message and I will be happy to connect with you.
            </p>

            <div className="contact-details">
              {contactDetails.map((detail) => (
                <a
                  href={detail.link}
                  className="contact-detail-card"
                  key={detail.title}
                >
                  <div className="contact-detail-icon">{detail.icon}</div>

                  <div>
                    <h4>{detail.title}</h4>
                    <p>{detail.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-socials">
              <p>Connect with me</p>

              <div>
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

                <a
                  href="mailto:thashmiemaya@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <div className="contact-form-icon">
                <FaPaperPlane />
              </div>

              <div>
                <span>SEND A MESSAGE</span>
                <h3>Contact Me</h3>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane />
              </button>

              {submitStatus && (
                <p
                  className={`contact-submit-status ${submitStatus.startsWith("error") ? "error" : "success"}`}
                >
                  {submitStatus.startsWith("error")
                    ? submitStatus.replace("error: ", "")
                    : "Your message was sent successfully."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;