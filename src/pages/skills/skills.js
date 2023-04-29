import React from 'react';
import PageHeader from '../../components/PageHeader';
import SocialIcons from '../../components/SocialIcons';
import SkillCard from '../../components/SkillCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faPhp, faNode} from '@fortawesome/free-brands-svg-icons';

const Experience = () => {
  const frontSkills = [
    { title: "HTML" ,  icon: <FontAwesomeIcon icon={faHtml5} />, color: '#ee6727', percentage: 80 },
    { title: "CSS" , icon: <FontAwesomeIcon icon={faCss3} />, color: '#009aea', percentage: 80 },
    { title: "Javascript", icon: <FontAwesomeIcon icon={faJs} />, color: '#ffca3e', percentage: 65 },
    { title: "React" ,icon: <FontAwesomeIcon icon={faReact} />, color: '#61dafb', percentage: 60 },
  ];

  const backSkills = [
    { title: "PHP" ,  icon: <FontAwesomeIcon icon={faPhp} />, color: '#999dd5', percentage: 50 },
    { title: "Node.js" ,icon: <FontAwesomeIcon icon={faNode} />, color: '#00b33d', percentage: 60 },
  ];

  // const designSkills = [
  //   { title: "Adobe Photoshop" ,  icon: <FontAwesomeIcon icon={faHtml5} />, color: '#ee6727', percentage: 80 },
  //   { title: "Adobe Illustrator" , icon: <FontAwesomeIcon icon={faCss3} />, color: '#009aea', percentage: 80 },
  //   { title: "Figma", icon: <FontAwesomeIcon icon={faJs} />, color: '#ffca3e', percentage: 65 },
  //   { title: "Canva" ,icon: <FontAwesomeIcon icon={faReact} />, color: '#61dafb', percentage: 60 },
  // ];



  return (
    <section className="contact">
      <PageHeader title="Mes compétences" description="De quoi suis-je capable ?" />

        <p className="text-white text-3xl">FRONT</p>
        <div>
            <div className="skills grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4">
              {frontSkills.map((skill, index) => (
                <SkillCard key={index} title={skill.title} icon={skill.icon} color={skill.color} percentage={skill.percentage} />
              ))}
            </div>
      </div>
      <p className="text-white text-3xl">BACK</p>
        <div>
            <div className="skills grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4">
              {backSkills.map((skill, index) => (
                <SkillCard key={index} title={skill.title} icon={skill.icon} color={skill.color} percentage={skill.percentage} />
              ))}
            </div>
        </div>
      <SocialIcons />
    </section>
  );
};

export default Experience;
