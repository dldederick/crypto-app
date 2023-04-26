import React from "react";
import { StyledSearchMenu, SuggestedCoin } from "./SearchMatches.styles";

export default function SearchMatches(props) {
  const filteredList = props.coinsList?.filter((item) => {
    return item[0].toUpperCase().includes(props.filteredValue[0].toUpperCase());
  });
  return (
    <StyledSearchMenu>
      {filteredList?.map((item) => {
        return <SuggestedCoin key={item}>{item}</SuggestedCoin>;
      })}
    </StyledSearchMenu>
  );
}
