import React from "react";
import { Link } from "react-router-dom";
import { StyledNav, TopNav, BottomNav, NavPages, NavOptions, StyledLink } from "./Nav.styles";
import ThemeSelect from "../ThemeSelect";
import CurrencySelect from '../CurrencySelect';
import SearchBar from "../SearchBar";

export default class Nav extends React.Component {
  state = {};

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
          <div>Coins {this.props.activeCryptoCurrencies}</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </BottomNav>
      </StyledNav>
    );
  }
}
