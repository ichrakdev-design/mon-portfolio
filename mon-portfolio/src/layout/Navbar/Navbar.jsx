import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-highlight">Ichrak</span>Dev
      </div>

      <div className="nav-center">
        <ul className="nav-links">
          <li onClick={() => scrollToSection("#home")}>Accueil</li>
          <li onClick={() => scrollToSection("#projects")}>Projets</li>
          <li onClick={() => scrollToSection("#about")}>À propos</li>
          <li onClick={() => scrollToSection("#contact")}>Contact</li>
        </ul>
      </div>

      <div
        className={`burger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <p onClick={() => scrollToSection("#home")}>Accueil</p>
        <p onClick={() => scrollToSection("#projects")}>Projets</p>
        <p onClick={() => scrollToSection("#about")}>À propos</p>
        <p onClick={() => scrollToSection("#contact")}>Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;
