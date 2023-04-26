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
        <i className="fa-brands fa-github" aria-hidden="true" title="Mon Github"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/N95_Ryan">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Mon Twitter"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/ryan-pina-silasse/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Mon LinkedIn"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
