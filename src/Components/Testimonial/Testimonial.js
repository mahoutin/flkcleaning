import React from "react";

//components
import TestimonialSection from "./TestimonialSection"

//styled
import { TestimonialContainer } from "./TestimonialStyle";


const Testimonial = () => {
  return (
    <TestimonialContainer>
        <TestimonialSection/>
    </TestimonialContainer>
  );
};

export default Testimonial;