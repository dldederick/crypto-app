import styled from "styled-components";

export const StyledThemeButton = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.darkMode ? 'url("https://i.postimg.cc/LsnBsDCF/Scan.png")' : 'url(https://i.postimg.cc/wjJNZXZ1/Scan-1.png)'};
  background-repeat: no-repeat;
  background-position: center;
  rotate: 90deg;
  background-size: 18px 18px;
`;
