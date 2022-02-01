import React from "react";

//components
import HeroPicture from "../../Assets/Group8h.png"

//styled
import { IntroSessionsContainer,IntroSessionsHalfContainer,IntoHeader,IntoButtonContainer,IntoDescription} from "./IntroStyle";
import { ButtonStyle } from "../Button/LinkStyle";


const IntroSection = () => {
  return (
    <IntroSessionsContainer>
        <IntroSessionsHalfContainer>
            <IntoHeader>
            Clean Home. Professional Service. Fair Price
            </IntoHeader>
            <IntoDescription>
            We are a certified company. We Provide the best cleaning service for you and company.
            </IntoDescription>
            <IntoButtonContainer>
            <ButtonStyle whitebg >Get a Quote </ButtonStyle>
            <ButtonStyle linkmarginleft servicebutton><a href="tel:1-207-409-5286">📞 (207) 409-5286</a> </ButtonStyle>
            </IntoButtonContainer>
        </IntroSessionsHalfContainer>
        <IntroSessionsHalfContainer>
        <img src={HeroPicture} alt="cleaning service"/>
        </IntroSessionsHalfContainer>
    </IntroSessionsContainer>
  );
};

export default IntroSection;