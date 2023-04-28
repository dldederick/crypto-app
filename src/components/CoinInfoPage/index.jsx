import React from "react";
import {
  StyledCoinInfo,
  SummaryWrapper,
  CoinCont,
  CoinName,
  CoinLink,
  CoinHighlights,
  CoinSpecfics,
  DescriptionWrapper,
  LinkWrapper,
  ConvertCont,
  CoinInfoHeader,
  CoinInfoSummary,
  TimePeriod,
  CoinInfoCont,
  Circle,
  Period,
  CoinImage
} from "./CoinInfoPage.styles";
import { capitalLetter } from "../../Utils";

export default class CoinsInfoPage extends React.Component {
  render() {
    const info = this.props.coinInfo;
    const timePeriods = ["1d", "7d", "30d", "90d", "1y", "MAX"];
    return (
      <StyledCoinInfo>
        <SummaryWrapper>
          <CoinInfoHeader>
            <CoinInfoSummary>Coin Summary</CoinInfoSummary>
            <TimePeriod>
              {timePeriods.map((item) => (
                <Period key={item}>
                  <Circle></Circle>
                  <p>{item}</p>
                </Period>
              ))}
            </TimePeriod>
          </CoinInfoHeader>
          <CoinInfoCont>
            <CoinCont>
              <div>
                <CoinImage image={info.image?.large}></CoinImage>
                <CoinName>{info.id && info.id.charAt(0).toUpperCase() + info.id.slice(1)}</CoinName>
              </div>
              <CoinLink>{info.links?.homepage[0]}</CoinLink>
            </CoinCont>
            <CoinHighlights></CoinHighlights>
            <CoinSpecfics>
                <div>
                    <div>Market Cap: {info.market_cap?.btc}</div>
                    <div>Fully Diluted Valuation: {info.fully_diluted_valuation?.btc}</div>
                    <div>Volume 24h: </div>
                    <div>Volume / Market: </div>
                    <div>Total Volume: {info.total_volume?.btc}</div>
                    <div>Circualting Supply: {info.circulating_supply}</div>
                    <div>Max Supply: {info.max_supply}</div>
                </div>
                <div>
                    <div>
                        <div>
                            <div></div>
                            <div>%</div>
                        </div>
                        <div>
                        <div></div>
                            <div>%</div>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </CoinSpecfics>
          </CoinInfoCont>
        </SummaryWrapper>
        <DescriptionWrapper>{info.description?.en}</DescriptionWrapper>
        <LinkWrapper></LinkWrapper>
        <ConvertCont></ConvertCont>
      </StyledCoinInfo>
    );
  }
}
