import LineIcon from "lineicons-react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  SiNextdotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoGoLang } from "react-icons/bi";

function skillsDetails() {

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
    icon: <i class="lni lni-javascript"></i>,
    color: "#F7DF1E",
  },
  {
    title: "Typecript",
    icon: <i class="lni lni-typescript"></i>,
    color: "#007acc"
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

  {
    title: "Booststrap",
    icon: <SiBootstrap />,
    color: "#7952B3",
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

return { frontSkills, backSkills, designSkills };
}

export default skillsDetails