import React from "react";

//components
import Janitory from "../../Assets/janitori.jpeg"
import green from "../../Assets/green.jpeg"
import carpet from "../../Assets/carpet.jpg"
import disinfect from "../../Assets/desinfect.jpeg"
import Airbnb from "../../Assets/aibnb.jpeg"
import commercial from "../../Assets/commercial.jpeg"
import covid from "../../Assets/covid.jpeg"
import dishwash from "../../Assets/dishwash.jpeg"
import floor from "../../Assets/floor.jpeg"
import mouveout from "../../Assets/mouveout.jpeg"
import residence from "../../Assets/residence.png"
import { HashLink as Link } from "react-router-hash-link";

//styled
import {
  ServiceSessionsContainer,
  ServiceWrapperImage,
  ServiceWrapper,
  ServiceWrapperItem,
  ServiceWrapperDes,
} from "./ServiceStyle";
import {
  SessionHeader,
  SessionName,
  SessionsTitle,
} from "../Testimonial/TestimonialStyle";


const WhySection = () => {
  return (
    <ServiceSessionsContainer>
      <SessionsTitle>OUR SERVICES</SessionsTitle>
      <SessionHeader>We provide the following services</SessionHeader>
      <ServiceWrapper>
        <ServiceWrapperItem>
          <SessionName>Janitorial Service</SessionName>
          <ServiceWrapperImage>
              <img src={Janitory} alt="janitorial service"/>
          </ServiceWrapperImage>
          <ServiceWrapperDes>
            We're ready to provide a regular cleaning tasks that keep your
            business looking great on a regular basis. Whether you need nightly
            janitorial services or only need cleanings a few times a month, our
            trained cleaners can work with you.
          </ServiceWrapperDes>
        </ServiceWrapperItem>
        <ServiceWrapperItem>
          <SessionName>Green Cleaning</SessionName>
          <ServiceWrapperImage>
          <img src={green} alt="green service"/>
          </ServiceWrapperImage>
          <ServiceWrapperDes>
            Our friendly, professional Green Home cleaning service will leave
            your home looking, smelling, and feeling bright and fresh after
            every visit with non-toxic, super-effective cleaning supplies work.
          </ServiceWrapperDes>
        </ServiceWrapperItem>
        <ServiceWrapperItem>
          <SessionName>Carpet Cleaning</SessionName>
          <ServiceWrapperImage>
          <img src={carpet} alt="green service"/>
          </ServiceWrapperImage>
          <ServiceWrapperDes>
            We take pride and satisfaction in cleaning your carpets as good as
            we would want our carpet cleaning done in our home. We wear booties,
            do not smoke, and are polite. We believe that your home is your
            castle and you should be treated as such.
          </ServiceWrapperDes>
        </ServiceWrapperItem>
        <ServiceWrapperItem>
          <SessionName>Disinfecting Surfaces</SessionName>
          <ServiceWrapperImage>
          <img src={disinfect} alt="green service"/>
          </ServiceWrapperImage>
          <ServiceWrapperDes>
            Whether the place requires disinfecting, sanitizing or deep cleaning
            such as a hospital, school, daycare, office, restaurant, gym or
            other high-traffic space, our professional disinfecting services are
            ideal for creating a safer environment for your customers and
            employees.
          </ServiceWrapperDes>
        </ServiceWrapperItem>
        <ServiceWrapperItem>
          <SessionName>Residential Cleaning</SessionName>
          <ServiceWrapperImage><img src={residence} alt="green service"/></ServiceWrapperImage>
          <ServiceWrapperDes>
            Looking for a bit of extra help when it comes to cleaning up your
            home. We pride ourselves on our excellent performance and strong
            customer service. Give yourself a break with the house cleaning
            chores and let us take over for you.
          </ServiceWrapperDes>
        </ServiceWrapperItem>
        <ServiceWrapperItem>
          <SessionName>Dishwashing</SessionName>
          <ServiceWrapperImage><img src={dishwash} alt="green service"/></ServiceWrapperImage>
          <ServiceWrapperDes>
            In case you have a large amount of dishes that that you don't want
            to clean yourself and could contribute to a hindrance in the
            development of your business or your home. Do not hesitate to
            contact us. Our trained team'll perform the task successfully with a
            reasonable price.
          </ServiceWrapperDes>
        </ServiceWrapperItem>
        <ServiceWrapperItem>
          <SessionName>Move In / Move Out Cleaning</SessionName>
          <ServiceWrapperImage><img src={mouveout} alt="green service"/></ServiceWrapperImage>
          <ServiceWrapperDes>
            Moving can be an incredibly stressful and busy time for any
            individual or family. Whether you are a homeowner or a tenant, it is
            important to leave behind a clean space for the inhabitants. We
            provide a good , professionalism task and care.
          </ServiceWrapperDes>
        </ServiceWrapperItem>
        <ServiceWrapperItem>
          <SessionName>Airbnb Cleaning</SessionName>
          <ServiceWrapperImage><img src={Airbnb} alt="green service"/></ServiceWrapperImage>
          <ServiceWrapperDes>
            Our trained team created a system to uphold cleaning standards in
            response to COVID, and recognize the vacation rental owners that are
            going above and beyond to provide clean and safe vacation rentals
            for their guests.
          </ServiceWrapperDes>
        </ServiceWrapperItem>
        <ServiceWrapperItem>
          <SessionName>Floor Care</SessionName>
          <ServiceWrapperImage><img src={floor} alt="green service"/></ServiceWrapperImage>
          <ServiceWrapperDes>
            Do you have floors that are prone to getting dirty? We can make them
            shine again! Whether your company has carpeted floors or an
            industrial concrete finish, we have the expertise required to care
            for them and make sure they're protected and looking their best.{" "}
          </ServiceWrapperDes>
        </ServiceWrapperItem>
        <ServiceWrapperItem>
          <SessionName>Covid-19 Disinfection</SessionName>
          <ServiceWrapperImage><img src={covid} alt="green service"/></ServiceWrapperImage>
          <ServiceWrapperDes>
            Coronavirus (COVID-19) is affecting residences and businesses
            locally and we are here to support your efforts in keeping them
            disinfected and safe for your employees, customers, and families. We
            provide multiple services to keep your household or business
            disinfected, decontaminated, and sanitized.{" "}
          </ServiceWrapperDes>
        </ServiceWrapperItem>
        <ServiceWrapperItem>
          <SessionName>Commercial Cleaning</SessionName>
          <ServiceWrapperImage><img src={commercial} alt="green service"/></ServiceWrapperImage>
          <ServiceWrapperDes>
            Our mission is to keep your business clean so you can focus on
            running it, your employees have a great work environment, and your
            customers have a spotless experience. You and your employees already
            have a job-we'll make sure cleaning doesn't have to be part of it.{" "}
          </ServiceWrapperDes>
        </ServiceWrapperItem>
      </ServiceWrapper>
      <Link to="#contact" className="quotelinks quotecollinks quote quotemargin">
          Get a quote
        </Link>    </ServiceSessionsContainer>
  );
};

export default WhySection;
