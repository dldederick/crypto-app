import styled from 'styled-components';

export const StyledNavOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: 50%;
  padding-right: 15px;

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
  }
`;

export const NavCurrentPage = styled.div`
width: 100px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
border: 1px red solid;

@media (min-width: 1001px) {
    display: none;
}`

export const AltNav = styled.div`
display: none;

@media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px red solid;
}
`