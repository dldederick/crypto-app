import React from "react";
import axios from "axios";
import CoinDataChart from "../CoinDataChart";
import {
  StyledCoinInfo,
  SummaryWrapper,
  CoinCont,
  CoinName,
  CoinLink,
  CoinHighlights,
  CoinSupplyData,
  CoinMarketVolumeData,
  DescriptionWrapper,
  LinkWrapper,
  ConvertCont,
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
  ConvertIcon,
  ConvertCurrencyOne,
  ConvertCurrencyTwo,
  Link1,
  Link2,
  Link3,
} from "./CoinInfoPage.styles";
import { readableNum, convertDate, roundedPercentage } from "../../Utils";

export default class CoinsInfoPage extends React.Component {
  state = {
    coinInfo: {},
    isLoading: false,
    hasError: false,
    periodSelected: 7,
    coinMarketDateArray: [],
    coinMarketPriceArray: [],
    isSelected: '7d'
  };

  convertStringPeriod(id) {
    if (id === "1d") {
      return 1
    }
    if (id === "7d") {
      return 7
    }
    if (id === "30d") {
      return 30
    }
    if (id === "90d") {
      return 90
    }
    if (id === "1y") {
      return 365
    }
    if (id === "MAX") {
      return 'max'
    }
  }

  getCoinInfo = async (id) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      this.setState({ coinInfo: data, isLoading: false });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  getCoinMarketChart = async (period) => {
    period = this.state.periodSelected;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${period}&interval=daily`
      );
      const coinMarketPriceArray = data.prices.map((item) => item[1]);
      const coinMarketDateArray = data.prices.map((item) => item[0]);
      this.setState({
        coinMarketDateArray,
        coinMarketPriceArray,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  handleClick = (id) => {
    const newPeriod = this.convertStringPeriod(id);
    this.setState({ periodSelected: newPeriod, isSelected: id })
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.periodSelected !== this.state.periodSelected) {
      this.getCoinMarketChart(this.state.periodSelected);
    }
  }

  componentDidMount() {
    this.getCoinInfo(this.props.coinClicked);
    this.getCoinMarketChart(this.state.periodSelected);
  }

  render() {
    const info = this.state.coinInfo;
    const timePeriods = ["1d", "7d", "30d", "90d", "1y", "MAX"];
    // console.log(info);
    return (
      <StyledCoinInfo>
        <ConvertCont>
          <ConvertCurrencyOne>
            <div>USD</div>
            <input value={info.market_data?.current_price?.usd}></input>
          </ConvertCurrencyOne>
          <ConvertIcon onClick={this.handleConversion}></ConvertIcon>
          <ConvertCurrencyTwo>
            <input value={info.market_data?.current_price?.btc}></input>
            <div>BTC</div>
          </ConvertCurrencyTwo>
        </ConvertCont>
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
                      All Time High: ${readableNum(info.market_data?.ath?.btc)}
                    </div>
                    <div>{convertDate(info.market_data?.ath_date?.btc)}</div>
                  </CoinAth>
                  <CoinAtl>
                    <div>
                      All Time Low: ${readableNum(info.market_data?.atl?.btc)}
                    </div>
                    <div>{convertDate(info.market_data?.atl_date?.btc)}</div>
                  </CoinAtl>
                </div>
              </CoinHighlights>
              <CoinMarketVolumeData>
                <div>
                  <div>Market Cap Rank: {info.market_cap_rank}</div>
                  <div>
                    Market Cap: {readableNum(info.market_data?.market_cap?.btc)}
                  </div>
                  <div>
                    Total Volume:{" "}
                    {readableNum(info.market_data?.total_volume?.btc)}
                  </div>
                </div>
                <CoinMarketVolumeBar>
                  <CoinMarketVolumePercent>
                    <div>{readableNum(info.market_data?.market_cap?.btc)}</div>
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
                  <Circle onClick={() => this.handleClick(item)} isSelected={this.state.isSelected} item={item}></Circle>
                  <p>{item}</p>
                </Period>
              ))}
            </TimePeriod>
            <CoinDataChart
              coinInfo={info}
              marketPrices={this.state.coinMarketPriceArray}
              marketDates={this.state.coinMarketDateArray}
            />
          </CoinInfoCont>
        </SummaryWrapper>
        <DescriptionWrapper>{info.description?.en}</DescriptionWrapper>
        <LinkWrapper>
          <Link1>
            <div></div>
            <div>{info.links?.homepage[0]}</div>
            <div></div>
          </Link1>
          <Link2>
            <div></div>
            <div>{info.links?.blockchain_site[0]}</div>
            <div></div>
          </Link2>
          <Link3>
            <div></div>
            <div>{info.links?.blockchain_site[1]}</div>
            <div></div>
          </Link3>
        </LinkWrapper>
      </StyledCoinInfo>
    );
  }
}
