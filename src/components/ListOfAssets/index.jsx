import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import {
  StyledAssetList,
  ActiveAsset,
  ListAssetImageCont,
  ListAssetInfoCont,
  AssetMarketPerformance,
  AssetPerformance,
  AssetHeader,
} from "./ListOfAssets.styles/";
import { readableNum, roundedPercentage } from "../../Utils/math";

export default function ListOfAssets(props) {
  function textColor(number){
    return number >= 0 ? {color: '#00ff5f'} : {color: '#D9123A'};
  }
  return (
      <StyledAssetList>
      {props.assets.map((obj) => (
        <ActiveAsset key={obj.name}>
          <ListAssetImageCont image={obj?.image}>
            <div></div>
            <div>{obj?.name}</div>
          </ListAssetImageCont>
          <ListAssetInfoCont>
            <div>
              <AssetHeader>Market Performance</AssetHeader>
              <AssetMarketPerformance>
                <div>
                  Current Price:{" "}
                  <span style={textColor(readableNum(obj?.current_price))}>
                    {props.currencySymbol}
                    {readableNum(obj?.current_price)}
                  </span>
                </div>
                <div>
                  Price Change 24h:{" "}
                  <span style={textColor(readableNum(obj?.price_change_24h))}>
                    {props.currencySymbol}
                    {readableNum(obj?.price_change_24h)}
                  </span>
                </div>
                <div>
                  Market Cap / Volume:{" "}
                  <span style={textColor(roundedPercentage(obj?.market_cap / obj?.total_volume))}>
                    {roundedPercentage(obj?.market_cap / obj?.total_volume)}%
                  </span>
                </div>
                <div>
                  Circulating Supply / Supply:{" "}
                  <span style={textColor(roundedPercentage(
                      obj?.circulating_supply / obj?.total_supply
                    ))}>
                    {roundedPercentage(
                      obj?.circulating_supply / obj?.total_supply
                    )}
                    %
                  </span>
                </div>
              </AssetMarketPerformance>
            </div>
            <div>
              <AssetHeader>Coin Performance</AssetHeader>
              <AssetPerformance>
                <div>
                  Coin Amount: <span style={textColor(obj?.assetAmount)}>{props.currencySymbol}
                  {obj?.assetAmount}</span>
                </div>
                <div>
                  Coin Value: <span style={textColor(readableNum(obj?.assetAmount * obj?.current_price))}>{props.currencySymbol}
                  {readableNum(obj?.assetAmount * obj?.current_price)}</span>
                </div>
                <div>Date Purchased: <span>{obj?.assetPurchaseDate}</span></div>
                <div>
                  Price Change Since Purchase: <span style={textColor(readableNum(obj?.percentageChange))}>{props.currencySymbol}
                  {readableNum(obj?.percentageChange)}</span>
                </div>
              </AssetPerformance>
            </div>
          </ListAssetInfoCont>
        </ActiveAsset>
      ))}
    </StyledAssetList> 
  );
}
