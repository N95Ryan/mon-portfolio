import { SiGithub, SiVercel, SiStackoverflow, SiLinkedin } from "react-icons/si";

const SocialIcons = () => {
  const styles = {
    icon: {
      // textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

return (
  <div className="socialIcons" style={styles.socialIcons}>
    <div className="flex items-center space-x-4">
      <a className="icon" href="https://github.com/N95Ryan">
        <SiGithub className="text-2xl" title="Github" />
      </a>
      <a className="icon" href="https://vercel.com/">
        <SiVercel className="text-2xl" title="Vercel" />
      </a>
      <a className="icon" href="https://www.linkedin.com/in/ryan-pina-silasse/">
        <SiLinkedin className="text-2xl" title="LinkedIn" />
      </a>
      <a className="icon" href="https://stackoverflow.com/users/15477127/ryan">
        <SiStackoverflow className="text-2xl" title="Stack Overflow" />
      </a>
    </div>  
  </div>
  )};

export default SocialIcons;
