import React, { useState } from "react";
import { useEffect } from "react";
import DropDownMenu from "../DropDownMenu";
import {
  CurrencySelectStyles,
  CoinSelected,
} from "./CurrencySelect.styles";

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
  );
};

export default CurrencySelect;
