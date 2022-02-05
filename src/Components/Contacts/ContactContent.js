import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
//components
import { Button } from "rsuite";

//styled
import {
  ContactSectionContentWrapper,
  ContactSectionContentBottomWrapper,
  ContactSectionInputWrapper,
  ContactSectionFormContent,
  ContactSectionButtonWrapper,
  SectionHeader,
} from "./ContactStyle";

const ContactContent = () => {
  const form = useRef();
  const [sendMsg, setSendMsg] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "q0_gmail_service_id",
        "q0_contact_us_template",
        form.current,
        "user_7fcX0YN0dqD6XDDHMDheu"
      )
      .then(
        (result) => {
          setSendMsg(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log("The email has been sent!");
  };

  return (
    <ContactSectionContentWrapper>
      <SectionHeader>Get A Quick Quote</SectionHeader>
      <ContactSectionContentBottomWrapper>
        {sendMsg ? (
          <div className="send-confimation">
            <div className="send-confimation-message">
              <p>
                Your message has been sent. We will get back to you as soon as
                possible.
              </p>
            </div>

            <ContactSectionButtonWrapper>
              <Button
                type="button"
                onClick={() => setSendMsg(false)}
                appearance="primary"
              >
                Ok
              </Button>
            </ContactSectionButtonWrapper>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <ContactSectionFormContent>
              <ContactSectionInputWrapper>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name here"
                  required
                  className="name-input"
                />
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email here"
                  required
                  className="name-input"
                />
                <label for="services">What service would you like to get a quote for:</label>

                <select name="services" id="services">
                  <option value="Janitorial Service">Janitorial Service</option>
                  <option value="Green Cleaning">Green Cleaning</option>
                  <option value="Carpet Cleaning">Carpet Cleaning</option>
                  <option value="Disinfecting Surfaces">Disinfecting Surfaces</option>
                  <option value="Residential Cleaning">Residential Cleaning</option>
                  <option value="Dishwashing">Dishwashing</option>
                  <option value="Move In / Move Out Cleaning">Move In / Move Out Cleaning</option>
                  <option value="Airbnb Cleaning">Airbnb Cleaning</option>
                  <option value="Floor Care">Floor Care</option>
                  <option value="Covid-19 Disinfection">Covid-19 Disinfection</option>
                  <option value="Commercial Cleaning">Commercial Cleaning</option>
                
                </select>
              </ContactSectionInputWrapper>
              <ContactSectionInputWrapper formmargin>
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your message here"
                  required
                />
              </ContactSectionInputWrapper>
            </ContactSectionFormContent>
            <ContactSectionButtonWrapper>
              <Button type="submit" appearance="ghost" className="buttonsubmit">
                Submit
              </Button>
            </ContactSectionButtonWrapper>
          </form>
        )}
      </ContactSectionContentBottomWrapper>
    </ContactSectionContentWrapper>
  );
};

export default ContactContent;
