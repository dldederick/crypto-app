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
  VolumeOverviewWrapper,
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
  // console.log(coinObj)

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
                {coinName} ({coinSymbol}) Price: {currencySymbol}
                {coinPrice}{" "}
              </PriceOverview>
              <CurrencyPriceChart
                prices={coinsMarketPriceArray}
                dates={coinsMarketDateArray}
              />
            </Wrapper1>
            <Wrapper2>
              <VolumeOverviewWrapper>
                <VolumeOverview img={coinImage}>
                  {coinName} ({coinSymbol}) Volume: {currencySymbol}
                  {coinVolume}{" "}
                </VolumeOverview>
              </VolumeOverviewWrapper>
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
              {coinName} ({coinSymbol}) Price: {currencySymbol}
              {coinPrice}{" "}
            </PriceOverview>
            <CurrencyPriceChart
              prices={coinsMarketPriceArray}
              dates={coinsMarketDateArray}
            />
          </Wrapper1>
          <Wrapper2>
            <VolumeOverviewWrapper>
              <VolumeOverview img={coinImage}>
                {coinName} ({coinSymbol}) Volume: {currencySymbol}
                {coinVolume}{" "}
              </VolumeOverview>
            </VolumeOverviewWrapper>
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
