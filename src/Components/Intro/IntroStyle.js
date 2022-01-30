import styled, { css } from "styled-components";

export const IntroContainer = styled.div`
  align-items: center;
  height: fit-content;
  background: linear-gradient(180deg, #3498DB 51.04%, rgba(52, 152, 219, 0) 100%);
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;


  @media only screen and (min-width: 1024px) {
    padding: 0 100px;
  }
`;

export const IntroSessionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  max-width: 1110px;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;
export const IntroSessionsHalfContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px 0;
  width: 100%;
  height:fit-content;
  img{
      width: 80%;
      height: 80%;
      object-fit: contain;
      margin: 0 auto;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
    height: 100%;
    img{
      width: 550px;
      height: 550px;
      object-fit: contain;
      margin: 0 auto;
  }
  }


`


export const IntoHeader = styled.div`
  font-size: var(--header-sm);
  font-family: var(----Header-font-family);
  line-height: 110%;
  font-weight: var(--header-weight);
  color: var(--primary-white);
  margin-bottom: 16px;
  width: 100%;
  ${(props) =>
    props.headerblackcolor &&
    css`
      color: var(--header-text-color);
    `}
    @media only screen and (max-width: 320px) {
    font-size: var(--header-xs);
  }
  @media only screen and (min-width: 1024px) {
    font-size: var(--header-lg);
    width: 100%;
  }
`;
export const IntoDescription = styled.div`
  font-size: var(--body-lg);
  font-family: var(--Body-font-family);
  line-height: 130%;
  font-weight: var(--body-regular-weight);
  color: var(--primary-white);
  margin-bottom: 40px;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: 70%;
  }
`;
export const IntoButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 8px;

@media only screen and (min-width: 1024px) {
    justify-content: flex-start;
  }


`

// export const IntroLogoContainer = styled.div`
//   width: fit-content;
//   height: 100%;
//   margin-bottom: 24px;
 
//   @media only screen and (max-width: 320px) {
//     margin-bottom: 0px;
//     width: 50px;
//     height: 100%;
//   }
//   @media only screen and (min-width: 1024px) {
//     margin-bottom: 40px;
//   }
// `;
