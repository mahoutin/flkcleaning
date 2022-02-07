import React from "react";

//components
import w1 from "../../Assets/w1.jpeg";
import w2 from "../../Assets/w2.jpeg";
import w3 from "../../Assets/w3.jpeg";
import w4 from "../../Assets/w4.jpeg";
import { HashLink as Link } from "react-router-hash-link";

//styled
import {
  AboutSessionsContainer,
  WhySessionsContainerHalfDivider,
  AboutSessionDescription,
  AboutSessionDescriptionspan,
  WhyImageWraper,
} from "./AboutStyle";
import { WhySessionsContainerHalf } from "../WhySection/WhyStyle";
import { SessionHeader, SessionsTitle } from "../Testimonial/TestimonialStyle";

const AboutSection = () => {
  return (
    <AboutSessionsContainer>
      <WhySessionsContainerHalf>
        <SessionsTitle>ABOUT US</SessionsTitle>
        <SessionHeader>Who are we?</SessionHeader>
        <AboutSessionDescription>
          <AboutSessionDescriptionspan>
            FKL Cleaning Service and Sells LLC{" "}
          </AboutSessionDescriptionspan>{" "}
          provides Commercial/Residential Cleaning Services in Westbrook, ME,
          Portland, ME,South-Port,ME,Gorham,ME,Scarborough
          ,ME,Saco,ME,Biddeford,ME,Yarmouth,ME,Cumberland,ME, and Surrounding
          areas. We pride ourselves on providing professional customer care.
          Making our customers happy is our Happiness. Since opening our doors,
          we've been committed to providing service of the highest quality,
          paying particular attention to working efficiently while keeping the
          lines of communication with our clients clear and concise. Our mission
          is simple: to provide high-quality services in a timely manner. Our
          team caters to each project's specific needs to ensure excellence. We
          hope you'll find what you're looking for. For more information or
          general inquiries, feel free to get in touch today.
          <br />
          <AboutSessionDescriptionspan>
            Our Guarantee:
          </AboutSessionDescriptionspan>{" "}
          Expert quality every time. We don't consider a job completely executed
          unless there's happiness across our client's face.
        </AboutSessionDescription>
        <Link to="#contact" className="quotelinks quotecollinks quote">
          Get a quote
        </Link>
      </WhySessionsContainerHalf>
      <WhySessionsContainerHalf>
        <WhySessionsContainerHalfDivider>
          <WhyImageWraper>
            <img src={w1} alt="cleaning" />
          </WhyImageWraper>

          <WhyImageWraper>
            <img src={w2} alt="cleaning" />
          </WhyImageWraper>
        </WhySessionsContainerHalfDivider>
        <WhySessionsContainerHalfDivider>
          <WhyImageWraper>
            <img src={w3} alt="cleaning" />
          </WhyImageWraper>

          <WhyImageWraper>
            <img src={w4} alt="cleaning" />
          </WhyImageWraper>
        </WhySessionsContainerHalfDivider>
      </WhySessionsContainerHalf>
    </AboutSessionsContainer>
  );
};

export default AboutSection;
