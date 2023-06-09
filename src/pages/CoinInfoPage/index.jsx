import React, { useEffect, useState } from "react";
import axios from "axios";
import CoinDataChart from "../../components/CoinDataChart";
import TimePeriodSelect from "../../components/TimePeriodSelect";
import getSymbolFromCurrency from "currency-symbol-map";
import LinkWrapper from "../../components/LinkWrapper";
import CoinInfoCont from "../../components/CoinInfoCont";
import CurrencyConvert from "../../components/CurrencyConvert";
import {
  StyledCoinInfo,
  CoinInfoWrapper,
  SummaryWrapper,
  DescriptionWrapper,
  CoinInfoHeader,
  CoinInfoSummary,
  AltCoinDataChart,
} from "./CoinInfoPage.styles";

const CoinInfoPage = (props) => {
  const [coinInfo, setCoinInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [periodSelected, setPeriodSelected] = useState(7);
  const [coinMarketDateArray, setCoinMarketDateArray] = useState([]);
  const [coinMarketPriceArray, setCoinMarketPriceArray] = useState([]);
  const [isSelected, setIsSelected] = useState("7d");

  const info = coinInfo;
  const symbol = info.symbol;
  const currency = props.selectedCurrency;
  const selectedCoinSymbol = getSymbolFromCurrency(symbol);
  const selectedCurrencySymbol = getSymbolFromCurrency(currency);

  const convertStringPeriod = (id) => {
    if (id === "1d") {
      return 1;
    }
    if (id === "7d") {
      return 7;
    }
    if (id === "30d") {
      return 30;
    }
    if (id === "90d") {
      return 90;
    }
    if (id === "1y") {
      return 365;
    }
    if (id === "MAX") {
      return "max";
    }
  };

  const getCoinInfo = async (id) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${id}?&market_data=true&community_data=true`
      );
      setCoinInfo(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const getCoinMarketChart = async () => {
    const currency = props.selectedCurrency;
    const id = props.match.params.coinId;
    const period = periodSelected;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${period}&interval=daily`
      );
      setCoinMarketPriceArray(data.prices.map((item) => item[1]));
      setCoinMarketDateArray(data.prices.map((item) => item[0]));
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleClick = (item) => {
    const newPeriod = convertStringPeriod(item);
    setPeriodSelected(newPeriod);
    setIsSelected(item);
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.periodSelected !== this.state.periodSelected) {
  //     this.getCoinMarketChart(this.state.periodSelected);
  //   }
  //   if (prevProps.match.params.coinId !== this.props.match.params.coinId) {
  //     this.getCoinInfo(this.props.match.params.coinId);
  //   }
  // }

  useEffect(() => {
    getCoinMarketChart(periodSelected);
  }, [periodSelected]);

  useEffect(() => {
    getCoinInfo(props.match.params.coinId);
  }, [props.match.params.coinId]);

  // componentDidMount() {
  //   this.getCoinInfo(this.props.match.params.coinId);
  //   this.getCoinMarketChart();
  // }

  useEffect(() => {
    getCoinInfo(props.match.params.coinId);
    getCoinMarketChart();
  }, []);

  return (
    <StyledCoinInfo>
      <CoinInfoWrapper>
        <CurrencyConvert
          info={coinInfo}
          selectedCoinSymbol={selectedCoinSymbol}
          selectedCurrencySymbol={selectedCurrencySymbol}
          symbol={symbol}
          currency={currency}
        />
        <SummaryWrapper>
          <CoinInfoHeader>
            <CoinInfoSummary>Coin Summary</CoinInfoSummary>
          </CoinInfoHeader>
          <CoinInfoCont
            info={coinInfo}
            isSelected={isSelected}
            coinMarketPriceArray={coinMarketPriceArray}
            coinMarketDateArray={coinMarketDateArray}
            handleClick={handleClick}
            isSmallScreen={props.isSmallScreen}
          />
        </SummaryWrapper>
        <DescriptionWrapper>{info.description?.en}</DescriptionWrapper>
        <LinkWrapper links={info.links} darkMode={props.darkMode} />
        {props.isSmallScreen && (
          <AltCoinDataChart>
            <TimePeriodSelect
              isSelected={isSelected}
              handleClick={handleClick}
            />
            <CoinDataChart
              coinInfo={info}
              marketPrices={coinMarketPriceArray}
              marketDates={coinMarketDateArray}
            />
          </AltCoinDataChart>
        )}
      </CoinInfoWrapper>
    </StyledCoinInfo>
  );
};

export default CoinInfoPage;
