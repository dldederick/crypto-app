import styled from "styled-components";

export const StyledNav = styled.div`
  width: 78%;
  // height: 100%;
  // background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  margin: auto;
  position: fixed;
  top: 12px;
  left: 0;
  right: 0;
  z-index: 100;

  @media (max-width: 1000px) {
    top: 10px;
    width: inherit;
    
  }
`;

export const TopNav = styled.div`
  background-color: ${(props) => props.theme.main};
  border-radius: 10px;
  display: flex;
  width: 100%;
  height: 80px;

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;
