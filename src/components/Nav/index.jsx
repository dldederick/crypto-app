import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {
  StyledNav,
  TopNav,
  BottomNav,
  NavPages,
  NavOptions,
  StyledLink,
} from "./Nav.styles";
import ThemeSelect from "../ThemeSelect";
import CurrencySelect from "../CurrencySelect";
import SearchBar from "../SearchBar";

export default class Nav extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    selectedCurrency: "usd",
    currencies: [],
    activeCryptoCurrencies: 0,
    markets: 0,
    totalMarketCap: 0,
  };

  getActiveCryptoCurrencies = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      const activeCryptoCurrencies = data.data.active_cryptocurrencies;
      const markets = data.data.markets;
      const currencies = Object.keys(data.data.total_market_cap).map(key => key.toUpperCase());
      const totalMarketCap = data.data.total_market_cap[this.state.selectedCurrency];
      this.setState({
        activeCryptoCurrencies,
        markets,
        currencies,
        totalMarketCap,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  handleSelect = (key) => {
    const lowerCase = key.toLowerCase();
    this.setState({ selectedCurrency: lowerCase })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.selectedCurrency !== prevState.selectedCurrency) {
      this.getActiveCryptoCurrencies()
    }
  }

  componentDidMount() {
    this.getActiveCryptoCurrencies();
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
          <BottomNav>
            <div>Coins {this.state.activeCryptoCurrencies}</div>
            <div>Markets {this.state.markets}</div>
            <div>Total Market Cap {this.state.totalMarketCap} </div>
            <div>Total Volume</div>
            <div>Market Cap %</div>
            <div></div>
          </BottomNav>
      </StyledNav>
    );
  }
}
