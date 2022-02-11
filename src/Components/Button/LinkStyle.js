import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "rsuite";

export const ButtonLinkStyle = styled(Link)`
  height: 50px;
  padding: 16px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: var(--body-md);
  font-family: var(--Body-font-family);
  font-weight: var(--body-semi-bold-weight);
  line-height: 130%;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration: none;
    color: var(--primary-white);
    transition: 0.2s;
    opacity: 85%;
  }

  ${(props) =>
    props.linkmargintop &&
    css`
      margin-top: 32px;
    `}

  ${(props) =>
    props.whitebg &&
    css`
      background-color: var(--primary-white);
      color: var(--primary-color);

      &:hover {
        text-decoration: none;
        color: var(--primary-color);
        transition: 0.2s;
        opacity: 85%;
      }
    `}

  ${(props) =>
    props.primarybg &&
    css`
      background-color: var(--primary-color);
      color: var(--primary-white);
    `}

    ${(props) =>
    props.mobilesize &&
    css`
      width: 280px;
      @media only screen and (min-width: 1024px) {
        width: 396px;
      }
    `}

    // nav button link
${(props) =>
    props.navbtn &&
    css`
      background-color: var(--primary-white);
      color: var(--primary-color);
      height: 34px;
      padding: 12px 16px;
      border-radius: 8px;
      font-size: var(--body-sm);
      font-family: var(--Body-font-family);
      font-weight: var(--body-semi-bold-weight);
      margin: 0;
      text-align: center;

      &:hover {
        text-decoration: none;
        color: var(--primary-white);
        border: 2px solid var(--primary-white);
        background-color: var(--primarry-color);
        text-decoration: none;
      } 
      &:focus{
        text-decoration: none;
      }
      &:active{
        text-decoration: none;
      }
    `}
 // collaps nav button link
    ${(props) =>
    props.colnavbtn &&
    css`
      background-color: var(--primary-color);
      color: var(--primary-white);
      padding: 12px 16px;
      border-radius: 8px;
      font-size: var(--body-sm);
      font-family: var(--Body-font-family);
      font-weight: var(--body-semi-bold-weight);
      text-align: center;
      margin: 16px;
    `}

// outline link
${(props) =>
    props.linkoutline &&
    css`
      background-color: transparent;
      color: var(--primary-white);
      border: 2px solid var(--primary-white);

      &:hover {
        text-decoration: none;
        color: var(--primary-color);
        transition: 0.2s;
        border: 2px solid var(--primary-color);
      }
    `}


// text link (No border link) 
  ${(props) =>
    props.textlink &&
    css`
      border: none;
      background-color: transparent;
      color: var(--primary-white);
      text-decoration: underline;
      text-transform: capitalize;
      font-size: var(--body-sm);
      font-weight: var(--body-regular-weight);
      font-family: var(--Body-font-family);
      line-height: 130%;
      text-align: center;
      margin: 0 16px;

      &:hover {
        text-decoration: underline;
        background-color: transparent;
        transition: 0.2s;
        opacity: 85%;
      }
      @media only screen and (min-width: 1024px) {
        font-size: var(--body-md);
      }
    `}
`;

export const ButtonStyle = styled(Button)`
  height: 50px;
  padding: 12px 16px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: var(--body-md);
  font-family: var(--Body-font-family);
  font-weight: var(--body-semi-bold-weight);
  line-height: 130%;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration: none;
    color: var(--primary-white);
    transition: 0.2s;
    opacity: 85%;
    background-color: var(--link-hover);
  }

  ${(props) =>
    props.linkmarginleft &&
    css`
      margin-left: 24px;
    `}

  ${(props) =>
    props.nopadding &&
    css`
      padding: 0;
    `}

  ${(props) =>
    props.whitebg &&
    css`
      background-color: var(--primary-white);
      color: var(--primary-color);

      &:hover {
        text-decoration: none;
        color: var(--primary-white);
        transition: 0.2s;
        opacity: 85%;
        background-color: var(--primary-gradient-color);
        border: 2px solid white;
      }
    `}

  ${(props) =>
    props.primarybg &&
    css`
      background-color: var(--primary-color);
      color: var(--primary-white);
    `}

    ${(props) =>
    props.mobilesize &&
    css`
      width: 100%;
      @media only screen and (min-width: 1024px) {
        width: 396px;
      }
    `}

    // nav button link
${(props) =>
    props.navbtn &&
    css`
      background-color: var(--primary-white);
      color: var(--primary-color);
      height: 34px;
      padding: 24px 16px;
      border-radius: 8px;
      font-size: var(--body-sm);
      font-family: var(--Body-font-family);
      font-weight: var(--body-semi-bold-weight);
      margin: 0;
      text-align: center;
    `}
 // collaps nav button link
    ${(props) =>
    props.colnavbtn &&
    css`
      background-color: var(--primary-color);
      color: var(--primary-white);
      padding: 24px 16px;
      border-radius: 8px;
      font-size: var(--body-sm);
      font-family: var(--Body-font-family);
      font-weight: var(--body-semi-bold-weight);
      text-align: center;
      margin: 16px;
    `}

// outline link
   ${(props) =>
    props.servicebutton &&
    css`
      background-color: #f4bf00;
      color: #000;

      /* &:hover {
        text-decoration: none;
        color: var(--primary-color) !important;
        transition: 0.2s;
        border: 2px solid var(--primary-color);
      }     */
    `} 


// text link (No border link) 
  ${(props) =>
    props.textlink &&
    css`
      border: none;
      background-color: transparent;
      color: var(--primary-white);
      text-decoration: underline;
      text-transform: capitalize;
      font-size: var(--body-sm);
      font-weight: var(--body-regular-weight);
      font-family: var(--Body-font-family);
      line-height: 130%;
      text-align: center;
      margin: 0 16px;

      &:hover {
        text-decoration: underline;
        background-color: transparent;
        transition: 0.2s;
        opacity: 85%;
      }
      @media only screen and (min-width: 1024px) {
        font-size: var(--body-md);
      }
    `}
`;
