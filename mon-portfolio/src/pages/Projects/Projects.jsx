import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Moderne",
      description: "Site personnel futuriste avec animations 3D et interface hautement responsive."
    },
    {
      title: "Application E-Commerce",
      description: "Design moderne, gestion du panier, pages produits et interactions fluides."
    },
    {
      title: "Dashboard Admin",
      description: "Statistiques en temps réel, graphiques, interface intuitive et composants dynamiques."
    },
    {
      title: "Clone Netflix",
      description: "Interface immersive, carousels animés, API de films et responsive design."
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
