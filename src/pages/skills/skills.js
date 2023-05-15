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
      color: "#ee6727",
    },
    {
      title: "CSS",
      icon: <LineIcon name="css3" />,
      color: "#009aea",
    },
    {
      title: "Javascript",
      icon: <LineIcon name="javascript" />,
      color: "#ffca3e",
    },
    {
      title: "React",
      icon: <LineIcon name="react" />,
      color: "#61dafb",
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
      color: "#e535ab",
    },
    {
      title: "MySQL",
      icon: <LineIcon name="mysql" />,
      color: "#db7533",
    },
    {
      title: "Node.js",
      icon: <LineIcon name="nodejs-alt" />,
      color: "#00b33d",
    },
  ];

  const designSkills = [
    {
      title: "Photoshop",
      icon: <LineIcon name="camera" />,
      color: "#55a3d8",
    },
    {
      title: "Illustrator",
      icon: <LineIcon name="pencil" />,
      color: "#f6991b",
    },
    {
      title: "Figma",
      icon: <LineIcon name="figma" />,
      color: "#a259ff",
    },
    {
      title: "Canva",
      icon: <LineIcon name="laptop-phone" />,
      color: "#00c4cc",
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
        <p className="text-white text-3xl">DESIGN</p>
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
