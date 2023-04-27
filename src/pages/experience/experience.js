import React from 'react';
import PageHeader from '../../components/PageHeader';
import SocialIcons from '../../components/SocialIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

const Experience = () => {
  const skills = [
    { icon: <FontAwesomeIcon icon={faHtml5} />, color: 'red', percentage: 80 },
    { icon: <FontAwesomeIcon icon={faCss3} />, color: 'blue', percentage: 80 },
    { icon: <FontAwesomeIcon icon={faJs} />, color: 'yellow', percentage: 65 },
  ];

  const SkillCard = ({ icon, color, percentage }) => (
    <div className="skill-card">
      <div className="skill-icon" style={{ color: color }}>
        {icon}
      </div>
      <div className="skill-percentage">
        {percentage}%
      </div>
    </div>
  );

  return (
    <section className="contact">
      <PageHeader title="Mon expérience" description="Découvez mon parcours" />
      <div className="skills grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} color={skill.color} percentage={skill.percentage} />
        ))}
      </div>
      <SocialIcons />
    </section>
  );
};

export default Experience;
