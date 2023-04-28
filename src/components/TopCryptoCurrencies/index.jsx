import React from "react";
import {
  StyledTopCurrencies,
  TopCurrencyHeader,
  Top1hHeader,
  Top24hHeader,
  Top7dHeader,
  TopCurrencyCont,
  TopIndex,
  TopId,
  TopCurrentPrice,
  Top1h,
  Top24h,
  Top7d,
  Top7dChart,
  TopVolumeMarketCap,
  TopSupply,
  VolumeMarketCapValues,
  VolumeValue,
  MarketCapValue,
  TotalBar,
  VolumeMarketCapPercentageBar,
  CirculatingSupplyValues,
  CirculatingValue,
  SupplyValue,
  CirculatingSupplyPercentageBar,
} from "./TopCryptoCurrencies.styles";
import Sparkline from '../Sparklines';
import { readableNum, roundedPercentage, capitalize } from "../../Utils";

export default function TopCryptoCurrencies(props) {
  return (
    <StyledTopCurrencies>
      <TopCurrencyHeader>
        <TopIndex>#</TopIndex>
        <TopId>Name</TopId>
        <TopCurrentPrice>Price</TopCurrentPrice>
        <Top1hHeader>1h%</Top1hHeader>
        <Top24hHeader>24h%</Top24hHeader>
        <Top7dHeader>7d%</Top7dHeader>
        <TopVolumeMarketCap>24h Volume/Market Cap</TopVolumeMarketCap>
        <TopSupply>Circulating/Total Supply</TopSupply>
        <Top7dChart>Last 7 days</Top7dChart>
      </TopCurrencyHeader>
      {props.topCoinsData.map((obj, index) => {
        return (
          <TopCurrencyCont key={obj.id} onClick={(e) => props.handleClick(obj.id)}>
            <TopIndex>{index + 1}</TopIndex>
            <TopId image={obj.image}>
              {capitalize(obj.id)} ({obj.symbol.toUpperCase()})
            </TopId>
            <TopCurrentPrice>
              ${roundedPercentage(obj.current_price)}
            </TopCurrentPrice>
            <Top1h value={obj.price_change_percentage_1h_in_currency}>
              {roundedPercentage(obj.price_change_percentage_1h_in_currency)}%
            </Top1h>
            <Top24h value={obj.price_change_percentage_24h}>
              {roundedPercentage(obj.price_change_percentage_24h)}%
            </Top24h>
            <Top7d value={obj.price_change_percentage_7d_in_currency}>
              {roundedPercentage(obj.price_change_percentage_7d_in_currency)}%
            </Top7d>
            <TopVolumeMarketCap>
              <VolumeMarketCapValues>
                <VolumeValue>{readableNum(obj.total_volume)}</VolumeValue>
                <MarketCapValue>{readableNum(obj.market_cap)}</MarketCapValue>
              </VolumeMarketCapValues>
              <TotalBar>
                <VolumeMarketCapPercentageBar
                  volumePercentage={obj.total_volume / obj.market_cap}
                ></VolumeMarketCapPercentageBar>
              </TotalBar>
            </TopVolumeMarketCap>
            <TopSupply>
              <CirculatingSupplyValues>
                <CirculatingValue>
                  {readableNum(obj.circulating_supply)}
                </CirculatingValue>
                <SupplyValue>{readableNum(obj.total_supply)}</SupplyValue>
              </CirculatingSupplyValues>
              <TotalBar>
                <CirculatingSupplyPercentageBar
                  supplyPercentage={obj.circulating_supply / obj.total_supply}
                ></CirculatingSupplyPercentageBar>
              </TotalBar>
            </TopSupply>
            <Sparkline data={obj.sparkline_in_7d.price} num={index} />
          </TopCurrencyCont>
        );
      })}
    </StyledTopCurrencies>
  );
}
