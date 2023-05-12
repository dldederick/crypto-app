import React from "react";
import CurrencyPriceChart from "../../components/CurrencyPriceChart";
import CurrencyVolumeChart from "../../components/CurrencyVolumeChart";
import TopCryptoCurrencies from "../../components/TopCryptoCurrencies";
import {
  CoinsCont1,
  CoinsCont2,
  Wrapper1,
  Wrapper2,
  Overview,
  PriceOverview,
  VolumeOverview,
  VolumeOverviewWrapper,
} from "./ChartOverview.styles";
import { readableNum } from "../../Utils";

export default class ChartOverview extends React.Component {
  state = {
    sortBy: "",
    sort: "desc",
    sortedList: [],
  };

  sortNameChange(value) {
    if (value === "1h") {
      return "price_change_percentage_1h_in_currency";
    }
    if (value === "24h") {
      return "price_change_percentage_24h";
    }
    if (value === "7d") {
      return 'price_change_percentage_7d_in_currency';
    }
    if (value === 'currentPrice') {
      return 'current_price'
    }
    if (value === 'id') {
      return 'id'
    }
  }

  handleClick = (id) => {
    if (this.state.sortBy === "") {
      this.setState({ sortBy: id });
    }

    if (id === this.state.sortBy) {
      if (this.state.sort === "desc") {
        this.setState({ sort: "asc" });
      } else {
        this.setState({ sort: "desc" });
      }
    }

    if (id !== "" && id !== this.state.sortBy) {
      this.setState({ sortBy: id, sort: "desc" });
    }

    this.handleSort();
  };

  handleSort = () => {
    const { sort } = this.state;
    const { topCryptoCurrencies } = this.props;
    const sortBy = this.sortNameChange(this.state.sortBy);

    const sortedList = [...topCryptoCurrencies].sort((a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];

      if (valueA < valueB) {
        return sort === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sort === "asc" ? 1 : -1;
      }
      return 0;
    });

    this.setState({ sortedList });
  };

  render() {
    console.log(this.state.sortBy, this.state.sort);
    const displayCoin = this.props.currencyDisplayed;
    const coinObj = this.props.topCryptoCurrencies.filter(
      (obj) => obj.id === displayCoin
    );
    const coinPrice = readableNum(coinObj[0]?.current_price);
    const coinVolume = readableNum(coinObj[0]?.total_volume);
    const coinImage = coinObj[0]?.image;
    const coinSymbol = coinObj[0]?.symbol.toUpperCase();
    return (
      <>
        <CoinsCont1>
          <Wrapper1>
            <PriceOverview img={coinImage}>
              {coinObj.id} ({coinSymbol}) Price: ${coinPrice}{" "}
            </PriceOverview>
            <CurrencyPriceChart
              prices={this.props.coinsMarketPriceArray}
              dates={this.props.coinsMarketDateArray}
            />
          </Wrapper1>
          <Wrapper2>
            <VolumeOverviewWrapper>
              <VolumeOverview img={coinImage}>
                {coinObj.id} ({coinSymbol}) Volume: ${coinVolume}{" "}
              </VolumeOverview>
            </VolumeOverviewWrapper>
            <CurrencyVolumeChart
              volumes={this.props.coinsMarketVolumeArray}
              dates={this.props.coinsMarketDateArray}
            />
          </Wrapper2>
        </CoinsCont1>
        <CoinsCont2>
          <Overview>Market Overview</Overview>
          {this.state.sortBy ? (
            <TopCryptoCurrencies
              topCoinsData={this.state.sortedList}
              handleClick={this.handleClick}
            />
          ) : (
            <TopCryptoCurrencies
              topCoinsData={this.props.topCryptoCurrencies}
              handleClick={this.handleClick}
            />
          )}
        </CoinsCont2>
      </>
    );
  }
}
