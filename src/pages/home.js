import { Hero }            from '../sections/hero';
import { AboutSection }    from '../sections/aboutsection';
import { SkillsSection }   from '../sections/skills';
import { ProjectsSection } from '../sections/projects';
import { ExperienceSection } from '../sections/experience';
import { ContactForm }     from '../sections/contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactForm />
    </>
  );
};