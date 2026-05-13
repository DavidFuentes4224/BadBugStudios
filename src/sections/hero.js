import React from 'react';

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-content">

          <div className="hero-eyebrow-chip">
            Software Engineer &nbsp;&middot;&nbsp; Game Developer
          </div>

          <h1 className="hero-name">
            <span className="hero-name-first">David</span>
            <span className="hero-name-last">Fuentes</span>
          </h1>

          <p className="hero-tagline">
            I build software used by thousands of daily users
            and games that create lasting experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>

        </div>
      </div>

      <div className="hero-scroll-cue">
        <span className="hero-scroll-label">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
};
