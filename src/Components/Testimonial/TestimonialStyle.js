import styled, { css } from "styled-components";

export const TestimonialContainer = styled.div`
  width: 100%;
  align-items: center;
  background: var(--primary-white);
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TestimonialSessionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 72px 0px;
  max-width: 1110px;
`;
export const TestimonialSessionsContainerFirst = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

`
export const TestimonialSessionsContainerImg = styled.div`
    width:150px;
    height: 100%;
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
@media only screen and (min-width: 760px) {
    width:300px;
    height: 100%;
  }
`

export const TestimonialSessionsContainerDes = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: flex-start;
padding: 0 16px;
width: fit-content;
height: 100%;
`
export const SessionsTitle = styled.div`
    font-size: var(--body-md);
    font-weight: var(--body-medium-bold-weight);
    color: var(--primary-color);
    text-transform: uppercase;
    line-height: 18.75px;
    margin-bottom: 8px;
    @media only screen and (min-width: 760px) {
        font-size: var(--body-lg);
  }
  @media only screen and (max-width: 340px) {
    /* padding: 0 32px; */
  
  }
`

export const SessionHeader = styled.div`
  font-size: var(--header-xs);
  font-family: var(----Header-font-family);
  line-height: 110%;
  font-weight: var(--header-weight);
  color: var(--body-text-color);
  margin-bottom: 16px;
  width: 100%;
  ${(props) =>
    props.headerblackcolor &&
    css`
      color: var(--header-text-color);
    `}
    @media only screen and (max-width: 340px) {
    font-size: var(--header-xs);
    /* padding: 0 32px; */
  }
  @media only screen and (min-width: 760px) {
    font-size: var(--header-md);
    width:100%;
  }
  @media only screen and (min-width: 1024px) {
    font-size: var(--header-lg);
    width: 80%;
  }
`;
export const SessionDescription = styled.div`
  font-size: var(--body-sm);
  font-family: var(--Body-font-family);
  line-height: 130%;
  font-weight: var(--body-regular-weight);
  margin-bottom: 40px;
  width: 100%;
  @media only screen and (min-width: 760px) {
    font-size: var(--body-lg);
    width:100%;
  }
  @media only screen and (min-width: 1024px) {
    width: 80%;
    font-size: var(--body-lg);
  }
  /* @media only screen and (max-width: 340px) {
    padding: 0 32px;
  } */
`;

export const SessionName = styled.div`
  font-size: var(--body-md);
  font-family: var(--Body-font-family);
  line-height: 130%;
  font-weight: var(--header-weight);
  color: var(--body-text-color);
  text-transform: capitalize;
`
export const SessionsNametwo = styled.div`
    font-size: var(--body-sm);
    font-weight: var(--body-medium-bold-weight);
    color: var(--primary-color);
    text-transform: uppercase;
    line-height: 18.75px;
  
`
export const Sessionsrate = styled.div`

display: flex;
justify-content: center;
align-items: center;
padding: 12px;
border: 1px solid #FF007A;
color: #FF007A;
font-weight: 500;
font-size: var(--body-md);
border-radius:8px;
position: relative;
margin-top: 10px;

@media only screen and (min-width: 760px) {
    position: relative;
left: 50%;
top:-50px;
margin-top: 0px;
  }
`

