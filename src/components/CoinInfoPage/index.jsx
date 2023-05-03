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
  Link3
} from "./CoinInfoPage.styles";
import { readableNum, convertDate, roundedPercentage } from "../../Utils";

export default class CoinsInfoPage extends React.Component {
  state = {
    coinInfo: {},
    isLoading: false,
    hasError: false,
    periodSelected: ''
  };

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

//   handleConversion() {
//     this
//   }

handleClick = (id) => {
    this.setState({ periodSelected: id })
}

  componentDidMount() {
    this.getCoinInfo(this.props.coinClicked);
  }

  render() {
    const info = this.state.coinInfo;
    const timePeriods = ["1d", "7d", "30d", "90d", "1y", "MAX"];
    console.log(info);
    return (
      <StyledCoinInfo>
        <ConvertCont>
          <ConvertCurrencyOne>
            <div>USD</div>
            <input></input>
          </ConvertCurrencyOne>
          <ConvertIcon onClick={this.handleConversion}></ConvertIcon>
          <ConvertCurrencyTwo>
            <input></input>
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
                  <div>{readableNum(info.market_data?.total_volume?.btc)}</div>
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
                  {readableNum(info.market_data?.fully_diluted_valuation?.btc)}
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
                  <div>{readableNum(info.market_data?.circulating_supply)}</div>
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
                  <Circle onClick={() => this.handleClick(item)}></Circle>
                  <p>{item}</p>
                </Period>
              ))}
            </TimePeriod>
            <CoinDataChart coinInfo={info} marketPrices={this.props.marketPrices} marketPriceDates={this.props.marketPriceDates} />
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
