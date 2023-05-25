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
    page: 1
  };

  getTopCryptoCurrencies = async () => {
    const currency = this.props.selectedCurrency;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.settings.currency || currency}&per_page=50&page=${this.state.page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      console.log( `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.settings.currency || currency}&per_page=50&page=${this.state.page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`)
      
      const sortBy = this.state.settings.sortBy;
      const sort = this.state.settings.sort;
      const topCryptoCurrencies = data.sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];

        if (valueA < valueB){
          return sort === 'desc' ? 1 : -1;
        }
        if (valueA > valueB){
          return sort === 'desc' ? -1 : 1;
        }
        return 0
      })
      const currencyDisplayed = topCryptoCurrencies[0].id;
      this.setState({ topCryptoCurrencies, currencyDisplayed, isLoading: false }, () => this.getCoinsMarketChart());
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
  
  handleClick = (id) => {
    const sortBy = this.sortNameChange(id);
    const currency = this.props.selectedCurrency;
    let sort = "desc";
  
    if (sortBy === this.state.settings.sortBy) {
      sort = this.state.settings.sort === "desc" ? "asc" : "desc";
    }
  
    const settings = { currency, sortBy, sort };
    const setUrl = queryString.stringify(settings);
    this.props.history.push(`?${setUrl}`);
  };
  
  handleFetchData = async () => {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage, isLoading: true });
  
    try {
      const currency = this.props.selectedCurrency;
      const sortBy = this.state.settings.sortBy || "market_cap_desc";
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sortBy}&per_page=50&page=${newPage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
  
      const updatedTopCryptoCurrencies = [...this.state.topCryptoCurrencies, ...data];
      this.setState({ topCryptoCurrencies: updatedTopCryptoCurrencies, isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ hasError: true, isLoading: false });
    }
  };
  
  componentDidUpdate(prevProps, prevState){
    if(prevProps.location.search !== this.props.location.search){
      const settings = queryString.parse(this.props.location.search)
      this.setState({  settings });
      console.log('props changed', settings, this.props.location)
    }

    if(prevState.settings !== this.state.settings){
      console.log('state changed', this.state.settings);
      this.getTopCryptoCurrencies();
    }
  };

  componentDidMount() {
    const settings = queryString.parse(this.props.location.search)
    if(Object.keys(settings).length === 0){
      this.props.history.push(`/?currency=${this.props.selectedCurrency}&sortBy=market_cap&sort=desc`);
    }
    console.log(settings, 'first settings')
    this.setState({ settings });
    this.getTopCryptoCurrencies();
  }

  render() {
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
          <TopCryptoCurrencies
              topCryptoCurrencies={this.state.topCryptoCurrencies}
              handleClick={this.handleClick}
              currencySymbol={this.props.currencySymbol}
              handleFetchData={this.handleFetchData}
            />
      </StyledCoinsPage>
    );
  }
}
 