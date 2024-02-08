import aboutMeImg from "../images/photo.jpg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/CV.pdf";
import Hobbies from "./Hobbies";


const AboutMe = ({ name, email, location}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);
  
  const handleDownload = () => {
    setDownloading(true);
    window.open(resume, "_blank");
    const link = document.createElement("a");
    link.href = resume;
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
  };
  
  return (
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={aboutMeImg} alt={name} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>Enchanté !</h4>
            <h5 className="font-bold">Je me présente :</h5>
            <p className="text-white">
              Ryan, 23 ans, développeur web front résidant en Île-de-France.<br /> <br/>
              J'ai toujours aimé créer et voir ce que je crée prendre forme. Que ce soit en dessinant ou en réalisant des vidéos.<br/>
              En conséquence, j'ai orienté mon parcours vers l'informatique et plus particulièrement vers le développement web. <br/> <br/>
              À l'heure actuelle, je suis en dernière année d'un bachelor en conception web et mobile.	
            </p>

            <div className="infoContainer" />

            <Hobbies />
            <div className="buttonContainer">
              <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Téléchargement..." : "Visionnez mon CV"}
              </button>
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
