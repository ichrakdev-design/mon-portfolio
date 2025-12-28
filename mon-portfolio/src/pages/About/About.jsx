import React, { useEffect } from "react";
import "./About.css";

const timelineData = [
  { year: "2024", event: "Études universitaires en réseaux et télécommunications" },
  { year: "2024–2025", event: "Module développement web : HTML, CSS et bases JavaScript" },
  { year: "2025", event: "Formation intensive Frontend chez BrainerX (1 mois)" },
  { year: "2025", event: "Réalisation de projets Frontend et projet complet DonDeal (Frontend + Backend)" },
];

const About = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const line = document.querySelector(".timeline-line");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            const index = Array.from(items).indexOf(entry.target);
            const lineHeight = ((index + 1) / items.length) * 100;
            line.style.setProperty("--line-height", `${lineHeight}%`);
            const dot = entry.target.querySelector(".timeline-dot");
            dot.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach(item => observer.observe(item));
  }, []);

  return (
    <section className="about" id="about">
      <h2 className="about-title">À propos</h2>

      <div className="about-content">
        {/* Image Profil */}
        <div className="profile-img">
          <img src="./profil.jpeg" alt="Ichrak - Développeuse Web Junior" />
        </div>

        {/* Texte de présentation */}
        <div className="about-text">
          <p>
            Bonjour, je suis Ichrak, diplômée en réseaux et télécommunications,
            avec un fort intérêt pour le développement web et les technologies modernes.
          </p>

          <p>
            Durant mon parcours universitaire, j’ai étudié les bases du développement web
            (HTML, CSS et JavaScript). En 2025, j’ai renforcé mes compétences grâce à
            une formation intensive Frontend chez BrainerX.
          </p>

          <p>
            J’ai réalisé plusieurs projets Frontend ainsi qu’un projet complet nommé
            DonDeal, intégrant Frontend en React.js et Backend avec Node.js, Express et MongoDB.
            Je souhaite continuer à apprendre et à développer des projets innovants.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <span className="timeline-year">{item.year}</span>
              <p className="timeline-event">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
