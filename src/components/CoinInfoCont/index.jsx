import React from "react";
import CoinDataChart from "../../components/CoinDataChart";
import TimePeriodSelect from "../TimePeriodSelect";
import { readableNum, convertDate, roundedPercentage } from "../../Utils/math";
import {
  CoinCont,
  CoinName,
  CoinLink,
  CoinHighlights,
  CoinSupplyData,
  CoinMarketVolumeData,
  StyledCoinInfoCont,
  CoinPriceData,
  CoinImage,
  CoinSupplyBar,
  CoinMarketVolumeBar,
  CoinSupplyBars,
  CoinMarketVolumeBars,
  CoinSupplyPercent,
  CoinMarketVolumePercent,
  CoinAth,
  CoinAtl,
  Container,
} from "./CoinInfoCont.styles";

const CoinInfoCont = (props) => {
  const handleClick = (item) => {
    props.handleClick(item);
  };

  console.log(props.isSmallScreen, "isSmallScreen");

  return (
    <StyledCoinInfoCont>
      <div>
        <CoinCont>
          <div>
            <CoinImage image={props.info.image?.large}></CoinImage>
            <CoinName>
              {props.info.id &&
                props.info.id.charAt(0).toUpperCase() + props.info.id.slice(1)}
            </CoinName>
          </div>
          <CoinLink>{props.info.links?.homepage[0]}</CoinLink>
        </CoinCont>
        <CoinHighlights>
          <CoinPriceData>
            <div>
              Current Price: $
              {readableNum(props.info.market_data?.current_price?.btc)}
            </div>
            <div>
              {readableNum(
                props.info.market_data?.price_change_24h_in_currency?.btc
              )}
            </div>
          </CoinPriceData>
          <div>
            <CoinAth>
              <div>
                All Time High: ${readableNum(props.info.market_data?.ath?.btc)}
              </div>
              <div>{convertDate(props.info.market_data?.ath_date?.btc)}</div>
            </CoinAth>
            <CoinAtl>
              <div>
                All Time Low: ${readableNum(props.info.market_data?.atl?.btc)}
              </div>
              <div>{convertDate(props.info.market_data?.atl_date?.btc)}</div>
            </CoinAtl>
          </div>
        </CoinHighlights>
        <CoinMarketVolumeData>
          <div>
            <div>Market Cap Rank: {props.info.market_cap_rank}</div>
            <div>
              Market Cap: {readableNum(props.info.market_data?.market_cap?.btc)}
            </div>
            <div>
              Total Volume:{" "}
              {readableNum(props.info.market_data?.total_volume?.btc)}
            </div>
          </div>
          <CoinMarketVolumeBar>
            <CoinMarketVolumePercent>
              <div>{readableNum(props.info.market_data?.market_cap?.btc)}</div>
              <div>
                {readableNum(
                  props.info.market_data?.total_volume?.btc /
                    props.info.market_data?.market_cap?.btc
                )}
                %
              </div>
              <div>
                {readableNum(props.info.market_data?.total_volume?.btc)}
              </div>
            </CoinMarketVolumePercent>
            <CoinMarketVolumeBars
              supplyPercent={
                roundedPercentage(
                  props.info.market_data?.total_volume?.btc /
                    props.info.market_data?.market_cap?.btc
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
                props.info.market_data?.fully_diluted_valuation?.btc
              )}
            </div>
            <div>
              Circualting Supply:{" "}
              {readableNum(props.info.market_data?.circulating_supply)}
            </div>
            <div>
              Max Supply: {readableNum(props.info.market_data?.max_supply)}
            </div>
          </div>
          <CoinSupplyBar>
            <CoinSupplyPercent>
              <div>
                {readableNum(props.info.market_data?.circulating_supply)}
              </div>
              <div>
                {readableNum(
                  props.info.market_data?.circulating_supply /
                    props.info.market_data?.max_supply
                )}
                %
              </div>
              <div>{readableNum(props.info.market_data?.max_supply)}</div>
            </CoinSupplyPercent>
            <CoinSupplyBars
              supplyPercent={
                roundedPercentage(
                  props.info.market_data?.circulating_supply /
                    props.info.market_data?.max_supply
                ) * 100
              }
            >
              <div></div>
            </CoinSupplyBars>
          </CoinSupplyBar>
        </CoinSupplyData>
      </div>
      {!props.isSmallScreen ? (
        <Container>
          <TimePeriodSelect
            isSelected={props.isSelected}
            handleClick={handleClick}
          />
          <CoinDataChart
            coinInfo={props.info}
            marketPrices={props.coinMarketPriceArray}
            marketDates={props.coinMarketDateArray}
          />
        </Container>
      ) : null}
    </StyledCoinInfoCont>
  );
};

export default CoinInfoCont;
