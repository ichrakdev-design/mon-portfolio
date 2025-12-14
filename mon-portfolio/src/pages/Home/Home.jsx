import React, { useEffect, useState } from "react";
import "./Home.css";

const roles = [
  "Développeur Front-End",
  "Spécialiste React.js",
  "UI/UX Designer",
  "Créateur d'expériences web"
];

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typing = setTimeout(() => {
      setText(currentRole.slice(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      if (charIndex === currentRole.length) {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1500);
      }
    }, 70);

    return () => clearTimeout(typing);
  }, [charIndex, roleIndex]);

  const scrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Bienvenue dans mon univers</h1>

        <h2 className="hero-role">
          {text}
          <span className="cursor">|</span>
        </h2>

        <p className="hero-subtitle">
          Création d’interfaces modernes, fluides et réactives avec un style futuriste.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo("#projects")}>
            Voir mes projets
          </button>
          <button className="btn-secondary" onClick={() => scrollTo("#contact")}>
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
