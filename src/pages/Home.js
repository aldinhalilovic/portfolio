import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import Work from "../components/Work/Work";
function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </>
  );
}

export default Home;
