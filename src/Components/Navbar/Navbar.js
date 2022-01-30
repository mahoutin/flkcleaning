import React from "react";

import { Drawer } from "rsuite";
import { HashLink as Link } from "react-router-hash-link";


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
} from "./NavbarStyle";
import { ButtonStyle } from "../Button/LinkStyle";

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
              <Link to="/" className="navlinks" onClick={() => setOpen(false)}>
                <NavDrawerLinkStyle>Home</NavDrawerLinkStyle>
              </Link>
            </NavDrawerItemStyle>

            <NavDrawerItemStyle>
              <Link
                to="/"
                className="navlinks"
                onClick={() => setOpen(false)}
              >
                <NavDrawerLinkStyle>About Us</NavDrawerLinkStyle>
              </Link>
            </NavDrawerItemStyle>

            <NavDrawerItemStyle>
              <Link
                to="/"
                className="navlinks"
                onClick={() => setOpen(false)}
              >
                <NavDrawerLinkStyle>Our Services</NavDrawerLinkStyle>
              </Link>
            </NavDrawerItemStyle>

            <NavDrawerItemStyle>
              <Link
                to="/"
                className="navlinks"
                onClick={() => setOpen(false)}
              >
                <NavDrawerLinkStyle>Contact Us</NavDrawerLinkStyle>
              </Link>
            </NavDrawerItemStyle>

            <ButtonStyle
             
              colnavbtn
            >
              Get a Quote
            </ButtonStyle>
          </NavDrawerStyle>
        </Drawer.Body>
      </Drawer>
      <NavbarStyle  expand="md" fixed="top" light>
        <NavbarBrandStyle href="/">
          <HeaderLogoContainer>
            FKL
          </HeaderLogoContainer>
          {/* <HeaderLogoText /> */}
        </NavbarBrandStyle>
        <NavbarTogglerStyle onClick={() => setOpen(true)} />
        <CollapseStyle navbar>
          <NavStyle className="ms-auto" navbar>
          <NavItemStyle>
              <NavLinkStyle>
                <Link to="/" className="navlinks navlinksdesktop">
               Home
                </Link>
              </NavLinkStyle>
            </NavItemStyle>
            <NavItemStyle>
              <NavLinkStyle>
                <Link to="/" className="navlinks navlinksdesktop">
                About Us
                </Link>
              </NavLinkStyle>
            </NavItemStyle>

            <NavItemStyle>
              <NavLinkStyle>
                <Link to="/" className="navlinks navlinksdesktop">
                Our Services
                </Link>
              </NavLinkStyle>
            </NavItemStyle>

            <NavItemStyle>
              <NavLinkStyle>
                <Link to="/" className="navlinks navlinksdesktop">
                  Contact Us
                </Link>
              </NavLinkStyle>
            </NavItemStyle>
          </NavStyle>
          <ButtonStyle
            navbtn
          >
            Get a Quote
          </ButtonStyle>
        </CollapseStyle>
      </NavbarStyle>
    </div>
  );
};

export default NavBar;
