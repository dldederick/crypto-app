import React from "react";
import DropDownMenu from '../DropDownMenu';
import { CurrencySelectStyles, MoneyImage, MoneyOptionsContainer, DropdownVector } from "./CurrencySelect.styles";

export default class CurrencySelect extends React.Component {
  state = {
    isClicked: false,
    selectedCurrency: 'USD',
  }

  handleClick = (e) => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked
    }))
  }

  handleSelect = (key) => {
    this.setState({ selectedCurrency: key });
    this.handleClick();
    this.props.handleSelect(key);
  }

  render() {
    return (
      <CurrencySelectStyles onClick={this.handleClick}>
        <MoneyImage>$</MoneyImage>
        <MoneyOptionsContainer >
          <span >{this.state.selectedCurrency}</span>
          <DropdownVector onClick={this.handleClick}></DropdownVector>
          {this.state.isClicked && <DropDownMenu handleSelect={this.handleSelect} currencyType={this.props.currencyType} currencies={this.props.currencies}  />}
        </MoneyOptionsContainer>
      </CurrencySelectStyles>
    );
  }
  
}
