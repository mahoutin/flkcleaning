import React from "react";

//components
import IntroSection from "./IntroSection";

//styled
import { IntroContainer } from "./IntroStyle";


const Intro = () => {
  return (
    <IntroContainer id="intro">
        <IntroSection/>
    </IntroContainer>
  );
};

export default Intro;