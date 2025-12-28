import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-title">Contact</h2>

        <p className="contact-text">
          Si vous souhaitez collaborer, discuter d’un projet ou juste dire bonjour :
        </p>

        <a href="mailto:ichrakebb@gmail.com" className="contact-email">
          📧 ichrakebb@gmail.com
        </a>

        <div className="contact-socials">
          <a
            href="https://github.com/ichrakdev-design"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ichrak-djebri-a84aa639b/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>

          <a
            href="https://ichrakdev-design.github.io/mon-portfolio/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            Portfolio
          </a>
        </div>

        <a href="mailto:ichrakdev@gmail.com" className="contact-btn">
          Me contacter
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
