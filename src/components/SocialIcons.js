const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/N95Ryan">
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Github"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://vercel.com/"
      >
        <i
          className="fa-solid fa-code"
          aria-hidden="true"
          title="Vercel"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://stackoverflow.com/users/15477127/ryan"
      >
        <i
          className="fa-brands fa-stack-overflow"
          aria-hidden="true"
          title="Stack Overflow"
        ></i>
      </a>

    </div>
  );
};

export default SocialIcons;
