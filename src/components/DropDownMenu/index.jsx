import React from "react";
import {
  StyledDropDown,
  CurrencyList,
  CurrencyListItems,
} from "./DropDownMenu.styles";

export default class DropDownMenu extends React.Component {
    state = {
        filteredValue: ''
    }

  handleSelect = (key) => {
    this.props.handleSelect(key);
  };

    handleChange = (e) => {
        this.setState({ filteredValue: e.target.value})
  }

  render() {
    const filteredList = this.state.filteredValue
    ? this.props.currencies.filter((item) =>
        item.toLowerCase().includes(this.state.filteredValue.toLowerCase())
      )
    : this.props.currencies;
  
    return (
      <StyledDropDown>
        <input placeholder="Search" onChange={this.handleChange} value={this.state.filteredValue} ></input>
        <CurrencyList>
          {filteredList.map((key) => {
            return (
              <CurrencyListItems key={key} onClick={() => this.handleSelect(key)}>
                {key}
              </CurrencyListItems>
            );
          })}
        </CurrencyList>
      </StyledDropDown>
    );
  }
  
}
