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
import { readableNum, roundedPercentage } from "../../Utils";

export default function ListOfAssets(props) {
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
                  Current Price: {props.currencySymbol}
                  {readableNum(obj?.current_price)}
                </div>
                <div>
                  Price Change 24h: {props.currencySymbol}
                  {readableNum(obj?.price_change_24h)}
                </div>
                <div>
                  Market Cap / Volume:{" "}
                  {roundedPercentage(obj?.market_cap / obj?.total_volume)}%
                </div>
                <div>
                  Circulating Supply / Supply:{" "}
                  {roundedPercentage(
                    obj?.circulating_supply / obj?.total_supply
                  )}
                  %
                </div>
              </AssetMarketPerformance>
            </div>
            <div>
              <AssetHeader>Coin Performance</AssetHeader>
              <AssetPerformance>
                <div>
                  Coin Amount: {obj?.assetAmount}
                </div>
                <div>
                  Coin Value: {props.currencySymbol}
                  {readableNum(obj?.assetAmount * obj?.current_price)}
                </div>
                <div>Date Purchased: {obj?.assetPurchaseDate}</div>
                <div>
                  Price Change Since Purchase: {props.currencySymbol}
                  {readableNum(obj?.percentageChange)}
                </div>
              </AssetPerformance>
            </div>
          </ListAssetInfoCont>
        </ActiveAsset>
      ))}
    </StyledAssetList>
  );
}
