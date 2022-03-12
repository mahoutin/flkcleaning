import styled, { css } from "styled-components";

export const WhyContainer = styled.div`
  width: 100%;
  align-items: center;
  background: #EAECEF;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WhySessionsContainer = styled.div`
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
export const WhySessionsContainerHalf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 1024px) {
    width:50%;
  }

 
`
export const WhySessionsContainerHalfDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  padding: 40px 8px;
`
export const WhyDividerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 8px;
  @media only screen and (max-width: 320px) {
    margin: 0;
  }
`
export const WhyImageWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: rgba(52, 152, 219, 0.4);
    border-radius: 8px;
    margin-right: 8px;

    @media only screen and (min-width: 1024px) {
        padding: 25px;
  }
`