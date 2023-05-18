import React from "react";
import axios from "axios";
import AddAsset from "../../components/AddAsset";
import ListOfAssets from "../../components/ListOfAssets";
import { convertToUnixTimestamp } from '../../Utils'
import { StyledPortfolioPage } from "./Portfolio.styles";
import { ZeroAssets, NewAssetButton } from "./Portfolio.styles";
export default class Coins extends React.Component {
  state = {
    assetList: [],
    addIsClicked: false,
    hasError: false,
    isLoading: false,
    cryptoCurrencies: [],
    cryptoNames: [],
    newAsset: {},
  };

  getCryptoCurrencies = async () => {
    const currency = this.props.selectedCurrency;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
      );
      const cryptoNames = data.map((obj) => obj.name);
      this.setState({ cryptoCurrencies: data, cryptoNames, isLoading: false });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  getCoinPriceChange = async () => {
    try {
      const assetList = await Promise.all(
        this.state.assetList.map(async (obj) => {
          const purchaseDate = convertToUnixTimestamp(obj.assetPurchaseDate);
          const newDate = Math.floor(Date.now() / 1000);
          const name = obj.id;
          const currency = this.props.selectedCurrency;
          const { data } = await axios(
            `https://api.coingecko.com/api/v3/coins/${name}/market_chart/range?vs_currency=${currency}&from=${purchaseDate}&to=${newDate}`
          );
          const firstPrice = data?.prices[0][0];
          const lastPrice = data.prices[data.prices.length - 1][1];
          const priceChange = lastPrice - firstPrice;
          const percentageChange = (priceChange / firstPrice) * 100;
          return { ...obj, percentageChange };
        })
      );

      this.setState({ assetList, isLoading: false });
      //   console.log(this.state.updatedAssetList, 'state')
    } catch (error) {
        console.log(error)
      this.setState({ hasError: true, isLoading: false });
    }
  };

  handleNewAsset = () => {
    this.setState({ addIsClicked: true });
  };

  handleClose = () => {
    this.setState({ addIsClicked: false });
  };

  addAsset = (asset) => {
    const createAsset = this.state.cryptoCurrencies.find(
      (obj) => obj.name.toLowerCase() === asset.assetName.toLowerCase()
    );
    createAsset.assetAmount = asset.assetAmount;
    createAsset.assetPurchaseDate = asset.assetPurchaseDate;
    const { assetList } = this.state;
    const newList = [...assetList, createAsset];
    this.setState({ assetList: newList, newAsset: {} });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.assetList.length !== this.state.assetList.length) {
      this.getCoinPriceChange();
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getCryptoCurrencies();
  }

  render() {
    // const purchaseDate = convertToUnixTimestamp(
    //   this.state.assetList[0].assetPurchaseDate
    // );
    // const newDate = Math.floor(Date.now() / 1000);
    // const name = this.state.assetList[0].id;
    // const currency = this.props.selectedCurrency;
    console.log(this.state.assetList, this.state.hasError, "state");
    // console.log(purchaseDate, newDate, name, currency)
    return (
      <StyledPortfolioPage>
        <NewAssetButton onClick={this.handleNewAsset}>Add Asset</NewAssetButton>
        {this.state.addIsClicked && (
          <AddAsset
            handleClose={this.handleClose}
            cryptoNames={this.state.cryptoNames}
            cryptoInfo={this.state.cryptoCurrencies}
            addAsset={this.addAsset}
          />
        )}
        {this.state.assetList?.length < 1 ? (
          <ZeroAssets>You currently have 0 assets.</ZeroAssets>
        ) : (
          <ListOfAssets
            assets={this.state.assetList}
            selectedCurrency={this.props.selectedCurrency}
            currencySymbol={this.props.currencySymbol}
          />
        )}
      </StyledPortfolioPage>
    );
  }
}
