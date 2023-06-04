import styled from "styled-components";

export const StyledBottomNav = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 78%;
    height: 80px;
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.text};
    margin: auto;
    position: fixed;
    bottom: 230px;
    left: 0;
    right: 0;
    z-index: 100;
    border-radius: 10px;
  }
`;
