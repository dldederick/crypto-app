import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { readableNum } from "../../Utils/math";
import { StyledGlobalCoins, StyledSlider } from "./GlobalCoins.styles";


export default class GlobalCoins extends React.Component {
  render() {
    const globalCoinsData = {
      Coins: `${this.props.currencySymbol} ${this.props.coins}`,
      Exchange: `${this.props.currencySymbol} ${this.props.exchange}`,
      "Market Cap": `${this.props.currencySymbol} ${readableNum(this.props.marketCap)}`,
      Volume: `${this.props.currencySymbol} ${readableNum(this.props.volume)}`,
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
                {key}: <span style={{ color: '#00ff5f' }}>{String(value)}</span>
              </div>
            );
          })}
        </StyledSlider>
      </StyledGlobalCoins>
    );
  }
}
