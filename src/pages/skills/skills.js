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
      percentage: 80,
    },
    {
      title: "CSS",
      icon: <LineIcon name="css3" />,
      color: "#009aea",
      percentage: 80,
    },
    {
      title: "Javascript",
      icon: <LineIcon name="javascript" />,
      color: "#ffca3e",
      percentage: 70,
    },
    {
      title: "React",
      icon: <LineIcon name="react" />,
      color: "#61dafb",
      percentage: 65,
    },
  ];

  const backSkills = [
    {
      title: "PHP",
      icon: <LineIcon name="php" />,
      color: "#999dd5",
      percentage: 60,
    },
    {
      title: "GraphQL",
      icon: <LineIcon name="graph" />,
      color: "#e535ab",
      percentage: 60,
    },
    {
      title: "SQL",
      icon: <LineIcon name="mysql" />,
      color: "#db7533",
      percentage: 60,
    },
    {
      title: "Node.js",
      icon: <LineIcon name="nodejs-alt" />,
      color: "#00b33d",
      percentage: 50,
    },
  ];

  const designSkills = [
    {
      title: "Photoshop",
      icon: <LineIcon name="camera" />,
      color: "#55a3d8",
      percentage: 80,
    },
    {
      title: "Illustrator",
      icon: <LineIcon name="pencil" />,
      color: "#f6991b",
      percentage: 65,
    },
    {
      title: "Figma",
      icon: <LineIcon name="figma" />,
      color: "#a259ff",
      percentage: 65,
    },
    {
      title: "Canva",
      icon: <LineIcon name="laptop-phone" />,
      color: "#00c4cc",
      percentage: 70,
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
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "5vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <p className="text-white text-3xl">BACK</p>
      </motion.div>

      <motion.div
        initial={{ x: "5vw", opacity: 0 }}
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
                percentage={skill.percentage}
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
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {" "}
        <div className="my-6">
          <div className="skills grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 my-4">
            {designSkills.map((skill) => (
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                color={skill.color}
                percentage={skill.percentage}
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
