import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const StyledGlobalCoins = styled.div`
  display: flex;
  justify-content: center;
  font-size: 13px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  align-items: center;
  width: 50%;
  height: 40px;
  margin: 0 auto;
  // border: 1px pink solid;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  div {
    text-align: center;
    width: 500px;
    // border: 1px pink solid;
  }
`;

export const Blank = styled.div`
width: 20px;`


