import React from 'react';
import PageHeader from '../../components/PageHeader';
import SocialIcons from '../../components/SocialIcons';

const Experience = ({ title, subtitle, description }) => {
    return (
        <section className="contact">
        <PageHeader title="Mon expérience" description="Découvez mon parcours" />
        <SocialIcons />
      </section>
  
     );
};

export default Experience;
