import React from "react";

//components
import HeroPicture from "../../Assets/Group8h.png"
import { HashLink as Link } from "react-router-hash-link";

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
            We are a certified company. We Provide the best cleaning service for you and your company.
            </IntoDescription>
            <IntoButtonContainer>
            <Link to="#contact" className="quotelinks linkbutton">
                 Get a quote
          </Link>
            <ButtonStyle linkmarginleft servicebutton nopadding ><a href="tel:1-207-409-5286" className="phonecall">📞 (207) 409-5286</a> </ButtonStyle>
            </IntoButtonContainer>
        </IntroSessionsHalfContainer>
        <IntroSessionsHalfContainer>
        <img src={HeroPicture} alt="cleaning service"/>
        </IntroSessionsHalfContainer>
    </IntroSessionsContainer>
  );
};

export default IntroSection;