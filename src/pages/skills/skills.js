import React from "react";
import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import SkillCard from "../../components/SkillCard";
import LineIcon from "lineicons-react";
import { motion } from "framer-motion";

const Experience = () => {
  const frontSkills = [
    {
      title: "HTML",
      icon: <LineIcon name="html5" />,
      color: "#E34F26",
    },
    {
      title: "CSS",
      icon: <LineIcon name="css3" />,
      color: "#1572B6",
    },
    {
      title: "Javascript",
      icon: <LineIcon name="javascript" />,
      color: "#F7DF1E",
    },
    {
      title: "React",
      icon: <LineIcon name="react" />,
      color: "#61DAFB",
    },
  ];

  const backSkills = [
    {
      title: "PHP",
      icon: <LineIcon name="php" />,
      color: "#999dd5",
    },
    {
      title: "GraphQL",
      icon: <LineIcon name="graph" />,
      color: "#E10098",
    },
    {
      title: "MySQL",
      icon: <LineIcon name="mysql" />,
      color: "#4479A1",
    },
    {
      title: "Node.js",
      icon: <LineIcon name="nodejs-alt" />,
      color: "#339933",
    },
  ];

  const designSkills = [
    {
      title: "Photoshop",
      icon: <LineIcon name="camera" />,
      color: "#31A8FF",
    },
    {
      title: "Illustrator",
      icon: <LineIcon name="pencil" />,
      color: "#FF9A00",
    },
    {
      title: "Figma",
      icon: <LineIcon name="figma" />,
      color: "#F24E1E",
    },
    {
      title: "Canva",
      icon: <LineIcon name="laptop-phone" />,
      color: "#00C4CC",
    },
  ];

  return (
    <section className="contact">
      <PageHeader
        title="Mes compétences"
        description="Quels outils je maîtrise ?"
      />

      <motion.div
        initial={{ x: "-2vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <p className="text-white text-3xl">FRONT</p>
      </motion.div>

      <motion.div
        initial={{ x: "-2vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="my-6">
        <div className="skills grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 my-4">
          {frontSkills.map((skill) => (
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "-2vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <p className="text-white text-3xl">BACK</p>
      </motion.div>

      <motion.div
        initial={{ x: "-2vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="my-6">
        <div className="skills grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 my-4">
          {backSkills.map((skill) => (
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "-2vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <p className="text-white text-3xl">UX / UI</p>
      </motion.div>

      <motion.div
        initial={{ x: "-2vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="my-6">
        <div className="skills grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 my-4">
            {designSkills.map((skill) => (
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </motion.div>
      <SocialIcons />
    </section>
  );
};

export default Experience;
