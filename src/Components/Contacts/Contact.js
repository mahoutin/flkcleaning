import React from "react";

//components
import ContactContent from "./ContactContent"

//styled
import { ContactSectionContainer } from "./ContactStyle";



const ContactUs = () => {
  return (
    <ContactSectionContainer id="contact">
      <ContactContent/>
    </ContactSectionContainer>
  );
};

export default ContactUs;