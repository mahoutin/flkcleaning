import React from "react";

//components
import AboutSection from "./AboutSection";

//styled
import { AboutContainer } from "./AboutStyle";


const About= () => {
  return (
    <AboutContainer  id="about">
        <AboutSection/>
    </AboutContainer>
  );
};

export default About;