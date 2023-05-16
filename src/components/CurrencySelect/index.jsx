import React, { useState } from "react";
import DropDownMenu from "../DropDownMenu";
import {
  CurrencySelectStyles,
  CoinSelected,
  DropdownVector,
} from "./CurrencySelect.styles";

const CurrencySelect = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleClick = (e) => {
    setIsClicked(!isClicked);
  };

  const handleSelect = (key) => {
    setSelectedCurrency(key.toUpperCase());
    props.handleSelect(key);
    handleClick();
  };

  console.log(isClicked, "hello");
  return (
    <CurrencySelectStyles>
      <CoinSelected>{props.currencySymbol}{selectedCurrency}</CoinSelected>
      <DropdownVector onClick={handleClick}></DropdownVector>
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
  );
};

export default CurrencySelect;
