import React from "react";

//components
import ReviewSection from "./ReviewSection";

//styled
import { ReviewContainer } from "./ReviewStyle";


const Review= () => {
  return (
    <ReviewContainer   id="reviewus">
        <ReviewSection/>
    </ReviewContainer >
  );
};

export default Review;