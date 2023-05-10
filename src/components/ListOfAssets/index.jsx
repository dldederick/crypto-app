import React from "react";
import axios from "axios";
import {
  StyledAssetList,
  ActiveAsset,
  ListAssetImageCont,
  ListAssetInfoCont,
  AssetMarketPerformance,
  AssetPerformance,
  AssetHeader,
} from "./ListOfAssets.styles/";
import {
  readableNum,
  roundedPercentage,
  convertToUnixTimestamp,
} from "../../Utils";

export default class ListOfAssets extends React.Component {
  state = {
    updatedAssetList: [],
    hasError: false,
    isLoading: false,
  };

  getCoinPriceChange = async () => {
    try {
      const updatedAssetList = await Promise.all(
        this.props.assets.map(async (obj) => {
          const purchaseDate = convertToUnixTimestamp(obj.assetPurchaseDate);
          const newDate = Math.floor(Date.now() / 1000);
          const name = obj.id;
          const { data } =
            await axios(`https://api.coingecko.com/api/v3/coins/${name}/market_chart/range?vs_currency=usd&from=${purchaseDate}&to=${newDate}
                `);

          const firstPrice = data.prices[0][1];
          const lastPrice = data.prices[data.prices.length - 1][1];
          const priceChange = lastPrice - firstPrice;
          const percentageChange = (priceChange / firstPrice) * 100;
          return { ...obj, percentageChange };
        })
      );
      this.setState({ updatedAssetList, isLoading: false });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.assets !== this.props.assets) {
      this.getCoinPriceChange();
    }
  }

  componentDidMount() {
    this.setState({ assetList: this.props.assets, isLoading: true }, () => {
      this.getCoinPriceChange();
    });
  }

  render() {
    console.log(this.props.assets, "hello");
    return (
      <StyledAssetList>
        {this.state.updatedAssetList.map((obj) => (
          <ActiveAsset key={obj.name}>
            <ListAssetImageCont image={obj?.image}>
              <div></div>
              <div>{obj?.name}</div>
            </ListAssetImageCont>
            <ListAssetInfoCont>
              <div>
                <AssetHeader>Market Performance</AssetHeader>
                <AssetMarketPerformance>
                  <div>Current Price: {readableNum(obj?.current_price)}</div>
                  <div>
                    Price Change 24h: {readableNum(obj?.price_change_24h)}
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
                  <div>Coin Amount: {obj.assetAmount}</div>
                  <div>
                    Coin Value:{" "}
                    {readableNum(obj.assetAmount * obj.current_price)}
                  </div>
                  <div>Date Purchased: {obj.assetPurchaseDate}</div>
                  <div>Price Change Since Purchase: {obj.percentageChange}</div>
                </AssetPerformance>
              </div>
            </ListAssetInfoCont>
          </ActiveAsset>
        ))}
      </StyledAssetList>
    );
  }
}