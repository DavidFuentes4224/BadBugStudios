import React from 'react';
import logo1 from '../images/background1.png';
import MagicMayhem from '../images/MagicMayhem.png';
import Sasquatch from '../images/Sasquatch.png';

const PROJECTS = [
  {
    title: 'Sky Climbers',
    description:
      'A fast-paced WebGL platformer built in Unity. I designed and programmed the game, and created all of the visuals and audio using Photoshop and FamiStudio. Playable directly in your browser — no download needed.',
    tags: ['Unity', 'C#', 'WebGL', 'Game Dev'],
    image: logo1,
    link: '/skyclimbers',
    linkLabel: 'Play Now →',
  },
  {
    title: 'Magic Mayhem',
    description:
      'Capstone project for a game development course at Georgia Institute of Technology. My contributions include game controller setup, game saving/loading, entity wave spawning, and spell casting. Cooperative wave survival — protect the town from goblins using magic spells, solo or with a friend.',
    tags: ['Unity', 'C#', 'Game Dev', 'Georgia Tech', 'Co-op'],
    image: MagicMayhem,
    link: 'https://www.indiedb.com/games/magic-mayhem',
    linkLabel: 'View on IndieDB →',
    external: true,
  },
  {
    title: 'Upcoming Sasquatch Photography Game',
    description:
      'Horror photography game set in the Pacific Northwest. Capture photos of the legendary Sasquatch without getting caught.',
    tags: ['Godot', 'Photography', 'Game Dev', 'Godot Script'],
    image: Sasquatch,
    link: null,
    linkLabel: null,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <div className="section-header-group" style={{ textAlign: 'left' }}>
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A selection of personal and professional projects spanning software
            engineering and game development.
          </p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map(project => (
            <div key={project.title} className="project-card">
              {project.image ? (
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
              ) : (
                <div className="project-card-image-placeholder">
                  {project.emoji}
                </div>
              )}
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="project-card-link"
                    target={project.external ? '_blank' : undefined}
                    rel={project.external ? 'noopener noreferrer' : undefined}
                  >
                    {project.linkLabel}
                  </a>
                )}
                {!project.link && project.linkLabel && (
                  <span className="project-card-link" style={{ opacity: 0.45 }}>
                    {project.linkLabel}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
