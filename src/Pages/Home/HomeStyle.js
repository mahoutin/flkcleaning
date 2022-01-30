import styled from "styled-components";

export const Header = styled.div`
 
  height: 64px;
  width: 100%;
  position: sticky;
  z-index:100;




  &>div{
    background: white;
    padding: 16px 16px 16px 8px;
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    background: var(--primary-color);
    
  }
`;
