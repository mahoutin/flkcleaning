import styled, { css } from "styled-components";

export const FooterSectionContainer = styled.div`
  width: 100%;
  align-items: center;
  background: #161616;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 0px;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    width: 1110px;
  }
`;

export const FooterHalfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  @media only screen and (min-width: 1024px) {
    width: 50%;
    align-items: flex-start;
  justify-content: flex-start;
  }
`;
export const FooterHeader = styled.div`
font-size: 24px;
color: var(--primary-white);
font-weight: 600;
margin-bottom: 16px;
`
export const FooterDes = styled.div`
font-size: 16px;
color: var(--primary-white);
font-weight: 400;
margin-bottom: 8px;
text-align:center;
@media only screen and (min-width: 1024px) {
    text-align:left;  
  }
`