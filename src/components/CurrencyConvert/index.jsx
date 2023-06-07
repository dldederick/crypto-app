import React from 'react';
import { StyledCurrencyConvert, ConvertCurrencyOne, ConvertIcon, ConvertCurrencyTwo } from './CurrencyConvert.styles'

const CurrencyConvert = (props) => {
    return(
        <StyledCurrencyConvert>
              <ConvertCurrencyOne>
                <div>{symbol?.toUpperCase()}</div>
                <input
                  value={`${selectedCoinSymbol}${info.market_data?.current_price[symbol]}`}
                ></input>
              </ConvertCurrencyOne>
              <ConvertIcon></ConvertIcon>
              <ConvertCurrencyTwo>
                <input
                  value={`${selectedCurrencySymbol}${info.market_data?.current_price[currency]}`}
                ></input>
                <div>{currency?.toUpperCase()}</div>
              </ConvertCurrencyTwo>
            </StyledCurrencyConvert>
    )
}