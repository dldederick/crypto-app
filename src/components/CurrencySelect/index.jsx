import React from "react";
import { CurrencySelectStyles, MoneyImage, MoneyOptionsContainer, DropdownVector } from "./CurrencySelect.styles";
import DropDownMenu from '../DropDownMenu';

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
      <CurrencySelectStyles>
        <MoneyImage>$</MoneyImage>
        <MoneyOptionsContainer >
          <span onClick={this.handleClick}>{this.state.selectedCurrency}</span>
          <DropdownVector onClick={this.handleClick}></DropdownVector>
          {this.state.isClicked && <DropDownMenu handleSelect={this.handleSelect} currencyType={this.props.currencyType} currencies={this.props.currencies}  />}
        </MoneyOptionsContainer>
      </CurrencySelectStyles>
    );
  }
  
}
