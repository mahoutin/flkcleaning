import React from "react";

//components
import IntroSection from "./IntroSection";

//styled
import { IntroContainer } from "./IntroStyle";


const Intro = () => {
  return (
    <IntroContainer id="#homeintro">
        <IntroSection/>
    </IntroContainer>
  );
};

export default Intro;