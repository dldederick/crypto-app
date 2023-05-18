import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import {
  StyledDropDown,
  CurrencyList,
  CurrencyListItems,
} from "./DropDownMenu.styles";

export default class DropDownMenu extends React.Component {
  state = {
    filteredValue: "",
  };

  handleSelect = (key) => {
    this.props.handleSelect(key);
  };

  handleChange = (e) => {
    const upperCase = e.target.value.toUpperCase();
    this.setState({ filteredValue: upperCase });
  };

  // handleWindowClick = (e) => {
  //   const dropDown = document.getElementById('drop-down');
  //   if (dropDown && !dropDown.contains(e.target)) {
  //     this.props.handleClick()
  //   }
  // }

  // componentDidMount(){
  //   document.addEventListener('click', this.handleWindowClick)
  // }

  // componentWillUnmount(){
  //   document.removeEventListener('click', this.handleWindowClick)
  // }

  render() {
    const filteredList = this.state.filteredValue
      ? this.props.listOfCurrencies.filter((item) =>
          item.toUpperCase().includes(this.state.filteredValue.toUpperCase())
        )
      : this.props.listOfCurrencies.map(item => item.toUpperCase());

    return (
      <StyledDropDown id="drop-down">
        <input
          placeholder="Search"
          onChange={this.handleChange}
          value={this.state.filteredValue}
        ></input>
        <CurrencyList>
          {filteredList.map((key) => {
            return (
              <CurrencyListItems
                key={key}
                onClick={() => this.handleSelect(key)}
              >
                {getSymbolFromCurrency(key)} {key.toUpperCase()}
              </CurrencyListItems>
            );
          })}
        </CurrencyList>
      </StyledDropDown>
    );
  }
}
