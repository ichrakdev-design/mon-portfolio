import React from "react";
import { motion } from "framer-motion";
import "./Skills.css"; // S majuscule, doit correspondre au nom exact du fichier

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML5",
  "CSS3",
  "Git / GitHub"
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Compétences & Tech Stack</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
