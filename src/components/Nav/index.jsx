import React from "react";
import { Link } from "react-router-dom";
import { StyledNav, TopNav, BottomNav, NavPages, NavOptions, StyledLink } from "./Nav.styles";
import ThemeSelect from "../ThemeSelect";
import CurrencySelect from '../CurrencySelect';
import SearchBar from "../SearchBar";

export default class Nav extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    currencyType: '',
    activeCryptoCurrencies: 0,
    markets: 0,
    totalMarketCap: 0,
  };

  getActiveCryptoCurrencies= async () => {
    try {
      const { data } = await axios('https://api.coingecko.com/api/v3/global');
      const activeCryptoCurrencies = data.data.active_cryptocurrencies;
      const markets = data.data.markets;
      // const totalMarketCap = data.data.
      this.setState({ activeCryptoCurrencies, markets, totalMarketCap, isLoading: false });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   this.getActiveCryptoCurrencies();
  // }

  render() {
    return (
      <StyledNav>
        <TopNav>
        <NavPages>
            <div>
              <StyledLink to="/coins">Coins</StyledLink>
            </div>
            <div>
              <StyledLink to="/portfolio">Portfolio</StyledLink>
            </div>
        </NavPages>
        <NavOptions>
          <SearchBar />
          <CurrencySelect />
          <ThemeSelect />
        </NavOptions>
        </TopNav>
        <BottomNav>
          <div>Coins {this.activeCryptoCurrencies}</div>
          <div>Markets {this.markets}</div>
          <div>Total Market Cap</div>
          <div>Total Volume</div>
          <div>Market Cap %</div>
          <div></div>
        </BottomNav>
      </StyledNav>
    );
  }
}
