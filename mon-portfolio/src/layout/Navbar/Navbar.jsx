import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // ferme le menu mobile
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <span className="logo-highlight">Ichrak</span>Dev
      </div>

      {/* Menu desktop */}
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={() => scrollToSection("#home")}>Accueil</a>
          </li>
          <li>
            <a href="#skills" onClick={() => scrollToSection("#skills")}>Compétences</a> {/* <-- ajouté */}
          </li>
          <li>
            <a href="#projects" onClick={() => scrollToSection("#projects")}>Projets</a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection("#about")}>À propos</a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection("#contact")}>Contact</a>
          </li>
        </ul>
      </div>

      {/* Burger mobile */}
      <div
        className={`burger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu mobile */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#home" onClick={() => scrollToSection("#home")}>Accueil</a>
        <a href="#skills" onClick={() => scrollToSection("#skills")}>Compétences</a> {/* <-- ajouté */}
        <a href="#projects" onClick={() => scrollToSection("#projects")}>Projets</a>
        <a href="#about" onClick={() => scrollToSection("#about")}>À propos</a>
        <a href="#contact" onClick={() => scrollToSection("#contact")}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
