import React from "react";

//components
import UserSvg from "../../Assets/3Users.svg";
import LocationSvg from "../../Assets/Location.svg";
import SafeSvg from "../../Assets/ShieldDone.svg";
import TimeSvg from "../../Assets/TimeCircle.svg";

//styled
import {
  WhySessionsContainer,
  WhySessionsContainerHalf,
  WhySessionsContainerHalfDivider,
  WhyDividerContent,
  WhyImageWraper,
} from "./WhyStyle";
import {
  SessionDescription,
  SessionHeader,
  Sessionsrate,
  SessionsNametwo,
  SessionName,
  SessionsTitle,
  TestimonialSessionsContainerDes,
  TestimonialSessionsContainer,
  TestimonialSessionsContainerFirst,
  TestimonialSessionsContainerImg,
} from "../Testimonial/TestimonialStyle";
import { ButtonStyle } from "../Button/LinkStyle";

const WhySection = () => {
  return (
    <WhySessionsContainer>
      <WhySessionsContainerHalf>
        <SessionsTitle>OUR BENEFITS</SessionsTitle>
        <SessionHeader>Why should you choose us?</SessionHeader>
        <SessionDescription>
          We have been trusted since 2018. We have cleanned over 10,000 houses,
          offices and many custormers are satisfied with our work. Our are
          dedicated to make you satisfied with the service provided.{" "}
        </SessionDescription>
        <ButtonStyle primarybg mobilesize>
          Get a Quote{" "}
        </ButtonStyle>
      </WhySessionsContainerHalf>
      <WhySessionsContainerHalf>
        <WhySessionsContainerHalfDivider>
          <WhyDividerContent>
            <WhyImageWraper>
              <img src={TimeSvg} alt="time clock" />
            </WhyImageWraper>
            <SessionName>Fast cleaning process</SessionName>
          </WhyDividerContent>
          <WhyDividerContent>
            <WhyImageWraper>
              {" "}
              <img src={UserSvg} alt="customers" />
            </WhyImageWraper>
            <SessionName>A lot of Satisfied customers </SessionName>
          </WhyDividerContent>
        </WhySessionsContainerHalfDivider>
        <WhySessionsContainerHalfDivider>
          <WhyDividerContent>
            <WhyImageWraper>
              {" "}
              <img src={LocationSvg} alt="location" />
            </WhyImageWraper>
            <SessionName>Location in Westbrook, Maine</SessionName>
          </WhyDividerContent>
          <WhyDividerContent>
            <WhyImageWraper>
              {" "}
              <img src={SafeSvg} alt="secure" />
            </WhyImageWraper>
            <SessionName>Number one security</SessionName>
          </WhyDividerContent>
        </WhySessionsContainerHalfDivider>
      </WhySessionsContainerHalf>
    </WhySessionsContainer>
  );
};

export default WhySection;
