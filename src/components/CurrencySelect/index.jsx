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
    // this.setState({ isClicked: true })
  }

  handleSelect = (key) => {
    this.setState({ selectedCurrency: key });
    this.props.handleSelect(key);
    this.handleClick();
  }

  render() {
    console.log(this.state.isClicked, 'hello')
    return (
      <CurrencySelectStyles onClick={this.handleClick}>
        <MoneyImage>$</MoneyImage>
        <MoneyOptionsContainer >
          <span>{this.state.selectedCurrency}</span>
          <DropdownVector></DropdownVector>
          {this.state.isClicked && <DropDownMenu handleSelect={this.handleSelect} listOfCurrencies={this.props.listOfCurrencies}  />}
        </MoneyOptionsContainer>
      </CurrencySelectStyles>
    );
  }
  
}
