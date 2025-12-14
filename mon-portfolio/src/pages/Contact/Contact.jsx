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

        <a href="mailto:exemple@gmail.com" className="contact-email">
          📧 exemple@gmail.com
        </a>

        <div className="contact-socials">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">Portfolio</a>
        </div>

        <a href="mailto:exemple@gmail.com" className="contact-btn">
          Me contacter
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
