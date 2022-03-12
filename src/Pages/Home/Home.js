import React from "react";

//plugings
import "rsuite/dist/rsuite.min.css";
import { Container } from "rsuite";

//components
import NavBar from "../../Components/Navbar/Navbar";
import Intro from "../../Components/Intro/Intro";
import Testimonial from "../../Components/Testimonial/Testimonial"
import Why from "../../Components/WhySection/Why";
import ContactUs from "../../Components/Contacts/Contact";
import Footers from "../../Components/Footer/Footer";
import About from "../../Components/AboutUS/About";
import Review from "../../Components/Review/Review";

//styles
import { Header } from "../Home/HomeStyle";
import Service from "../../Components/Sevices/Service";

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
          <Service/>
          <About/>
          <Review/>
          <ContactUs/>
        </content>
        <footer>
          <Footers/>
        </footer>
      </Container>
    </div>
  );
};

export default Home;
