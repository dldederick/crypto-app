import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  StyledNav,
  TopNav,
  NavPages,
  NavOptions,
  StyledLink,
} from "./Nav.styles";
import ThemeSelect from "../ThemeSelect";
import CurrencySelect from "../CurrencySelect";
import SearchBar from "../SearchBar";

import BottomNav from "../BottomNav";

export default class Nav extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    selectedCurrency: "usd",
    dominance: "btc",
    currencies: [],
    activeCryptoCurrencies: 0,
    markets: 0,
    totalMarketCap: 0,
    totalVolume: 0,
  };

  getGlobalCryptCurrencyData = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      const activeCryptoCurrencies = data.data.active_cryptocurrencies;
      const markets = data.data.markets;
      const currencies = Object.keys(data.data.total_market_cap).map((key) =>
        key.toUpperCase()
      );
      const totalMarketCap =
        data.data.total_market_cap[this.state.selectedCurrency];
      const totalVolume = data.data.total_volume[this.state.selectedCurrency];
      const dominance = data.data.market_cap_percentage.btc;
      this.setState({
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

  handleSelect = (key) => {
    const lowerCase = key.toLowerCase();
    this.setState({ selectedCurrency: lowerCase });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedCurrency !== prevState.selectedCurrency) {
      this.getGlobalCryptCurrencyData();
    }
  }

  componentDidMount() {
    this.getGlobalCryptCurrencyData();
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
            <SearchBar />
            <CurrencySelect
              currencyType={this.state.currencyType}
              currencies={this.state.currencies}
              handleSelect={this.handleSelect}
            />
            <ThemeSelect />
          </NavOptions>
        </TopNav>
        <BottomNav
          coins={this.state.activeCryptoCurrencies}
          exchange={this.state.markets}
          marketCap={this.state.totalMarketCap}
          volume={this.state.totalVolume}
          dominance={this.state.dominance}
        />
      </StyledNav>
    );
  }
}
