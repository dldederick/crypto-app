import React from "react";
import axios from "axios";
import TopCryptoCurrencies from "../../components/TopCryptCurrencies";
import {
  StyledCoinsPage,
  CoinsCont1,
  CoinsCont2,
  Wrapper1,
  Wrapper2,
  Overview,
  PriceOverview,
  VolumeOverview
} from "./Coins.styles";
// import { withTheme } from "styled-components";
import CurrencyPriceChart from "../../components/CurrencyPriceChart";
import CurrencyVolumeChart from "../../components/CurrencyVolumeChart";
import { currentDate, readableNum } from "../../Utils";
export default class Coins extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    topCryptoCurrencies: [],
    coinsMarketPriceArray: [],
    coinsMarketDateArray: [],
    coinsMarketVolumeArray: [],
  };

  getTopCryptoCurrencies = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({ topCryptoCurrencies: data, isLoading: false });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  getCoinsMarketChart = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily`
      );
      const coinsMarketPriceArray = data.prices.map((item) => item[1]);
      const coinsMarketDateArray = data.prices.map((item) => item[0]);
      const coinsMarketVolumeArray = data.total_volumes.map((item) => item[1]);
      this.setState({
        coinsMarketDateArray,
        coinsMarketPriceArray,
        coinsMarketVolumeArray,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getTopCryptoCurrencies();
    this.getCoinsMarketChart();
  }

  render() {
    const bitcoinObj = this.state.topCryptoCurrencies.filter(
      (obj) => obj.id === "bitcoin"
    );
    const bitcoinPrice = bitcoinObj[0]?.current_price;
    const bitcoinVolume = readableNum(bitcoinObj[0]?.total_volume);
    return (
      <StyledCoinsPage>
        <CoinsCont1>
          <Wrapper1>
            <PriceOverview>Bitcoin (BTC) Price: ${bitcoinPrice} </PriceOverview>
            <CurrencyPriceChart
              prices={this.state.coinsMarketPriceArray}
              dates={this.state.coinsMarketDateArray}
            />
          </Wrapper1>
          <Wrapper2>
            <VolumeOverview>Bitcoin (BTC) Volume: ${bitcoinVolume} </VolumeOverview>
            <CurrencyVolumeChart
              volumes={this.state.coinsMarketVolumeArray}
              dates={this.state.coinsMarketDateArray}
            />
          </Wrapper2>
        </CoinsCont1>
        <CoinsCont2>
          <Overview>Market Overview</Overview>
          <TopCryptoCurrencies topCoinsData={this.state.topCryptoCurrencies} />
        </CoinsCont2>
      </StyledCoinsPage>
    );
  }
}
