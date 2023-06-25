import styled from "styled-components";
import Slider from "react-slick";

export const CoinsCont1 = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    width: calc(100% - 20px);
  }
`;

export const Wrapper1 = styled.div`
  width: 48%;
`;

export const Wrapper2 = styled.div`
  width: 48%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const PriceOverview = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.main};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding-left: 10px;
  min-width: 60%;
  max-width: 90%;
  height: 40px;
  line-height: 40px;
  z-index: 10;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    min-width: 100%;
  }

  > div:nth-child(1) {
    height: 40px;
    min-width: 10%;
    background-image: url(${(props) => props.img});
    background-size: 25px 25px;
    background-repeat: no-repeat;
    background-position: center;
  }

  > div:nth-child(2) {
    flex-wrap: wrap;
    height: 40px;
  }
`;

export const VolumeOverview = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 10px;
  background-color: ${(props) => props.theme.main};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  max-width: 90%;
  min-width: 60%;
  line-height: 40px;
  box-sizing: border-box;
  z-index: 10;
  text-align: center;

  @media (max-width: 1000px) {
    min-width: 100%;
  }

  > div:nth-child(1) {
    height: 40px;
    min-width: 10%;

    background-image: url(${(props) => props.img});
    background-size: 25px 25px;
    background-position: center;
    background-repeat: no-repeat;
  }

  > div:nth-child(2) {
    flex-wrap: wrap;
    height: 40px;

    span:nth-child(2) {
      white-space: nowrap;
    }
  }
`;

export const StyledChartSlider = styled(Slider)`
  margin: 0 50px 0 50px;
`;
