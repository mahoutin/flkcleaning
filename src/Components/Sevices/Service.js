import React from "react";

//components
import ServiceSection from "./ServiceSection"

//styled
import { ServiceContainer } from "./ServiceStyle";


const Service = () => {
  return (
    <ServiceContainer id="ourserice">
        <ServiceSection/>
    </ServiceContainer>
  );
};

export default Service;