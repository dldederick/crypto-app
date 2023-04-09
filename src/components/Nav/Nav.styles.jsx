import styled from "styled-components";

export const StyledNav = styled.div`
  border: 1px yellow solid;
//   display: flex;
// margin: 0 auto;
  width: 100%;
//   height: 100px;
  margin: 5px;`

export const TopNav = styled.div`
display: flex;
width: 100%;
height: 100px;`

export const BottomNav = styled.div`
display: flex;
color: white;
justify-content: center;
align-items: center;
width: 50%;
height: 40px;
margin: 0 auto;
border: 1px pink solid;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;`

export const NavPages = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 50px;
//   border: 1px blue solid;
  width: 50%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 45px;
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
