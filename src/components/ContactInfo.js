import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ContactInfo = ({ name, email, location }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <motion.div
      className="contactInfo"
      ref={ref}
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h4 className="contentTitle">Mes informations</h4>
      <ul className="listInfo">
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-user"></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Nom</h6>
              <span className="infoValue">{name}</span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-location-pin "></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Adresse</h6>
              <span className="infoValue">{location}</span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-envelope "></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Email</h6>
              <span className="infoValue">
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </div>
          </div>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-phone-volume"></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Numéro</h6>
              <span>06 16 07 40 54</span>
            </div>
          </div>

        </li>
      </ul>
    </motion.div>
  );
};

export default ContactInfo;
