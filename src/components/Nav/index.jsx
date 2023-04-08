import React from "react";
import { Link } from "react-router-dom";
import { StyledNav, NavPages, NavOptions } from "./Nav.styles";
import ThemeSelect from "../ThemeSelect";
import CurrencySelect from '../CurrencySelect';
import SearchBar from "../SearchBar";

export default class Nav extends React.Component {
  state = {};

  render() {
    return (
      <StyledNav>
        <NavPages>
            <div>
              <Link to="/coins">Coins</Link>
            </div>
            <div>
              <Link to="/portfolio">Portfolio</Link>
            </div>
        </NavPages>
        <NavOptions>
          <SearchBar />
          <CurrencySelect />
          <ThemeSelect />
        </NavOptions>
      </StyledNav>
    );
  }
}
