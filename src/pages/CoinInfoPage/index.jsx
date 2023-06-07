import React, { useEffect, useState } from "react";
import axios from "axios";
import getSymbolFromCurrency from "currency-symbol-map";
import CoinDataChart from "../../components/CoinDataChart";
import LinkWrapper from "../../components/LinkWrapper";
import CurrencyConvert from '../../components/CurrencyConvert';
import {
  readableNum,
  convertDate,
  roundedPercentage,
} from "../../Utils/math";
import {
  StyledCoinInfo,
  CoinInfoWrapper,
  SummaryWrapper,
  CoinCont,
  CoinName,
  CoinLink,
  CoinHighlights,
  CoinSupplyData,
  CoinMarketVolumeData,
  DescriptionWrapper,
  CoinInfoHeader,
  CoinInfoSummary,
  TimePeriod,
  CoinInfoCont,
  CoinPriceData,
  Circle,
  Period,
  CoinImage,
  CoinSupplyBar,
  CoinMarketVolumeBar,
  CoinSupplyBars,
  CoinMarketVolumeBars,
  CoinSupplyPercent,
  CoinMarketVolumePercent,
  CoinAth,
  CoinAtl,
 
} from "./CoinInfoPage.styles";
import { TopCurrencyCont } from "../../components/TopCryptoCurrencies/TopCryptoCurrencies.styles";

