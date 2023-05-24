import React from "react";
import {
  StyledSearchMenu,
  SuggestedCoin,
  SuggestedCoinLink,
} from "./SearchMatches.styles";

export default function SearchMatches(props) {
  const filteredList = props.coinsList?.filter((item) => {
    return item[0].toUpperCase().includes(props.filteredValue[0].toUpperCase());
  });

  const handleClick = () => {
    props.handleClick();
  }

  return (
    <StyledSearchMenu>
      {filteredList?.map((item) => {
        return (
          <SuggestedCoin key={item}>
            <SuggestedCoinLink to={`/coin/${item.toLowerCase()}`} onClick={handleClick}>{item}</SuggestedCoinLink>
          </SuggestedCoin>
        );
      })}
    </StyledSearchMenu>
  );
}
