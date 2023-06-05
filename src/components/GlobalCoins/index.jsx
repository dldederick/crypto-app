import React from "react";
import { StyledGlobalCoins, StyledSlider } from "./GlobalCoins.styles";
import Slider from "react-slick";
import { readableNum } from "../../Utils/math";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class GlobalCoins extends React.Component {
  render() {
    const globalCoinsData = {
      Coins: this.props.coins,
      Exchange: this.props.exchange,
      "Market Cap": readableNum(this.props.marketCap),
      Volume: readableNum(this.props.volume),
      "BTC Dominance": `${Math.round(this.props.dominance)}%`,
    };

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 0,
      cssEase: "linear",
      arrows: false,
      useCss: true
    };

    return (
      <StyledGlobalCoins>
        <StyledSlider {...settings}>
          {Object.entries(globalCoinsData).map(([key, value]) => {
            return (
              <div key={key}>
                {key}: {this.props.currencySymbol}
                {value}
              </div>
            );
          })}
        </StyledSlider>
      </StyledGlobalCoins>
    );
  }
}