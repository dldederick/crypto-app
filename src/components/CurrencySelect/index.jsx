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
    handleClick;
  };

  console.log(isClicked, "hello");
  return (
    <CurrencySelectStyles>
      <CoinSelected>${selectedCurrency}</CoinSelected>
      <DropdownVector onClick={handleClick}></DropdownVector>
      {isClicked && (
        <DropDownMenu
          handleSelect={handleSelect}
          listOfCurrencies={props.listOfCurrencies}
        />
      )}
    </CurrencySelectStyles>
  );
};

export default CurrencySelect;
