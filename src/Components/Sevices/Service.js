import React from "react";

//components
import ServiceSection from "./ServiceSection"

//styled
import { ServiceContainer } from "./ServiceStyle";


const Service = () => {
  return (
    <ServiceContainer>
        <ServiceSection/>
    </ServiceContainer>
  );
};

export default Service;