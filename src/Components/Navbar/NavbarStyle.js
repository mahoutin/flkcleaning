import styled from "styled-components";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";

export const HeaderLogoContainer = styled.div`
  margin-right: 8px;
  position: relative;
  z-index: 100;
  color:var(--primary-white);
  width: 50px;
  height: 50px;



  img{
    width: 100%;
    height: 100%;
    border-radius:4px;
    object-fit: contain;
  }

`;
export const HeaderLogoContainerTitle = styled.div`
display: flex;
    font-weight: 600;
    font-size: 12px;
    max-width: 100px;
    text-align:center;
    @media only screen and (max-width: 320px) {
      font-size: 10px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 12px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 16px;
    }
`
export const NavbarStyle = styled(Navbar)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background: var(--primary-color);
`;

export const NavbarTogglerStyle = styled(NavbarToggler)`
  outline: none;
  box-shadow: none;
  border: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const NavbarBrandStyle = styled(NavbarBrand)`
  display: flex;
align-items: center;

`;

export const NavStyle = styled(Nav)`
  padding: 0 16px 0 8px;
  height: 100%;
`;

export const NavItemStyle = styled(NavItem)`
 height:50px;
 width: 100px;
 display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;


  &:hover {
    border-bottom: 2px solid var(--primary-color);
  }
  &:active {
    border-bottom: 2px solid var(--primary-color);
  }
  &:focus {
    border-bottom: 2px solid var(--primary-color);
  }

`;

export const NavLinkStyle = styled(NavLink)`
  &:hover {
    text-decoration: none;
    color: var(--primary-color);
    cursor: pointer;
  }
`;
export const CollapseStyle = styled(Collapse)`
  outline: none;
  box-shadow: none;
`;

// drawer nav style
export const NavDrawerStyle = styled(Nav)`
  width: 100%;
  /* border: 1px solid green; */
`;

export const NavDrawerItemStyle = styled(NavItem)`
  /* border: 1px solid red; */
  width: 100%;
  &:hover {
    border-bottom: 2px solid var(--primary-color);
    text-decoration: none;
    color: var(--primary-color);
    cursor: pointer;
  }
`;

export const NavDrawerLinkStyle = styled(NavLink)`
  color: var(--header-text-color);
  font-weight: var(--body-semi-bold-weight);
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
