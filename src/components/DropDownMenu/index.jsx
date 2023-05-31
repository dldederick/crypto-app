import React, { useState, useEffect, useRef } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import {
  StyledDropDown,
  CurrencyList,
  CurrencyListItems,
} from "./DropDownMenu.styles";

const DropDownMenu = (props) => {
  const [ filteredValue, setFilteredValue ] = useState('');

  const dropdownRef = useRef(null);

  const filteredList = filteredValue
      ? props.listOfCurrencies.filter((item) =>
          item.toUpperCase().includes(filteredValue.toUpperCase())
        )
      : props.listOfCurrencies.map(item => item.toUpperCase());

  const handleSelect = (key) => {
    props.handleSelect(key);
  };

  const handleChange = (e) => {
    const upperCase = e.target.value.toUpperCase();
    setFilteredValue(upperCase)
  };

  const handleWindowClick = (e) => {
    if (dropdownRef.current && props.isClicked && !dropdownRef.current.contains(e.target) &&
    !e.target.classList.contains("coin-selected")) {
      props.handleClick();
    }
  };
  
  useEffect(() => {
    document.addEventListener("mousedown", handleWindowClick);
  }, [])

  console.log(props.isClicked, 'dropDown')

    return (
      <StyledDropDown id="drop-down" ref={dropdownRef}>
        <input
          placeholder="Search"
          onChange={handleChange}
          value={filteredValue}
        ></input>
        <CurrencyList>
          {filteredList.map((key) => {
            return (
              <CurrencyListItems
                key={key}
                onClick={() => handleSelect(key)}
              >
                {getSymbolFromCurrency(key)} {key.toUpperCase()}
              </CurrencyListItems>
            );
          })}
        </CurrencyList>
      </StyledDropDown>
    );
  }
export default DropDownMenu;