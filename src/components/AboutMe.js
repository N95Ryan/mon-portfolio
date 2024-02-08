import aboutMeImg from "../images/photo.jpg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/CV.pdf";
import Hobbies from "./Hobbies";

const AboutMe = ({ name, email, location }) => {
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
        <div
          className="personalImage col-12 col-lg-4 animate-jump-in"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={aboutMeImg} alt={name} />
        </div>
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
              Ryan, 23 ans, développeur web front basé en Île-de-France. <br />{" "}
              <br />
              Ma passion pour la création et le plaisir de voir mes idées
              prendre vie m'ont toujours animé, que ce soit à travers le dessin,
              le montage photo ou la réalisation de vidéos. <br /> <br />
              C'est pourquoi j'ai choisi de m'orienter vers le domaine de
              l'informatique, plus précisément dans le développement web.
              <br /> <br />
              Actuellement, je suis en dernière année d'un bachelor en
              conception web et mobile, poursuivant ainsi mon parcours
              académique dans ce domaine qui me passionne.{" "}
            </p>

            <div className="infoContainer" />

            <Hobbies />
            <div className="buttonContainer">
              <button
                className="btn downloadCV"
                onClick={handleDownload}
                disabled={downloading}
              >
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
