import React from "react";
import axios from "axios";
import ThemeSelect from "../ThemeSelect";
import CurrencySelect from "../CurrencySelect";
import SearchBar from "../SearchBar";
import BottomNav from "../BottomNav";
import {
  StyledNav,
  TopNav,
  NavPages,
  NavOptions,
  StyledLink,
} from "./Nav.styles";


export default class Nav extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    searchedCoin: '',
    dominance: "btc",
    currencies: [],
    activeCryptoCurrencies: 0,
    markets: 0,
    totalMarketCap: 0,
    totalVolume: 0,
    coinsList: [],
    everything: []
  };

  getGlobalCryptoCurrencyData = async () => {
    try {
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      const everything = data;
      const activeCryptoCurrencies = data.data.active_cryptocurrencies;
      const markets = data.data.markets;
      const currencies = Object.keys(data.data.total_market_cap).map((key) =>
        key.toUpperCase()
      );
      const totalMarketCap =
        data.data.total_market_cap[this.props.selectedCurrency];
      const totalVolume = data.data.total_volume[this.props.selectedCurrency];
      const dominance = data.data.market_cap_percentage.btc;
      this.setState({
        everything,
        activeCryptoCurrencies,
        markets,
        currencies,
        totalMarketCap,
        totalVolume,
        dominance,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  getCoinsList = async () => {
    try {
      const { data } = await axios(`https://api.coingecko.com/api/v3/coins/list`);
      const coinsList = data.map(obj => obj.name);
      this.setState({ coinsList, isLoading: false })
    } catch(error) {
      this.setState({ hasError: false, isLoading: false })
    }
  }
  
  handleClick = () => {
    this.props.handleClick()
  }

  handleSelect = (key) => {
    const lowerCase = key.toLowerCase();
    this.props.handleSelect(lowerCase)
  };

  handleSubmit = (item) => {
    this.setState({ searchedCoin: item })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedCurrency !== prevProps.selectedCurrency) {
      this.getGlobalCryptoCurrencyData();
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getGlobalCryptoCurrencyData();
    this.getCoinsList();
  }

  render() {
    return (
      <StyledNav>
        <TopNav>
          <NavPages>
            <div>
              <StyledLink to="/">Coins</StyledLink>
            </div>
            <div>
              <StyledLink to="/portfolio">Portfolio</StyledLink>
            </div>
          </NavPages>
          <NavOptions>
            <SearchBar coinsList={this.state.coinsList} handleSubmit={this.handleSubmit} />
            <CurrencySelect
              listOfCurrencies={this.props.listOfCurrencies}
              handleSelect={this.handleSelect}
              currencySymbol={this.props.currencySymbol}
              selectedCurrency={this.props.selectedCurrency}
              darkMode={this.props.darkMode}
            />
            <ThemeSelect handleClick={this.handleClick} darkMode={this.props.darkMode} />
          </NavOptions>
        </TopNav>
        <BottomNav
          coins={this.state.activeCryptoCurrencies}
          exchange={this.state.markets}
          marketCap={this.state.totalMarketCap}
          volume={this.state.totalVolume}
          dominance={this.state.dominance}
          currencySymbol={this.props.currencySymbol}
        />
      </StyledNav>
    );
  }
}
