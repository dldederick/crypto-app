import React from "react";
import { StyledGlobalCoins } from "./GlobalCoins.styles";
import Slider from "react-slick";
import { readableNum } from "../../Utils";
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
      slidesToScroll: 4,
      autoplay: true,
      speed: 30000,
      autoplaySpeed: 30000,
      cssEase: "linear",
      arrows: false
    };

    return (
      <StyledGlobalCoins>
        <Slider {...settings}>
          {Object.entries(globalCoinsData).map(([key, value]) => {
            return (
              <div key={key}>
                {key}:{this.props.currencySymbol}
                {value}
              </div>
            );
          })}
        </Slider>
      </StyledGlobalCoins>
    );
  }
}