import React from "react";
import CurrencyPriceChart from "../../components/CurrencyPriceChart";
import CurrencyVolumeChart from "../../components/CurrencyVolumeChart";
import TopCryptoCurrencies from "../../components/TopCryptoCurrencies";
import {
    CoinsCont1,
    CoinsCont2,
    Wrapper1,
    Wrapper2,
    Overview,
    PriceOverview,
    VolumeOverview,
    VolumeOverviewWrapper
  } from "./ChartOverview.styles";
  import { readableNum } from "../../Utils";

export default class ChartOverview extends React.Component {

  render() {
    const currency = this.props.selectedCurrency;
    // console.log(currency)
    const coinObj = this.props.topCryptoCurrencies.filter(
        (obj) => obj.symbol === currency
      );
      const coinPrice = readableNum(coinObj[0]?.current_price);
      const coinVolume = readableNum(coinObj[0]?.total_volume);
      const coinImage = coinObj[0]?.image;
      const coinSymbol = coinObj[0]?.symbol.toUpperCase();
    return (
      <>
        <CoinsCont1>
          <Wrapper1>
            <PriceOverview img={coinImage}>
              {coinObj.id} ({coinSymbol}) Price: ${coinPrice}{" "}
            </PriceOverview>
            <CurrencyPriceChart
              prices={this.props.coinsMarketPriceArray}
              dates={this.props.coinsMarketDateArray}
            />
          </Wrapper1>
          <Wrapper2>
            <VolumeOverviewWrapper>
              <VolumeOverview img={coinImage}>
                {coinObj.id} ({coinSymbol}) Volume: ${coinVolume}{" "}
              </VolumeOverview>
            </VolumeOverviewWrapper>
            <CurrencyVolumeChart
              volumes={this.props.coinsMarketVolumeArray}
              dates={this.props.coinsMarketDateArray}
            />
          </Wrapper2>
        </CoinsCont1>
        <CoinsCont2>
          <Overview>Market Overview</Overview>
          <TopCryptoCurrencies topCoinsData={this.props.topCryptoCurrencies}  />
        </CoinsCont2>
      </>
    );
  }
}
