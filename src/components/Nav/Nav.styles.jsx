import styled from "styled-components";

export const StyledNav = styled.div`
  // border: 1px yellow solid;
  width: 99%;
  height: 100px;
  background-color: #191B1F;
  margin: auto;
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 100;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;`

export const TopNav = styled.div`
display: flex;
width: 100%;
height: 100px;`



export const NavPages = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 50px;
  width: 50%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 45px;
    border-radius: 5px;
  }

  div:hover {
    background-color: #2C2F36;
  }
`;

export const StyledLink = styled.a`
  color: white;
  text-decoration: none;
`;

export const NavOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 50%;
  padding-right: 15px;
`;
