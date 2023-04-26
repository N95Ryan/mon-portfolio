import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, brand, email, availability }) => {
  return (
    <section className="about">
      <PageHeader title="Qui suis-je ?" description="Faisons connaissance !" />
      <AboutMe name={name} location={location} brand={brand} email={email} status={availability} />
    </section>
  );
};

export default About;
