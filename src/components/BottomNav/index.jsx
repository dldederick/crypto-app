import React from "react";
import { StyledBottomNav } from "./BottomNav.styles";
import { readableNum } from "../../Utils";

export default function BottomNav(props) {

    const bottomNavData = {
        'Coins': props.coins,
        'Exchange': props.exchange,
        'Market Cap': readableNum(props.marketCap),
        'Volume': readableNum(props.volume),
        'Dominance': `BTC ${Math.round(props.dominance)}%`
    }

  return (
    <StyledBottomNav>
      {Object.entries(bottomNavData).map(([key, value])=> {
        return(
        <div>
            <span>{key} </span><a>{value}</a>
        </div>
      )})}
    </StyledBottomNav>
  );
}