import React from "react";
import {
  Footer,
  Header,
  HomeSection,
  InfoSection,
  ProjectsSection,
  ReposSection,
  SkillsSection,
} from "../index";
import ContactForm from "../contact-form/ContactForm";
const Layout = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <InfoSection />
      <ProjectsSection />
      <ReposSection />
      <SkillsSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Layout;
