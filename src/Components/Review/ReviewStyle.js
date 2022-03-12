import styled, { css } from "styled-components";

export const ReviewContainer = styled.div`
  width: 100%;
  align-items: center;
  background: var(--primary-white);
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
 

`;

export const ReviewSessionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 72px 0px;
  width: 1110px;
  @media only screen and (min-width: 760px) {
    flex-direction: row;
  }
`;
export const ReviewSessionsContainerHeader = styled.div`
padding:0;
@media only screen and (max-width: 340px) {
    padding: 0 32px;
  
  }
`
export const ReviewSessionsContainerNote = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
height: fit-content;
font-size: var(--body-md);
font-weight: 400;

`

export const ReviewSessionsContaineNumber = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
height: fit-content;
color:#7A7A7A;
font-size: 16px;
margin: 0 4px;
`

export const ReviewBodyContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-height: 500px;
overflow-y:scroll;
@media only screen and (max-width: 340px) {
    padding: 0 32px;
  
  }

`
export const ReviewBodyWrapper = styled.div`
display: flex;
width: 100%;
flex-direction: column;
height: fit-content;
@media only screen and (min-width: 760px) {
  padding-right:16px ;
 
  }
`

export const ReviewBodyDescription = styled.div`
  font-size: var(--body-sm);
  font-family: var(--Body-font-family);
  line-height: 130%;
  font-weight: var(--body-regular-weight);
  margin-bottom: 40px;
  width: 100%;
  margin-top: 8px;
`;

export const ReviewBodyTitle = styled.div`
  font-size: var(--body-md);
  font-family: var(--Body-font-family);
  line-height: 130%;
  font-weight: var(--header-weight);
  color: var(--body-text-color);
  text-transform: capitalize;

  span{
      font-size: 12px;
      font-weight: 400;
      margin-left: 20%;
  }
`



export const ReviewAddWraper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px;
border: 1px solid #7A7A7A;
border-radius: 12px;
margin: 0 auto;
width: 100%;
@media only screen and (min-width: 760px) {
  width: 80%;
 
  }

`