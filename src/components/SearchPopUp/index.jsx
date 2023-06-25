import React, { useEffect, useState, useRef } from "react";
import PopUpMatches from "../PopUpMatches";
import { StyledSearchPopUp } from "./SearchPopUp.styles";

export default function SearchPopUp(props) {
  const [filteredValue, setFilteredValue] = useState("");

  const searchPopUpRef = useRef(null);

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

  const handleWindowClick = (e) => {
    if (searchPopUpRef.current && !searchPopUpRef.current.contains(e.target)) {
      handleRemoveSearch();
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      handleWindowClick(e);
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <StyledSearchPopUp darkMode={props.darkMode}>
      <form onSubmit={handleSubmit} ref={searchPopUpRef}>
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
