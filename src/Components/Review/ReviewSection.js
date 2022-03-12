import React from "react";

// icons
// import { AiTwotoneStar } from "react-icons/ai";

//components
import { HashLink as Link } from "react-router-hash-link";
import { Button, Rate } from "rsuite";

//styled
import {
  ReviewSessionsContainer,
  ReviewSessionsContainerNote,
  ReviewSessionsContaineNumber,
  ReviewBodyContainer,
  ReviewBodyWrapper,
  ReviewBodyDescription,
  ReviewBodyTitle,
  ReviewAddWraper,
  ReviewSessionsContainerHeader 
} from "./ReviewStyle";
import { WhySessionsContainerHalf } from "../WhySection/WhyStyle";
import { SessionHeader, SessionsTitle } from "../Testimonial/TestimonialStyle";
import { ContactSectionInputWrapper } from "../Contacts/ContactStyle";

const AboutSection = () => {
  return (
    <ReviewSessionsContainer>
      <WhySessionsContainerHalf>
        <ReviewSessionsContainerHeader>
        <SessionsTitle>REVIEWS</SessionsTitle>
        <SessionHeader>
          What customers say about us?
          <ReviewSessionsContainerNote>
            {" "}
            5.0
            <ReviewSessionsContaineNumber>
            <Rate defaultValue={5.0} allowHalf  readOnly size="xs" />
            </ReviewSessionsContaineNumber>
            <span>(123)</span>
          </ReviewSessionsContainerNote>
        </SessionHeader>
        </ReviewSessionsContainerHeader >
        <ReviewBodyContainer>
          <ReviewBodyWrapper>
            <ReviewBodyTitle>
              Ana mae <span>June 12</span>
            </ReviewBodyTitle>
            <ReviewSessionsContainerNote>
              {" "}
              4.0
              <ReviewSessionsContaineNumber>
              <Rate defaultValue={4.0} allowHalf readOnly size="xs" />
              </ReviewSessionsContaineNumber>
            </ReviewSessionsContainerNote>
            <ReviewBodyDescription>
              We havee been trusted since 2018. We have cleanned over 10,000
              houses, offices and many custormers are satisfied with our work.
              Our are dedicated to make you satisfied with the service provided.
            </ReviewBodyDescription>
          </ReviewBodyWrapper>
          <ReviewBodyWrapper>
            <ReviewBodyTitle>
              Ana mae <span>April 15</span>
            </ReviewBodyTitle>
            <ReviewSessionsContainerNote>
              {" "}
              5.0
              <ReviewSessionsContaineNumber>
              <Rate defaultValue={5.0} allowHalf readOnly size="xs" />
              </ReviewSessionsContaineNumber>
            </ReviewSessionsContainerNote>
            <ReviewBodyDescription>
              We havee been trusted since 2018. We have cleanned over 10,000
              houses, offices and many custormers are satisfied with our work.
              Our are dedicated to make you satisfied with the service provided.
            </ReviewBodyDescription>
          </ReviewBodyWrapper>
          <ReviewBodyWrapper>
            <ReviewBodyTitle>
              Ana mae <span>April 5</span>
            </ReviewBodyTitle>
            <ReviewSessionsContainerNote>
              {" "}
              5.0
              <ReviewSessionsContaineNumber>
              <Rate defaultValue={5.0} allowHalf readOnly size="xs" />
              </ReviewSessionsContaineNumber>
            </ReviewSessionsContainerNote>
            <ReviewBodyDescription>
              We havee been trusted since 2018. We have cleanned over 10,000
              houses, offices and many custormers are satisfied with our work.
              Our are dedicated to make you satisfied with the service provided.
            </ReviewBodyDescription>
          </ReviewBodyWrapper>
          <ReviewBodyWrapper>
            <ReviewBodyTitle>
              Ana mae <span>June 12</span>
            </ReviewBodyTitle>
            <ReviewSessionsContainerNote>
              {" "}
              3.0
              <ReviewSessionsContaineNumber>
              <Rate defaultValue={3.0} allowHalf  readOnly size="xs" />
              </ReviewSessionsContaineNumber>
            </ReviewSessionsContainerNote>
            <ReviewBodyDescription>
              We havee been trusted since 2018. We have cleanned over 10,000
              houses, offices and many custormers are satisfied with our work.
              Our are dedicated to make you satisfied with the service provided.
            </ReviewBodyDescription>
          </ReviewBodyWrapper>
          <ReviewBodyWrapper>
            <ReviewBodyTitle>
              Ana mae <span>June 12</span>
            </ReviewBodyTitle>
            <ReviewSessionsContainerNote>
              {" "}
              4.5
              <ReviewSessionsContaineNumber>
              <Rate defaultValue={4.5} allowHalf readOnly size="xs" />
              </ReviewSessionsContaineNumber>
            </ReviewSessionsContainerNote>
            <ReviewBodyDescription>
              We havee been trusted since 2018. We have cleanned over 10,000
              houses, offices and many custormers are satisfied with our work.
              Our are dedicated to make you satisfied with the service provided.
            </ReviewBodyDescription>
          </ReviewBodyWrapper>
        </ReviewBodyContainer>
      </WhySessionsContainerHalf>
      <WhySessionsContainerHalf>
        <ReviewAddWraper>
        <SessionHeader style={{fontSize:24}}>
        Let’s us know how we did
        </SessionHeader>
        <Rate defaultValue={2.5} allowHalf />
          <ContactSectionInputWrapper fitsize >
            <label style={{ color: "#000" }}>Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name here"
              required
              className="name-input"
            />
          </ContactSectionInputWrapper>
          <ContactSectionInputWrapper fitsize >
            <label className="marg-label" style={{ color: "#000" }}>
              Your review
            </label>
            <textarea
              name="message"
              placeholder="Enter your review here"
              required
            />
          </ContactSectionInputWrapper>
          <Button type="submit" appearance="ghost" className="buttonsubmit" style={{marginTop:20}}>
            Post your review
          </Button>
        </ReviewAddWraper>
      </WhySessionsContainerHalf>
    </ReviewSessionsContainer>
  );
};

export default AboutSection;
