import React, { useState, useRef, useEffect } from "react";
import {
  StyledCurrencyConvert,
  ConvertCurrencyOne,
  ConvertIcon,
  ConvertCurrencyTwo,
  ConvertFromCont,
  ConvertToCont
} from "./CurrencyConvert.styles";

const CurrencyConvert = (props) => {
  const [coinAmount, setCoinAmount] = useState("");
  const [coinValue, setCoinValue] = useState("");

  const coinAmountRef = useRef(null);
  const coinValueRef = useRef(null);

  const currency = props.currency;
  const currentPrice = props.info.market_data?.current_price[currency];
  

  const handleChange = (e) => {
    if (coinAmountRef.current === e.target) {
      setCoinAmount(e.target.value);
      console.log(coinAmount, 'coinAmount')
    }
  };

  const handleConvert = () => {
    const coinConvert = coinAmount * currentPrice;
    setCoinValue(coinConvert)
  }

  useEffect(() => {
    handleConvert();
  }, [props.currency])

  return (
    <StyledCurrencyConvert>
      <ConvertCurrencyOne>
        <div>{props.symbol?.toUpperCase()}</div>
        <ConvertFromCont>
          <div>{props.selectedCoinSymbol}</div>
          <input ref={coinAmountRef} value={coinAmount} onChange={handleChange}></input>
        </ConvertFromCont>
      </ConvertCurrencyOne>
      <ConvertIcon onClick={handleConvert}></ConvertIcon>
      <ConvertCurrencyTwo>
        <ConvertToCont>
          <div>{props.selectedCurrencySymbol}</div>
          <input
          ref={coinValueRef}
          value={coinValue}
          onChange={handleChange}
        ></input>
        </ConvertToCont>
        <div>{props.currency?.toUpperCase()}</div>
      </ConvertCurrencyTwo>
    </StyledCurrencyConvert>
  );
};
export default CurrencyConvert;
