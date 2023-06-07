import styled from "styled-components";

export const StyledNavOptions = styled.div`
  display: flex;
  justify-content: flex-end;
// justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 50%;
  padding-right: 15px;
//   border: 1px red solid;

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
  }
`;

export const NavCurrentPage = styled.div`
  display: none;

  @media (max-width: 1000px) {
    width: 100px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px red solid;
  }
`;

export const AltNav = styled.div`
  width: 30%;
  display: flex;
//   justify-content: center;
justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-right: 10px;
//   border: 1px pink solid;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
