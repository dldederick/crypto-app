import React from "react";
import { StyledGlobalCoins } from "./GlobalCoins.styles";
import { readableNum } from "../../Utils";

export default function BottomNav(props) {

    const globalCoinsData = {
        'Coins': props.coins,
        'Exchange': props.exchange,
        'Market Cap': readableNum(props.marketCap),
        'Volume': readableNum(props.volume),
        'BTC Dominance': `${Math.round(props.dominance)}%`
    }

  return (
    <StyledGlobalCoins>
      {Object.entries(globalCoinsData).map(([key, value])=> {
        if(key !== 'BTC Dominance'){
          return(
            <div key={key}>
                <span>{key}: </span><a>{props.currencySymbol}{value}</a>
            </div>
          )} else {
            return(
              <div key={key}>
                <span>{key}: </span><a>{value}</a>
            </div>
            )
          }
          })
        }
    </StyledGlobalCoins>
  );
}