import React from "react";
import {
  StyledPopUpMatches,
  SuggestedCoin,
  SuggestedCoinLink,
} from "./PopUpMatches.styles";

export default function PopUpMatches(props) {
  const filteredList = props.coinsList?.filter((item) => {
    return item.toUpperCase().includes(props.filteredValue.toUpperCase());
  });

  const handleRemoveSearch = () => {
    props.handleRemoveSearch();
  }

  return (
    <StyledPopUpMatches>
      {filteredList?.map((item) => {
        return (
          <SuggestedCoin key={item}>
            <SuggestedCoinLink to={`/coin/${item.toLowerCase()}`} onClick={handleRemoveSearch}>{item}</SuggestedCoinLink>
          </SuggestedCoin>
        );
      })}
    </StyledPopUpMatches>
  );
}
