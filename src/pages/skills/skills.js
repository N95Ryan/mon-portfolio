import React from "react";
import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import SkillCard from "../../components/SkillCard";
import LineIcon from "lineicons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  SiNextdotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiTailwindcss,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoGoLang } from "react-icons/bi";
const Experience = () => {
  const frontSkills = [
    {
      title: "HTML",
      icon: <FontAwesomeIcon icon={faHtml5} />,
      color: "#E34F26",
    },
    {
      title: "CSS",
      icon: <FontAwesomeIcon icon={faCss3Alt} />,
      color: "#1572B6",
    },
    {
      title: "Javascript",
      icon: <FontAwesomeIcon icon={faJs} />,
      color: "#F7DF1E",
    },
    {
      title: "React",
      icon: <FontAwesomeIcon icon={faReact} />,
      color: "#61DAFB",
    },

    {
      title: "Next",
      icon: <SiNextdotjs />,
      color: "#fff",
    },

    {
      title: "Tailwind",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
    },
  ];

  const backSkills = [
    {
      title: "GraphQL",
      icon: <GrGraphQl />,
      color: "#E10098",
    },
    {
      title: "Node.js",
      icon: <LineIcon name="nodejs-alt" />,
      color: "#339933",
    },
    {
      title: "MySQL",
      icon: <LineIcon name="mysql" />,
      color: "#4479A1",
    },
    {
      title: "GO",
      icon: <BiLogoGoLang />,
      color: "#00ADD8",
    },
  ];

  const designSkills = [
    {
      title: "Photoshop",
      icon: <SiAdobephotoshop />,
      color: "#31A8FF",
    },
    {
      title: "Illustrator",
      icon: <SiAdobeillustrator />,
      color: "#FF9A00",
    },
    {
      title: "Figma",
      icon: <LineIcon name="figma" />,
      color: "#F24E1E",
    },
    {
      title: "Canva",
      icon: <SiCanva />,
      color: "#00C4CC",
    },
  ];

  return (
    <section className="contact">
      <PageHeader
        title="Mes compétences"
        description="Quels outils je maîtrise ?"
      />
      <div>
        <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center">
          FRONT
        </p>
          <div className="skills grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4">
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
        <p className="text-white text-3xl text-center">
          BACK
        </p>
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
        <p className="text-white text-3xl text-center">
          UX / UI
        </p>
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
