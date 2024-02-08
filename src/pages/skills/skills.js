import React from "react";
import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import SkillCard from "../../components/SkillCard";
import skillsDetails from './skillsDetails';

const Experience = () => {
  const { frontSkills, backSkills, designSkills } = skillsDetails();

  return (
    <section className="contact">
      <PageHeader
        title="Mes compétences"
        description="Quels outils je maîtrise ?"
      />
      <div>
        <div className="my-6 animate-jump-in">
          <p className="text-white text-3xl text-center">FRONT</p>
          <div className="skills grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
            {frontSkills.map((skill) => (
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="my-6 animate-jump-in">
          <p className="text-white text-3xl text-center">BACK</p>
          <div className="skills grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
            {backSkills.map((skill) => (
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="my-6 animate-jump-in">
          <p className="text-white text-3xl text-center">UX / UI</p>
          <div className="skills grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
            {designSkills.map((skill) => (
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Experience;