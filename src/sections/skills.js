import React from 'react';

const SKILLS = {
  'Languages': ['C#', 'C++', 'Python', 'JavaScript'],
  'Game Development': ['Unity', 'Unreal Engine', 'Godot', 'WebGL'],
  'Engine Focus': ['Rendering & Graphics', 'Editor & Tooling', 'Runtime Architecture', 'Asset Pipelines'],
  'Frameworks & Tools': ['React', 'WPF', 'Cocoa', 'MySQL', 'Git', 'Visual Studio'],
};

export const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-inner">
        <div className="section-header-group">
          <p className="section-label">What I Work With</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Core languages, frameworks, and domain knowledge accumulated across
            professional engineering and independent game development.
          </p>
        </div>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, tags]) => (
            <div key={category} className="skills-category">
              <div className="skills-category-title">{category}</div>
              <div className="skills-tags">
                {tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
