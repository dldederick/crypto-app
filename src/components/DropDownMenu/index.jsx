import React from "react";
import { StyledDropDown } from "./DropDownMenu.styles";

export default function DropDownMenu(props) {
  return (
    <StyledDropDown>
      <input placeholder='Search'></input>
      <div>
        {props.currencyType &&
          props.currencies.map(([key, value]) => {
            return <div>{key}</div>;
          })}
      </div>
    </StyledDropDown>
  );
}
