import React, { useState } from "react";
import { StyledSearchPopUp } from "./SearchPopUp.styles";
import PopUpMatches from "../PopUpMatches";

export default function SearchPopUp(props) {
  const [filteredValue, setFilteredValue] = useState("");

  const hasLength = filteredValue.length > '' ? true : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(filteredValue)
  };

  const handleChange = (e) => {
    setFilteredValue(e.target.value)
  };

  const handleRemoveSearch = () => {
    setFilteredValue('');
    props.handleRemoveSearch()
  }

  return (
    <StyledSearchPopUp darkMode={props.darkMode}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search coins..."
          onChange={handleChange}
          value={filteredValue}
          hasLength={hasLength}
        ></input>
        {hasLength && (
          <PopUpMatches
            coinsList={props.coinsList}
            filteredValue={filteredValue}
            handleRemoveSearch={handleRemoveSearch}
          />
        )}
      </form>
    </StyledSearchPopUp>
  );
}
