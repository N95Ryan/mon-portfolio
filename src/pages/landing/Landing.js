import React from "react";
import Typed from "typed.js";
import SocialIcons from "../../components/SocialIcons";

const styles = {
  landing: {
    height: "calc(100% - 93px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  
  textContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: "1px",
    textAlign: "center",
    zIndex: "1",
    color: "#fff",
    textShadow: "1px 1px 3px #000",
  },
  
  name: {
    color: "#fff",
    fontWeight: "600",
    marginTop: "-100px",
    paddingBottom: "28px",
  },
};

const Landing = ({ name }) => {
  const AutoType = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(AutoType.current, {
      strings: [
        "Étudiant en informatique",
        "Développeur web front-end",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="landing flex flex-col items-center justify-center" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name sm:text-lg" style={styles.name}>
          {name}
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="text-2xl text-thin text-purple-400">
          <span ref={AutoType} /> 
        </p>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;