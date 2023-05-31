import React, { useState } from "react";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import DropDownMenu from "../DropDownMenu";
import {
  CurrencySelectStyles,
  CoinSelected,
} from "./CurrencySelect.styles";
import { darkTheme, lightTheme } from "../../App.styles";

const CurrencySelect = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked, "selectPage");
  };

  const handleSelect = (key) => {
    setSelectedCurrency(key.toUpperCase());
    props.handleSelect(key);
    handleClick();
  };

  useEffect(() => {
    setSelectedCurrency(props.selectedCurrency.toUpperCase());
  }, [props.selectedCurrency]);

  return (
    <ThemeProvider theme={props.darkMode ? darkTheme : lightTheme}>
      <CurrencySelectStyles>
        <CoinSelected onClick={handleClick}
        darkMode={props.darkMode}
        className="coin-selected">
          {props.currencySymbol} {selectedCurrency}
        </CoinSelected>
        {isClicked && (
          <DropDownMenu
            handleSelect={handleSelect}
            listOfCurrencies={props.listOfCurrencies}
            isClicked={isClicked}
            handleClick={handleClick}
            currencySymbol={props.currencySymbol}
          />
        )}
      </CurrencySelectStyles>
    </ThemeProvider>
  );
};

export default CurrencySelect;
