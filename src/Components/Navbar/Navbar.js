import React from "react";

import { Drawer } from "rsuite";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../Assets/logo.jpeg";

import {
  HeaderLogoContainer,
  NavbarStyle,
  NavbarTogglerStyle,
  NavbarBrandStyle,
  NavStyle,
  NavItemStyle,
  NavLinkStyle,
  CollapseStyle,
  NavDrawerStyle,
  NavDrawerItemStyle,
  NavDrawerLinkStyle,
  HeaderLogoContainerTitle 
} from "./NavbarStyle";


const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Drawer
        placement="right"
        value="xs"
        full
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>FKL</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <NavDrawerStyle navbar>
            <NavDrawerItemStyle>
              <Link to="/#intro" className="navlinks" onClick={() => setOpen(false)}>
                <NavDrawerLinkStyle>Home</NavDrawerLinkStyle>
              </Link>
            </NavDrawerItemStyle>

            <NavDrawerItemStyle>
              <Link to="/#aboutus" className="navlinks" onClick={() => setOpen(false)}>
                <NavDrawerLinkStyle>About Us</NavDrawerLinkStyle>
              </Link>
            </NavDrawerItemStyle>

            <NavDrawerItemStyle>
              <Link to="/#ourserice" className="navlinks" onClick={() => setOpen(false)}>
                <NavDrawerLinkStyle>Our Services</NavDrawerLinkStyle>
              </Link>
            </NavDrawerItemStyle>

            <NavDrawerItemStyle>
              <Link to="/#footer" className="navlinks" onClick={() => setOpen(false)}>
                <NavDrawerLinkStyle>Contact Us</NavDrawerLinkStyle>
              </Link>
            </NavDrawerItemStyle>

            <Link to="/#contact" className="quotelinks quotecollinks" onClick={() => setOpen(false)}>
                 Get a quote
          </Link>
          </NavDrawerStyle>
        </Drawer.Body>
      </Drawer>

      <NavbarStyle expand="md" fixed="top" dark >
        <NavbarBrandStyle href="/">
          <HeaderLogoContainer>
            <img src={logo} alt="cleaning" />
          </HeaderLogoContainer>
          <HeaderLogoContainerTitle ><p>FKL Cleaning Service <br/>and Sells LLC</p></HeaderLogoContainerTitle >

        </NavbarBrandStyle>
        <NavbarTogglerStyle onClick={() => setOpen(true)} />
        <CollapseStyle navbar>
          <NavStyle className="ms-auto" navbar>
            <NavItemStyle>
              <NavLinkStyle>
                <Link to="#intro" className="navlinks navlinksdesktop">
                  Home
                </Link>
              </NavLinkStyle>
            </NavItemStyle>
            <NavItemStyle>
              <NavLinkStyle>
                <Link to="#aboutus" className="navlinks navlinksdesktop">
                  About Us
                </Link>
              </NavLinkStyle>
            </NavItemStyle>

            <NavItemStyle>
              <NavLinkStyle>
                <Link to="#ourserice" className="navlinks navlinksdesktop">
                  Our Services
                </Link>
              </NavLinkStyle>
            </NavItemStyle>

            <NavItemStyle>
              <NavLinkStyle>
                <Link to="#footer" className="navlinks navlinksdesktop">
                  Contact Us
                </Link>
              </NavLinkStyle>
            </NavItemStyle>
          </NavStyle>
          <Link to="#contact" className="quotelinks">
                 Get a quote
          </Link>
        </CollapseStyle>
      </NavbarStyle>
    </div>
  );
};

export default NavBar;
