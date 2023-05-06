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
    handleClick = (id) => {
        this.props.handleClick(id)
    }

  render() {
    // console.log(this.props.topCryptoCurrencies)
    const currency = this.props.selectedCurrency;
    console.log(currency)
    const bitcoinObj = this.props.topCryptoCurrencies.filter(
        (obj) => obj.symbol === currency
      );
      const bitcoinPrice = readableNum(bitcoinObj[0]?.current_price);
      const bitcoinVolume = readableNum(bitcoinObj[0]?.total_volume);
      const bitcoinImage = bitcoinObj[0]?.image;
    return (
      <>
        <CoinsCont1>
          <Wrapper1>
            <PriceOverview img={bitcoinImage}>
              {bitcoinObj.id} (BTC) Price: ${bitcoinPrice}{" "}
            </PriceOverview>
            <CurrencyPriceChart
              prices={this.props.coinsMarketPriceArray}
              dates={this.props.coinsMarketDateArray}
            />
          </Wrapper1>
          <Wrapper2>
            <VolumeOverviewWrapper>
              <VolumeOverview img={bitcoinImage}>
                Bitcoin (BTC) Volume: ${bitcoinVolume}{" "}
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
          <TopCryptoCurrencies topCoinsData={this.props.topCryptoCurrencies} handleClick={this.handleClick} />
        </CoinsCont2>
      </>
    );
  }
}
