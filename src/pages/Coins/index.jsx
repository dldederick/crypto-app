import React from "react";
import axios from "axios";
import { StyledCoinsPage } from "./Coins.styles";
import ChartOverview from "../../components/ChartOverview";
export default class Coins extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    topCryptoCurrencies: [],
    coinsMarketPriceArray: [],
    coinsMarketDateArray: [],
    coinsMarketVolumeArray: [],
    coinClicked: false,
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
    // console.log(this.state.topCryptoCurrencies)
    return (
      <StyledCoinsPage>
        <ChartOverview
          topCryptoCurrencies={this.state.topCryptoCurrencies}
          coinsMarketVolumeArray={this.state.coinsMarketVolumeArray}
          coinsMarketDateArray={this.state.coinsMarketDateArray}
          coinsMarketPriceArray={this.state.coinsMarketPriceArray}
        />
      </StyledCoinsPage>
    );
  }
}
