import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Personnel",
      description:
        "Portfolio personnel développé avec React.js pour présenter mes projets et compétences.",
      github: "https://github.com/ichrakdev-design/mon-portfolio",
      live: "https://ichrakdev-design.github.io/mon-portfolio/"
    },
    {
      title: "DonDeal – Frontend",
      description:
        "Application web de vente et de dons développée avec React.js. Interface moderne et responsive.",
      github: "https://github.com/ichrakdev-design/final-frontend",
      live: ""
    },
    {
      title: "DonDeal – Backend",
      description:
        "API REST développée avec Node.js, Express et MongoDB. Gestion des utilisateurs, annonces et dashboard admin.",
      github: "https://github.com/ichrakdev-design/final-backend",
      live: ""
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="projects" id="projects">
      <h2>Mes Projets</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                🔗 GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  🌍 Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
