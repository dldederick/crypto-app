import React from "react";
import { CurrencySelectStyles, MoneyImage, MoneyOptionsContainer, DropdownVector } from "./CurrencySelect.styles";
import DropDownMenu from '../DropDownMenu';

export default class CurrencySelect extends React.Component {
  state = {
    isClicked: false
  }

  handleClick = (e) => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked
    }))
  }

  render() {
    return (
      <CurrencySelectStyles>
        <MoneyImage>$</MoneyImage>
        <MoneyOptionsContainer>
          <span>USD</span>
          <DropdownVector onClick={this.handleClick}></DropdownVector>
          {this.state.isClicked && <DropDownMenu currencyType={this.props.currenctType} currencies={this.props.currencies} />}
        </MoneyOptionsContainer>
      </CurrencySelectStyles>
    );
  }
  
}
