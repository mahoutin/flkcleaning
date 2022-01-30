import React from "react";

//plugings
import "rsuite/dist/rsuite.min.css";
import { Container } from "rsuite";

//components
import NavBar from "../../Components/Navbar/Navbar";
import Intro from "../../Components/Intro/Intro";
import Testimonial from "../../Components/Testimonial/Testimonial"
import Why from "../../Components/WhySection/Why";
//styles
import { Header } from "../Home/HomeStyle";

const Home = () => {
  return (
    <div>
      <Container>
        <Header>
          <NavBar />
        </Header>
        <content>
          <Intro />
          <Testimonial/>
          <Why/>
        </content>
        <footer>footer</footer>
      </Container>
    </div>
  );
};

export default Home;
