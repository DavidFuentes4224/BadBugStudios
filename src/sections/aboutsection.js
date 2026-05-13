import React from 'react';
import me from "../images/Me.jpg";

export const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">

        <div className="about-photo-col">
          <img src={me} className="about-photo" alt="David Fuentes" />
          <ul className="about-contact-info">
            <li>
              <span className="about-contact-label">Based in</span>
              <span>Washington, USA</span>
            </li>
            <li>
              <span className="about-contact-label">Status</span>
              <span>Full-Time Engineer &amp; M.S. Student</span>
            </li>
            <li>
              <span className="about-contact-label">Interests</span>
              <span>Games, Music, Retro Photography</span>
            </li>
          </ul>
        </div>

        <div className="about-text-col">
          <p className="section-label">Background</p>
          <h2 className="section-title">About David</h2>
          <div className="section-divider"></div>
          <p>
            I'm a software engineer specializing in C#, with a focus on game engine
            architecture, 3D systems, and performance-sensitive application development. My
            professional work spans editor tooling, runtime systems, and enterprise software
            across both Windows and macOS platforms.
          </p>
          <p>
            I hold a B.S. in Software Engineering from Western Governors University. I am currently pursuing
            an M.S. in Computer Science with a specialization in Computer Graphics through Georgia
            Tech's OMSCS program, deepening my expertise in rendering, animation, and
            engine-level systems.
          </p>
          <p>
            Outside of professional work, I develop and publish original games under{' '}
            <strong>Bad Bug Studios</strong>, taking projects from concept through
            deployment across Unity and Godot. I'm also an avid musician
            and film photographer.
          </p>

          <div className="about-stats">
            <div className="about-stat-card">
              <div className="about-stat-value">5+</div>
              <div className="about-stat-label">Years Experience</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-value">2</div>
              <div className="about-stat-label">Game Engines</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-value">4</div>
              <div className="about-stat-label">Certifications</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
