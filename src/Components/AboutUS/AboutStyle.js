import styled, { css } from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  align-items: center;
  background: var(--primary-white);
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutSessionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 72px 0px;
  max-width: 1110px;
  @media only screen and (min-width: 760px) {
    flex-direction: row;
  }
`;

export const AboutSessionDescription = styled.div`
  font-size: var(--body-sm);
  font-family: var(--Body-font-family);
  line-height: 130%;
  font-weight: var(--body-regular-weight);
  margin-bottom: 40px;
  width: 100%;
  @media only screen and (min-width: 760px) {
    font-size: var(--body-md);
    width: 100%;
  }
  @media only screen and (min-width: 1024px) {
    width: 80%;
    font-size: var(--body-md);
  }
`;

export const AboutSessionDescriptionspan = styled.span`
  color: var(--primary-color);
  font-weight: bold;
`;
export const WhySessionsContainerHalfDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
`;
export const WhyImageWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 100px;
  height: 100px;
  margin: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: content;
    border-radius: 8px;
  }
  @media only screen and (min-width: 1024px) {
    padding: 25px;
    width: 300px;
    height: 300px;
    margin: 0px;
  }
`;
