import React from 'react';
import PageHeader from '../../components/PageHeader';
import SocialIcons from '../../components/SocialIcons';
import SkillCard from '../../components/SkillCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faPhp, faNode, faFigma, fa500px } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Experience = () => {
    const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const frontSkills = [
    { title: "HTML" ,  icon: <FontAwesomeIcon icon={faHtml5} />, color: '#ee6727', percentage: 80 },
    { title: "CSS" , icon: <FontAwesomeIcon icon={faCss3} />, color: '#009aea', percentage: 80 },
    { title: "Javascript", icon: <FontAwesomeIcon icon={faJs} />, color: '#ffca3e', percentage: 70 },
    { title: "React" ,icon: <FontAwesomeIcon icon={faReact} />, color: '#61dafb', percentage: 65 },
  ];

  const backSkills = [
    { title: "PHP", icon: <FontAwesomeIcon icon={faPhp} />, color: '#999dd5', percentage: 60 },
    { title: "GraphQL" ,icon: <FontAwesomeIcon icon={fa500px} />, color: '#e535ab', percentage: 60 },
    { title: "SQL" ,icon: <FontAwesomeIcon icon={fa500px} />, color: '#db7533', percentage: 60 },
    { title: "Node.js" ,icon: <FontAwesomeIcon icon={faNode} />, color: '#00b33d', percentage: 50 },
  ];

  const designSkills = [
    { title: "Photoshop" ,  icon: <FontAwesomeIcon icon={fa500px} />, color: '#55a3d8', percentage: 80 },
    { title: "Illustrator" , icon: <FontAwesomeIcon icon={faFigma} />, color: '#f6991b', percentage: 65 },
    { title: "Figma", icon: <FontAwesomeIcon icon={faFigma} />, color: '#a259ff', percentage: 65 },
    { title: "Canva" ,icon: <FontAwesomeIcon icon={fa500px} />, color: '#00c4cc', percentage: 70 },
  ];

  return (
    <section className="contact">
    <PageHeader title="Mes compétences" description="De quoi suis-je capable ?" />

      <p className="text-white text-3xl">FRONT</p>
      <motion.div
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
      <div className='my-6'>
          <div className="skills grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 my-4">
            {frontSkills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} icon={skill.icon} color={skill.color} percentage={skill.percentage} />
            ))}
          </div>
        </div>
        </motion.div>
      <p className="text-white text-3xl">BACK</p>
      <motion.div
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
    <div className='my-6'>
          <div className="skills grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 my-4">
            {backSkills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} icon={skill.icon} color={skill.color} percentage={skill.percentage} />
            ))}
      </div>  
        </div>
        </motion.div>
      <p className="text-white text-3xl">DESIGN</p>
      <motion.div
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
      <div className='my-6'>
          <div className="skills grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 my-4">
            {designSkills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} icon={skill.icon} color={skill.color} percentage={skill.percentage} />
            ))}
          </div>
        </div>
        </motion.div>

    <SocialIcons />
  </section>  );
};

export default Experience;
