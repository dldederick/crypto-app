import React from "react";
import { CurrencySelectStyles, MoneyImage, MoneyOptionsContainer, DropdownVector } from "./CurrencySelect.styles";

export default function CurrencySelect() {
  return (
    <CurrencySelectStyles>
      <MoneyImage>$</MoneyImage>
      <MoneyOptionsContainer>
        <span>USD</span>
        <DropdownVector>
            <img></img>
        </DropdownVector>
      </MoneyOptionsContainer>
    </CurrencySelectStyles>
  );
}
