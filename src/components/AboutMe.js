import aboutMeImg from "../images/photo.jpg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/RYAN-CV.pdf";
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
              Je m'appelle Ryan, et je suis un développeur web basé en Île-de-France.<br /> <br/>
              J'ai développé une passion pour la création en concevant et en produisant différents projets, comme par exemple du dessin ou du montage vidéo. <br/> <br/>
              En conséquence, j'ai orienté mon parcours vers l'informatique, et plus particulièrement vers le développement web. <br/> <br/>
              Aujourd'hui, je suis en alternance tout en préparant un bachelor dans ce domaine.
            </p>

            <div className="infoContainer">
            <h4>Mes coordonnées</h4>

              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Nom :</span>
                  <p>Ryan Pina-silasse</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email :</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Adresse :</span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Statut :</span>
                  <p>Étudiant en développement web</p>
                </div>
              </div>
            </div>
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
