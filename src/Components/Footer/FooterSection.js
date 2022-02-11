import React from "react";

//components


//styled
import { FooterSectionWrapper,FooterHalfWrapper,FooterHeader,FooterDes} from "./FooterStyle";



const IntroSection = () => {
  return (
    <FooterSectionWrapper>
        <FooterHalfWrapper>
            <FooterHeader>Contact Us</FooterHeader>
            <FooterDes>📍 FKLCLEANINGSERVICE <br/>199 Forest St, Westbrook, ME 04092</FooterDes>
            <FooterDes>📞 (207) 409-5286</FooterDes>
            <FooterDes>📧 fklcleaningservice@gmail.com</FooterDes>
            <FooterDes>Follow us on facebook: <a href="https://www.facebook.com/FKL-Cleaning-Services-103027622311539" className="sociallink" target="_blank" rel="noopener noreferrer">@FKL Cleaning Service and Sells LLC</a></FooterDes>
        </FooterHalfWrapper>
        <FooterHalfWrapper>
            <FooterHeader>Our Services</FooterHeader>
            <FooterDes>⭐ Janitorial Service</FooterDes>
            <FooterDes>⭐ Carpet Cleaning</FooterDes>
            <FooterDes>⭐ Disinfecting Surfaces</FooterDes>
            <FooterDes>⭐ Residential Cleaning</FooterDes>
            <FooterDes>⭐ Dishwashing</FooterDes>
            <FooterDes>⭐ Move In / Move Out Cleaning</FooterDes>
            <FooterDes>⭐ Airbnb Cleaning</FooterDes>
            <FooterDes>⭐ Floor Care</FooterDes>
            <FooterDes>⭐ Covid-19 Disinfection</FooterDes>
            <FooterDes>⭐ Commercial Cleaning</FooterDes>
        </FooterHalfWrapper>
    </FooterSectionWrapper>
  );
};

export default IntroSection;