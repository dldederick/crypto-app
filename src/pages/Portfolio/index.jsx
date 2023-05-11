import React from "react";
import axios from "axios";
import AddAsset from "../../components/AddAsset";
import ListOfAssets from "../../components/ListOfAssets";
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
    const currency = this.props.selectedCurrencies;
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

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getCryptoCurrencies();
  }  

  render() {
    // console.log(this.state.assetList)
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
          <ListOfAssets assets={this.state.assetList} />
        )}
      </StyledPortfolioPage>
    );
  }
}
