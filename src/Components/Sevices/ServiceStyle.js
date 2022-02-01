import styled, { css } from "styled-components";

export const ServiceContainer = styled.div`
  width: 100%;
  align-items: center;
  background: var(--primary-white);
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServiceSessionsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  margin: 32px 0px;
  width: 1110px;
`;

export const ServiceWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 24px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(252px, 1fr));
  grid-gap: 16px;
`;

export const ServiceWrapperItem = styled.div`
 background-color: #EAECEF;
  padding: 16px 8px;
  font-size: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  height: 322px;

  
`
export const ServiceWrapperDes = styled.div`
 font-size: var(--body-sm);
      font-family: var(--Body-font-family);
      
`
export const ServiceWrapperImage = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 8px;
    margin: 8px 0;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`