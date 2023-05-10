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
    coinIsClicked: false,
    coinClicked: "",
    coinInfo: {},
    selectedCurrency: ''
  };

  getTopCryptoCurrencies = async (currency) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({ topCryptoCurrencies: data, isLoading: false });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  getCoinsMarketChart = async (currency) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=180&interval=daily`
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedCurrency !== prevState.selectedCurrency) {
      this.getTopCryptoCurrencies(this.state.selectedCurrency);
      this.getCoinsMarketChart(this.state.selectedCurrency);
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true, selectedCurrency: this.props.selectedCurrency });
    this.getTopCryptoCurrencies(this.props.selectedCurrency);
    this.getCoinsMarketChart(this.props.selectedCurrency);
  }

  handleClick = (id) => {
    this.setState((prevState) => ({
      coinIsClicked: !prevState.coinIsClicked,
      coinClicked: id,
    }));
    
  };

  render() {
    // console.log(this.state.selectedCurrency);
    return (
      <StyledCoinsPage>
        {this.state.coinIsClicked ? (
          <CoinInfoPage coinClicked={this.state.coinClicked} coinIsClicked={this.state.coinIsClicked} />
        ) : (
          <ChartOverview
            topCryptoCurrencies={this.state.topCryptoCurrencies}
            coinsMarketVolumeArray={this.state.coinsMarketVolumeArray}
            coinsMarketDateArray={this.state.coinsMarketDateArray}
            coinsMarketPriceArray={this.state.coinsMarketPriceArray}
            handleClick={this.handleClick}
            selectedCurrency={this.state.selectedCurrency}
          />
        )}
      </StyledCoinsPage>
    );
  }
}
