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
    const formData = useRef()
    const init = {
        name: '',
        email: '',
        service: '',
        message: ''
    }
    const [sendMsg, setSendMsg] = useState(false);
    const [form, setForm] = useState(init)

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form);
        emailjs.sendForm('service_n8hfhss', 'template_ekcnicd', formData.current, 'user_JcaUqMMS64g6ZnvCP6eC3')
        .then((result) => {
            setSendMsg(true);
            setForm(init)
            //console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
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
          <form ref={formData} onSubmit={sendEmail}>
            <ContactSectionFormContent>
              <ContactSectionInputWrapper>
                <label>Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name here"
                  required
                  className="name-input"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                />
                <label>Email</label>
                <input
                  type="email"
                  name="client_email"
                  placeholder="Enter your email here"
                  required
                  className="name-input"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                />

                <div className="selectdiv">
                <label for="services">What service would you like to get a quote for:</label>
                <select name="request_service" id="services" onChange={e => setForm({...form, service: e.target.value})} >
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
                </div>
              </ContactSectionInputWrapper>
              <ContactSectionInputWrapper formmargin>
                <label className="marg-label">Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your message here"
                  required
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
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