import React from "react";
// import axios from "axios";
import CurrencyPriceChart from "../../components/CurrencyPriceChart";
import CurrencyVolumeChart from "../../components/CurrencyVolumeChart";
// import TopCryptoCurrencies from "../../components/TopCryptoCurrencies";
import { readableNum } from "../../Utils";
import {
  CoinsCont1,
  // CoinsCont2,
  Wrapper1,
  Wrapper2,
  // Overview,
  PriceOverview,
  VolumeOverview,
  VolumeOverviewWrapper,
} from "./ChartOverview.styles";

export default function ChartOverview(props) {
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.sortedList[0] !== this.state.sortedList[0]) {
  //     this.getSortedMarketChart();
  //   }
  //   if (prevState.sortBy !== this.state.sortBy) {
  //     const search = queryString.stringify(this.state.sortBy);
  //     this.props.history.push(`/?${search}`);
  //   }
  // }

  // render() {
  //   const price = this.state.sortBy;
    const currencyDisplayed = props.currencyDisplayed;
    const currencySymbol = props.currencySymbol;
    const coinsMarketPriceArray = props.coinsMarketPriceArray;
    const coinsMarketDateArray = props.coinsMarketDateArray;
    const coinsMarketVolumeArray = props.coinsMarketVolumeArray;

    const coinObj = props.topCryptoCurrencies.filter(
      (obj) => obj.id === currencyDisplayed
    );
    const coinPrice = readableNum(coinObj[0]?.current_price);
    const coinVolume = readableNum(coinObj[0]?.total_volume);
    const coinImage = coinObj[0]?.image;
    const coinSymbol = coinObj[0]?.symbol.toUpperCase();
    const coinName = coinObj[0]?.name;

  //   const sorted = this.state.sortedList[0];
  //   const sortedPrice = readableNum(sorted?.current_price);
  //   const sortedVolume = readableNum(sorted?.total_volume);
  //   const sortedImage = sorted?.image;
  //   const sortedSymbol = sorted?.symbol.toUpperCase();
  //   const sortedName = sorted?.name;
    // console.log("incoming coins", coinsMarketDateArray);
    return (
      <CoinsCont1>
            <Wrapper1>
              <PriceOverview img={coinImage}>
                {coinName} ({coinSymbol}) Price: {currencySymbol}
                {coinPrice}{" "}
              </PriceOverview>
              <CurrencyPriceChart
                prices={coinsMarketPriceArray}
                dates={coinsMarketDateArray}
              />
            </Wrapper1>
            <Wrapper2>
              <VolumeOverviewWrapper>
                <VolumeOverview img={coinImage}>
                  {coinName} ({coinSymbol}) Volume: {currencySymbol}
                  {coinVolume}{" "}
                </VolumeOverview>
              </VolumeOverviewWrapper>
              <CurrencyVolumeChart
                volumes={coinsMarketVolumeArray}
                dates={coinsMarketDateArray}
              />
            </Wrapper2>
          </CoinsCont1>
             );
            }
          // <CoinsCont1>
          //   <Wrapper1>
          //     <PriceOverview img={sortedImage}>
          //       {sortedName} ({sortedSymbol}) Price: {this.props.currencySymbol}
          //       {sortedPrice}{" "}
          //     </PriceOverview>
          //     <CurrencyPriceChart
          //       prices={this.state.sortedMarketPriceArray}
          //       dates={this.state.sortedMarketDateArray}
          //     />
          //   </Wrapper1>
          //   <Wrapper2>
          //     <VolumeOverviewWrapper>
          //       <VolumeOverview img={sortedImage}>
          //         {sortedName} ({sortedSymbol}) Volume:{" "}
          //         {this.props.currencySymbol}
          //         {sortedVolume}{" "}
          //       </VolumeOverview>
          //     </VolumeOverviewWrapper>
          //     <CurrencyVolumeChart
          //       volumes={this.state.sortedMarketVolumeArray}
          //       dates={this.state.sortedMarketDateArray}
          //     />
          //   </Wrapper2>
          // </CoinsCont1>
           // <>
        {/* {this.state.sortedList.length > 0 ? ( */}
        {/* ) : ( */}
        {/* )} */}
        {/* <CoinsCont2>
          <Overview>Market Overview</Overview>
          <TopCryptoCurrencies
              topCoinsData={this.props.topCryptoCurrencies}
              handleClick={this.handleClick}
              currencySymbol={this.props.currencySymbol}
            />
          {this.state.sortBy ? (
            <TopCryptoCurrencies
              topCoinsData={this.state.sortedList}
              handleClick={this.handleClick}
              currencySymbol={this.props.currencySymbol}
            />
          ) : (
            <TopCryptoCurrencies
              topCoinsData={this.props.topCryptoCurrencies}
              handleClick={this.handleClick}
              currencySymbol={this.props.currencySymbol}
            />
          )}
        </CoinsCont2> */}
      // </>
// }

// state = {
//   sortBy: "",
//   sort: "",
//   sortedList: [],
//   sortedMarketDateArray: [],
//   sortedMarketPriceArray: [],
//   sortedMarketVolumeArray: []
// };

// sortNameChange(value) {
//   if (value === "1h") {
//     return "price_change_percentage_1h_in_currency";
//   }
//   if (value === "24h") {
//     return "price_change_percentage_24h";
//   }
//   if (value === "7d") {
//     return 'price_change_percentage_7d_in_currency';
//   }
//   if (value === 'currentPrice') {
//     return 'current_price'
//   }
//   if (value === 'id') {
//     return 'id'
//   }
// }

// handleClick = (id) => {
//   if (this.state.sortBy === "") {
//     this.setState({ sortBy: id }, this.handleSort);
//   } else if (id === this.state.sortBy) {
//     this.setState(
//       (prevState) => ({ sort: prevState.sort === "desc" ? "asc" : "desc" }),
//       this.handleSort
//     );
//   } else {
//     this.setState({ sortBy: id, sort: "desc" }, this.handleSort);
//   }
// };

// handleSort = () => {
//   const { sort } = this.state;
//   const { topCryptoCurrencies } = this.props;
//   const sortBy = this.sortNameChange(this.state.sortBy);

//   const sortedList = [...topCryptoCurrencies].sort((a, b) => {
//     const valueA = a[sortBy];
//     const valueB = b[sortBy];

//     if (valueA < valueB) {
//       return sort === "asc" ? -1 : 1;
//     }
//     if (valueA > valueB) {
//       return sort === "asc" ? 1 : -1;
//     }
//     return 0;
//   });

//   this.setState({ sortedList, sortBy });
// };

// getSortedMarketChart = async () => {
//   const currency = this.props.selectedCurrency;
//   const display = this.state.sortedList[0].id;
//   try {
//     const { data } = await axios(
//       `https://api.coingecko.com/api/v3/coins/${display}/market_chart?vs_currency=${currency}&days=180&interval=daily`
//     );
//     const sortedMarketPriceArray = data.prices.map((item) => item[1]);
//     const sortedMarketDateArray = data.prices.map((item) => item[0]);
//     const sortedMarketVolumeArray = data.total_volumes.map((item) => item[1]);
//     this.setState({
//       sortedMarketDateArray,
//       sortedMarketPriceArray,
//       sortedMarketVolumeArray,
//       isLoading: false,
//     });
//   } catch (error) {
//     this.setState({ hasError: true, isLoading: false });
//   }
// };
