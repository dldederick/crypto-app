import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledGlobalCoins = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  font-size: 13px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  align-items: center;
  width: 50%;
  height: 30px;
  margin: 0 auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  div {
    text-align: center;
    margin: 0 10px 0 10px;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const StyledSlider = styled(Slider)`
  width: 95%;
  height: 30px;
  overflow: hidden;
  line-height: 30px;

  div {
    width: 750px;
  }

  @media (max-width: 1000px) {
    div {
      width: 600px;
    }
  }
`;
