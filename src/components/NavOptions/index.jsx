import React, { useState } from "react";
import ThemeSelect from "../ThemeSelect";
import CurrencySelect from "../CurrencySelect";
import SearchBar from "../SearchBar";
import { StyledNavOptions, NavCurrentPage, AltNav } from "./NavOptions.styles";

export default function NavOptions(props) {
  
  return (
    <StyledNavOptions>
      <NavCurrentPage>
        <div>{props.currentPage}</div>
      </NavCurrentPage>
      <SearchBar
        coinsList={props.coinsList}
        handleSubmit={props.handleSubmit}
      />
      <AltNav>
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
      </AltNav>
    </StyledNavOptions>
  );
}
