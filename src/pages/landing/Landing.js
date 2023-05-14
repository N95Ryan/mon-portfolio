import React from "react";
import SocialIcons from "../../components/SocialIcons";
import Typed from "typed.js";

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
    fontWeight: "700",
    marginTop: "-100px",
    paddingBottom: "28px",
  },
};

const Landing = ({ name }) => {
  const AutoType = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(AutoType.current, {
      strings: [
        "Développeur web",
        "Étudiant en informatique",
        "Amateur de pop culture",
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
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="text-3xl text-thin text-purple-400">
          <span ref={AutoType} />
        </p>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;