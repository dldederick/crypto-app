import React from "react";
import ThemeSelect from "../ThemeSelect";
import CurrencySelect from "../CurrencySelect";
import SearchBar from "../SearchBar";
import { StyledNavOptions } from "./NavOptions.styles";

export default function NavOptions(props) {
    return (
      <StyledNavOptions>
        <SearchBar
          coinsList={props.coinsList}
          handleSubmit={props.handleSubmit}
        />
        <CurrencySelect
          listOfCurrencies={props.listOfCurrencies}
          handleSelect={props.handleSelect}
          currencySymbol={props.currencySymbol}
          selectedCurrency={props.selectedCurrency}
          darkMode={props.darkMode}
        />
        <ThemeSelect
          handleClick={props.handleClick}
          darkMode={props.darkMode}
        />
      </StyledNavOptions>
    );
  }