const CoinsInfoPage = (props) => {

  const [ coinInfo, setCoinInfo ] = useState({});
  const [ isLoading, setIsLoading ] = useState(false);
  const [ hasError, setHasError ] = useState(false);
  const [ periodSelected, setPeriodSelected ] = useState(7);
  const [ coinMarketDateArray, setCoinMarketDateArray ] = useState([]);
  const [ coinMarketPriceArray, setCoinMarketPriceArray ] = useState([]);
  const [ isSelected, setIsSelected ] = useState('7d');

    const info = coinInfo;
    const symbol = info.symbol;
    const currency = props.selectedCurrency;
    const selectedCoinSymbol = getSymbolFromCurrency(symbol);
    const selectedCurrencySymbol = getSymbolFromCurrency(currency);
    const timePeriods = ["1d", "7d", "30d", "90d", "1y", "MAX"];

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
  }

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

  const handleClick = (id) => {
    const newPeriod = convertStringPeriod(id);
    setPeriodSelected(newPeriod);
    setIsSelected(id);
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
    getCoinMarketChart(periodSelected)
  }, [periodSelected]);

  useEffect(() => {
    getCoinInfo(props.match.params.coinId)
  }, [props.match.params.coinId])

  // componentDidMount() {
  //   this.getCoinInfo(this.props.match.params.coinId);
  //   this.getCoinMarketChart();
  // }

 useEffect(() => {
  getCoinInfo(props.match.params.coinId);
  getCoinMarketChart()
 }, [])
    
    return (
        <StyledCoinInfo>
          <CoinInfoWrapper>
            <CurrencyConvert info={info} selectedCoinSymbol={selectedCoinSymbol} symbol={symbol} currency={currency} />
            <SummaryWrapper>
              <CoinInfoHeader>
                <CoinInfoSummary>Coin Summary</CoinInfoSummary>
              </CoinInfoHeader>
              <CoinInfoCont>
                <div>
                  <CoinCont>
                    <div>
                      <CoinImage image={info.image?.large}></CoinImage>
                      <CoinName>
                        {info.id &&
                          info.id.charAt(0).toUpperCase() + info.id.slice(1)}
                      </CoinName>
                    </div>
                    <CoinLink>{info.links?.homepage[0]}</CoinLink>
                  </CoinCont>
                  <CoinHighlights>
                    <CoinPriceData>
                      <div>
                        Current Price: $
                        {readableNum(info.market_data?.current_price?.btc)}
                      </div>
                      <div>
                        {readableNum(
                          info.market_data?.price_change_24h_in_currency?.btc
                        )}
                      </div>
                    </CoinPriceData>
                    <div>
                      <CoinAth>
                        <div>
                          All Time High: $
                          {readableNum(info.market_data?.ath?.btc)}
                        </div>
                        <div>
                          {convertDate(info.market_data?.ath_date?.btc)}
                        </div>
                      </CoinAth>
                      <CoinAtl>
                        <div>
                          All Time Low: $
                          {readableNum(info.market_data?.atl?.btc)}
                        </div>
                        <div>
                          {convertDate(info.market_data?.atl_date?.btc)}
                        </div>
                      </CoinAtl>
                    </div>
                  </CoinHighlights>
                  <CoinMarketVolumeData>
                    <div>
                      <div>Market Cap Rank: {info.market_cap_rank}</div>
                      <div>
                        Market Cap:{" "}
                        {readableNum(info.market_data?.market_cap?.btc)}
                      </div>
                      <div>
                        Total Volume:{" "}
                        {readableNum(info.market_data?.total_volume?.btc)}
                      </div>
                    </div>
                    <CoinMarketVolumeBar>
                      <CoinMarketVolumePercent>
                        <div>
                          {readableNum(info.market_data?.market_cap?.btc)}
                        </div>
                        <div>
                          {readableNum(
                            info.market_data?.total_volume?.btc /
                              info.market_data?.market_cap?.btc
                          )}
                          %
                        </div>
                        <div>
                          {readableNum(info.market_data?.total_volume?.btc)}
                        </div>
                      </CoinMarketVolumePercent>
                      <CoinMarketVolumeBars
                        supplyPercent={
                          roundedPercentage(
                            info.market_data?.total_volume?.btc /
                              info.market_data?.market_cap?.btc
                          ) * 100
                        }
                      >
                        <div></div>
                      </CoinMarketVolumeBars>
                    </CoinMarketVolumeBar>
                  </CoinMarketVolumeData>
                  <CoinSupplyData>
                    <div>
                      <div>
                        Fully Diluted Valuation: {""}
                        {readableNum(
                          info.market_data?.fully_diluted_valuation?.btc
                        )}
                      </div>
                      <div>
                        Circualting Supply:{" "}
                        {readableNum(info.market_data?.circulating_supply)}
                      </div>
                      <div>
                        Max Supply: {readableNum(info.market_data?.max_supply)}
                      </div>
                    </div>
                    <CoinSupplyBar>
                      <CoinSupplyPercent>
                        <div>
                          {readableNum(info.market_data?.circulating_supply)}
                        </div>
                        <div>
                          {readableNum(
                            info.market_data?.circulating_supply /
                              info.market_data?.max_supply
                          )}
                          %
                        </div>
                        <div>{readableNum(info.market_data?.max_supply)}</div>
                      </CoinSupplyPercent>
                      <CoinSupplyBars
                        supplyPercent={
                          roundedPercentage(
                            info.market_data?.circulating_supply /
                              info.market_data?.max_supply
                          ) * 100
                        }
                      >
                        <div></div>
                      </CoinSupplyBars>
                    </CoinSupplyBar>
                  </CoinSupplyData>
                </div>
                <TimePeriod>
                  {timePeriods.map((item) => (
                    <Period key={item}>
                      <Circle
                        onClick={() => handleClick(item)}
                        isSelected={isSelected}
                        item={item}
                      ></Circle>
                      <p>{item}</p>
                    </Period>
                  ))}
                </TimePeriod>
                <CoinDataChart
                  coinInfo={info}
                  marketPrices={coinMarketPriceArray}
                  marketDates={coinMarketDateArray}
                />
              </CoinInfoCont>
            </SummaryWrapper>
            <DescriptionWrapper>{info.description?.en}</DescriptionWrapper>
            <LinkWrapper links={info.links} darkMode={props.darkMode} />
          </CoinInfoWrapper>
        </StyledCoinInfo>
    );
  }

export default CoinsInfoPage;