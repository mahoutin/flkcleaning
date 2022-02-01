import React from "react";

//components
import FooterSection from "./FooterSection"

//styled
import { FooterSectionContainer } from "./FooterStyle";



const Footers = () => {
  return (
    <FooterSectionContainer id="footer">
      <FooterSection/>
    </FooterSectionContainer>
  );
};

export default Footers;