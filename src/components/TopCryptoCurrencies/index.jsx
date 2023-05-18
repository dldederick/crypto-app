import React from "react";
import Sparkline from "../Sparklines";
import {
  StyledTopCurrencies,
  TopCurrencyHeader,
  TopIdHeader,
  TopCurrentPriceHeader,
  TopIndexHeader,
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
  CirculatingSupplyValues,
  CirculatingValue,
  SupplyValue,
  CirculatingSupplyPercentageBar,
  VolumeMarketCapPercentageBar,
  VolumeMarketCapValues,
  VolumeValue,
  MarketCapValue,
  TotalBar,
} from "./TopCryptoCurrencies.styles";
import { readableNum, roundedPercentage, capitalize } from "../../Utils";

export default function TopCryptoCurrencies(props) {
  const chartCategories = [
    { componentName: TopIdHeader, name: 'Name', id: "id" },
    { componentName: TopCurrentPriceHeader, name: 'Price', id: "currentPrice" },
    { componentName: Top1hHeader, name: '1h%', id: "1h" },
    { componentName: Top24hHeader, name: '24h%', id: "24h" },
    { componentName: Top7dHeader, name: '7d%', id: "7d" },
  ];

  const handleClick = (id) => {
    props.handleClick(id);
  };

  return (
    <StyledTopCurrencies>
      <TopCurrencyHeader>
      <TopIndexHeader>#</TopIndexHeader>
        {chartCategories.map((item) => {
          return (
            <item.componentName key={item.id} onClick={() => handleClick(item.id)}>
              {item.name}
            </item.componentName>
          );
        })}
        <TopVolumeMarketCap>24h Volume/Market Cap</TopVolumeMarketCap>
        <TopSupply>Circulating/Total Supply</TopSupply>
        <Top7dChart>Last 7 days</Top7dChart>
      </TopCurrencyHeader>
      {props.topCoinsData.map((obj, index) => {
        return (
          <TopCurrencyCont to={`/coin/${obj.id}`} key={obj.id}>
            <TopIndex>{index + 1}</TopIndex>
            <TopId image={obj.image}>
              {capitalize(obj.id)} ({obj.symbol.toUpperCase()})
            </TopId>
            <TopCurrentPrice>
              {props.currencySymbol} {roundedPercentage(obj.current_price)}
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
                <VolumeValue>{props.currencySymbol} {readableNum(obj.total_volume)}</VolumeValue>
                <MarketCapValue>{props.currencySymbol} {readableNum(obj.market_cap)}</MarketCapValue>
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
                {props.currencySymbol} {readableNum(obj.circulating_supply)}
                </CirculatingValue>
                <SupplyValue>{props.currencySymbol} {readableNum(obj.total_supply)}</SupplyValue>
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
