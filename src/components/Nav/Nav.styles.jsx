import styled from "styled-components";

export const StyledNav = styled.div`
  width: calc(100% - 20px);
  height: 100px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  margin: auto;
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 100;
  border-radius: 10px;
`;

export const TopNav = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
`;
