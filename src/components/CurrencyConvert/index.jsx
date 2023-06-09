import React from 'react';
import { StyledCurrencyConvert, ConvertCurrencyOne, ConvertIcon, ConvertCurrencyTwo } from './CurrencyConvert.styles'

const CurrencyConvert = (props) => {
    return(
        <StyledCurrencyConvert>
              <ConvertCurrencyOne>
                <div>{props.symbol?.toUpperCase()}</div>
                <input
                  value={`${props.selectedCoinSymbol}${props.info.market_data?.current_price[props.symbol]}`}
                ></input>
              </ConvertCurrencyOne>
              <ConvertIcon></ConvertIcon>
              <ConvertCurrencyTwo>
                <input
                  value={`${props.selectedCurrencySymbol}${props.info.market_data?.current_price[props.currency]}`}
                ></input>
                <div>{props.currency?.toUpperCase()}</div>
              </ConvertCurrencyTwo>
            </StyledCurrencyConvert>
    )
}
export default CurrencyConvert;