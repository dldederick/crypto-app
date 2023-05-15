import React from "react";
import axios from "axios";
import ChartOverview from "../../components/ChartOverview";
import CoinInfoPage from "../../components/CoinInfoPage";
import { StyledCoinsPage } from "./Coins.styles";
export default class Coins extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    topCryptoCurrencies: [],
    coinsMarketPriceArray: [],
    coinsMarketDateArray: [],
    coinsMarketVolumeArray: [],
    coinInfo: {},
    currencyDisplayed: 'bitcoin'
  };

  getTopCryptoCurrencies = async () => {
    const currency = this.props.selectedCurrency;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      const currencyDisplayed = data[0].id;
      this.setState({ topCryptoCurrencies: data, currencyDisplayed, isLoading: false });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  getCoinsMarketChart = async () => {
    const currency = this.props.selectedCurrency;
    const display = this.state.currencyDisplayed;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${display}/market_chart?vs_currency=${currency}&days=180&interval=daily`
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
    // console.log(this.props.selectedCurrency, 'coins');
    // console.log(this.state.currencyDisplayed)
    return (
      <StyledCoinsPage>
          <ChartOverview
            currencyDisplayed={this.state.currencyDisplayed}
            topCryptoCurrencies={this.state.topCryptoCurrencies}
            coinsMarketVolumeArray={this.state.coinsMarketVolumeArray}
            coinsMarketDateArray={this.state.coinsMarketDateArray}
            coinsMarketPriceArray={this.state.coinsMarketPriceArray}
            selectedCurrency={this.props.selectedCurrency}
          />
      </StyledCoinsPage>
    );
  }
}
