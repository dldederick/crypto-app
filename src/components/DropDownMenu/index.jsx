import React from "react";
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

  // handleInputClick = (e) => {
  //   e.stopPropagation();
  // }

  render() {
    const filteredList = this.state.filteredValue
      ? this.props.listOfCurrencies.filter((item) =>
          item.toUpperCase().includes(this.state.filteredValue.toUpperCase())
        )
      : this.props.listOfCurrencies.map(item => item.toUpperCase());

    return (
      <StyledDropDown>
        <input
          placeholder="Search"
          onChange={this.handleChange}
          value={this.state.filteredValue}
          // onClick={this.handleInputClick}
        ></input>
        <CurrencyList>
          {filteredList.map((key) => {
            return (
              <CurrencyListItems
                key={key}
                onClick={() => this.handleSelect(key)}
              >
                {key.toUpperCase()}
              </CurrencyListItems>
            );
          })}
        </CurrencyList>
      </StyledDropDown>
    );
  }
}
