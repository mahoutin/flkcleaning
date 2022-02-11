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
            <FooterDes>Follow us on facebook: <a href="https://www.facebook.com/FKL-Cleaning-Service-and-Sells-LLC-110417934891110/photos/?ref=page_internal." className="sociallink">@FKL Cleaning Service and Sells LLC</a></FooterDes>
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