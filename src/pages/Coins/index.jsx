import React from "react";
import axios from "axios";
import queryString from 'query-string'
import ChartOverview from "../../components/ChartOverview";
import TopCryptoCurrencies from "../../components/TopCryptoCurrencies";
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
    settings: {},
    currencyDisplayed: '',
    sortBy: "",
    sort: "",
    sortedList: [],
    sortedMarketDateArray: [],
    sortedMarketPriceArray: [],
    sortedMarketVolumeArray: []
  };

  sortNameChange(value) {
    if (value === "1h") {
      return "price_change_percentage_1h_in_currency";
    }
    if (value === "24h") {
      return "price_change_percentage_24h";
    }
    if (value === "7d") {
      return 'price_change_percentage_7d_in_currency';
    }
    if (value === 'currentPrice') {
      return 'current_price'
    }
    if (value === 'id') {
      return 'id'
    }
  }

  getTopCryptoCurrencies = async () => {
    console.log('getTopCryptoCurrencies()', this.state.settings.sortBy)
    const currency = this.props.selectedCurrency;
    try {

      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.settings.currency || currency}&order=${this.state.settings.sortBy || "market_cap_desc"}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      console.log( `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${this.state.settings.sortBy || "market_cap_asc"}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`)
      const currencyDisplayed = data[0].id;
      this.setState({ topCryptoCurrencies: data, currencyDisplayed, isLoading: false }, () => this.getCoinsMarketChart());
    } catch (error) {
      console.log(error)
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
      console.log(error, 'error')
      this.setState({ hasError: true, isLoading: false });
    }
  };

  getSortedMarketChart = async () => {
    const currency = this.props.selectedCurrency;
    const display = this.state.sortedList[0].id;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${display}/market_chart?vs_currency=${currency}&days=180&interval=daily`
      );
      const sortedMarketPriceArray = data.prices.map((item) => item[1]);
      const sortedMarketDateArray = data.prices.map((item) => item[0]);
      const sortedMarketVolumeArray = data.total_volumes.map((item) => item[1]);
      this.setState({
        sortedMarketDateArray,
        sortedMarketPriceArray,
        sortedMarketVolumeArray,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  handleSort = () => {
    const { sort } = this.state;
    const { topCryptoCurrencies } = this.state;
    const sortBy = this.sortNameChange(this.state.sortBy);

    const sortedList = [...topCryptoCurrencies].sort((a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];

      if (valueA < valueB) {
        return sort === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sort === "asc" ? 1 : -1;
      }
      return 0;
    });

    // this.setState({ sortedList, sortBy });
    this.setState({ topCryptoCurrencies: sortedList, sortBy });
  };

  handleClick = (id) => {
    if (this.state.sortBy === "") {
      this.setState({ sortBy: id }, this.handleSort);
    } else if (id === this.state.sortBy) {
      this.setState(
        (prevState) => ({ sort: prevState.sort === "desc" ? "asc" : "desc" }),
        this.handleSort
      );
    } else {
      this.setState({ sortBy: id, sort: "desc" }, this.handleSort);
    }
  };

  componentDidUpdate(prevProps, prevState){
    if(prevProps.location.search !== this.props.location.search){
      const settings = queryString.parse(this.props.location.search)
      this.setState({  settings });
      console.log('props changed', settings, this.props.location)
    }
    if(prevState.settings.sortBy !== this.state.settings.sortBy){
      console.log('state changed', this.state.settings)
      this.getTopCryptoCurrencies();
    }
  }

  componentDidMount() {
    const settings = queryString.parse(this.props.location.search)
    if(Object.keys(settings).length === 0){
      this.props.history.push(`/?currency=${this.props.selectedCurrency}&sortBy=market_cap_desc`)
    }
    this.setState({ isLoading: true });
    this.getTopCryptoCurrencies();
    // this.getCoinsMarketChart();
  }

  render() {
    console.log(this.state.currencyDisplayed, 'casper')
    return (
      <StyledCoinsPage>
          <ChartOverview
            currencyDisplayed={this.state.currencyDisplayed}
            topCryptoCurrencies={this.state.topCryptoCurrencies}
            coinsMarketVolumeArray={this.state.coinsMarketVolumeArray}
            coinsMarketDateArray={this.state.coinsMarketDateArray}
            coinsMarketPriceArray={this.state.coinsMarketPriceArray}
            selectedCurrency={this.props.selectedCurrency}
            currencySymbol={this.props.currencySymbol}
          />
          {/* <CoinsCont2> */}
          {/* <Overview>Market Overview</Overview> */}
          <TopCryptoCurrencies
              topCryptoCurrencies={this.state.topCryptoCurrencies}
              handleClick={this.handleClick}
              currencySymbol={this.props.currencySymbol}
              // topCoinsData={this.state.sortedList}
            />
          {/* {this.state.sortBy ? (
            <TopCryptoCurrencies
              topCoinsData={this.state.sortedList}
              handleClick={this.handleClick}
              currencySymbol={this.props.currencySymbol}
            />
          ) : (
            <TopCryptoCurrencies
              topCoinsData={this.props.topCryptoCurrencies}
              handleClick={this.handleClick}
              currencySymbol={this.props.currencySymbol}
            />
          )} */}
        {/* </CoinsCont2> */}
      </StyledCoinsPage>
    );
  }
}
