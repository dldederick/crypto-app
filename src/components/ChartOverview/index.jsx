import React from "react";
import CurrencyPriceChart from "../../components/CurrencyPriceChart";
import CurrencyVolumeChart from "../../components/CurrencyVolumeChart";
import { readableNum } from "../../Utils/math";
import {
  CoinsCont1,
  Wrapper1,
  Wrapper2,
  PriceOverview,
  VolumeOverview,
  StyledChartSlider
} from "./ChartOverview.styles";

export default function ChartOverview(props) {
  const currencyDisplayed = props.currencyDisplayed;
  const currencySymbol = props.currencySymbol;
  const coinsMarketPriceArray = props.coinsMarketPriceArray;
  const coinsMarketDateArray = props.coinsMarketDateArray;
  const coinsMarketVolumeArray = props.coinsMarketVolumeArray;

  const coinObj = props.topCryptoCurrencies.filter(
    (obj) => obj.id === currencyDisplayed
  );
  const coinPrice = readableNum(coinObj[0]?.current_price);
  const coinVolume = readableNum(coinObj[0]?.total_volume);
  const coinImage = coinObj[0]?.image;
  const coinSymbol = coinObj[0]?.symbol.toUpperCase();
  const coinName = coinObj[0]?.name;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 4000,
    cssEase: "linear",
    useCss: true
  };

  return (
    <>
      {props.isSmallScreen ? (
        <StyledChartSlider {...settings}>
            <Wrapper1>
              <PriceOverview img={coinImage}>
                <div></div>
                <div> {coinName} ({coinSymbol}) Price: {currencySymbol}
                {coinPrice}</div>
              </PriceOverview>
              <CurrencyPriceChart
                prices={coinsMarketPriceArray}
                dates={coinsMarketDateArray}
              />
            </Wrapper1>
            <Wrapper2>
                <VolumeOverview  img={coinImage}>
                  <div></div>
                  <div>{coinName} ({coinSymbol}) Volume: {currencySymbol}
                  {coinVolume}</div>
                </VolumeOverview>
              <CurrencyVolumeChart
                volumes={coinsMarketVolumeArray}
                dates={coinsMarketDateArray}
              />
            </Wrapper2>
        </StyledChartSlider>
      ) : (
        <CoinsCont1>
          <Wrapper1>
          <PriceOverview img={coinImage}>
                <div></div>
                <div> {coinName} ({coinSymbol}) Price: {currencySymbol}
                {coinPrice}</div>
              </PriceOverview>
            <CurrencyPriceChart
              prices={coinsMarketPriceArray}
              dates={coinsMarketDateArray}
            />
          </Wrapper1>
          <Wrapper2>
            <VolumeOverview img={coinImage}>
                  <div></div>
                  <div><span>{coinName} ({coinSymbol})</span>
                  <span> Volume: {currencySymbol}
                  {coinVolume}</span></div>
                </VolumeOverview>
            <CurrencyVolumeChart
              volumes={coinsMarketVolumeArray}
              dates={coinsMarketDateArray}
            />
          </Wrapper2>
        </CoinsCont1>
      )}
    </>
  );
}
