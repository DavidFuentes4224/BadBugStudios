import React from 'react';

const TIMELINE = [
  {
    date: 'Nov 2021 — Present',
    title: 'Software Engineer',
    company: 'Logos Bible Software · Full-Time',
    description:
      'Application development for the Proclaim team, writing managed and native code for Windows and Mac. Member of the Bible study services on-call rotation covering presentation software and related APIs. Contributed to migrating CRM data to Salesforce from a proprietary solution, and assisted on the commerce team maintaining a series of enterprise APIs.',
  },
  {
    date: 'Sep 2024 — Present',
    title: 'M.S. Computer Science — Graphics',
    company: 'Georgia Institute of Technology (OMSCS)',
    description:
      'Graduate study focused on computer graphics, rendering, and animation. Academic and personal work spans rendering systems, engine-level architecture, and game development.',
  },
  {
    date: 'Sep 2020 — Nov 2021',
    title: 'Software Developer',
    company: 'Heritage Bank · Full-Time',
    description:
      'Web application development for a commercial loan origination system. Assisted in implementing branch-based agile workflows and pull request practices with Git. Maintained a proprietary banking application build tool using React.',
  },
  {
    date: 'Mar 2022 — Mar 2023',
    title: 'B.S. Software Engineering',
    company: 'Western Governors University',
    description:
      'Accelerated degree program covering software engineering principles, project management, and applied development practices.',
  },
  {
    date: 'Sep 2016 — Dec 2019',
    title: 'B.S. Computer Science',
    company: 'Western Washington University',
    description:
      'Core CS fundamentals including algorithms, data structures, systems programming, and computer graphics. Pursued a passion for game development alongside coursework.',
  },
  {
    date: 'Ongoing',
    title: 'Indie Game Developer',
    company: 'Bad Bug Studios · Independent',
    description:
      'Creating original games using Unity, Unreal Engine, and Godot under the Bad Bug Studios banner. Handling all aspects of production: design, programming, art, and deployment. Published Sky Climbers as a browser-playable WebGL title.',
  },
];

export const ExperienceSection = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-inner">
        <div className="section-header-group" style={{ textAlign: 'left' }}>
          <p className="section-label">Background</p>
          <h2 className="section-title">Experience &amp; Education</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A track record of professional software engineering and independent game
            development, spanning enterprise applications and original game projects.
          </p>
        </div>
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <div className="timeline-company">{item.company}</div>
              <p className="timeline-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
