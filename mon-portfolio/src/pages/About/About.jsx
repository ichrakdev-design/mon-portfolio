import React, { useEffect } from "react";
import "./About.css";

const timelineData = [
  { year: "2021", event: "Début en développement web" },
  { year: "2022", event: "Maîtrise de React.js" },
  { year: "2023", event: "Création de projets personnels futuristes" },
  { year: "2024", event: "Portfolio ultra pro en développement" },
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
          <img src="/profil.jpeg" alt="Profile" />
        </div>

        {/* Texte de présentation */}
        <div className="about-text">
          <p>
            Bonjour ! Je suis Ichrak, passionnée par le développement web et la création
            d’interfaces modernes et réactives. J’aime concevoir des expériences utilisateur
            fluides et futuristes tout en respectant les meilleures pratiques du web.
          </p>
          <p>
            Mon expertise couvre React.js, HTML, CSS, JavaScript, ainsi que la conception
            UI/UX. Je crée des projets personnels et professionnels qui allient esthétique,
            performance et interactivité.
          </p>
          <p>
            Je suis toujours à la recherche de nouvelles opportunités pour apprendre,
            collaborer et développer des projets innovants dans le domaine du web.
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
