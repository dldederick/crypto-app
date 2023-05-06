import React from "react";
import axios from 'axios';
import { render } from "react-dom";
import { StyledPortfolioPage } from "./Portfolio.styles";
import { ZeroAssets, AddAssetButton } from "./Portfolio.styles";
import AddAsset from "../../components/AddAsset";

export default class Coins extends React.Component {
  state = {
    assetList: [],
    addIsClicked: false,
    hasError: false,
    isLoading: false,
    cryptoCurrencies: [],
    cryptoNames: []
  };

  getCryptoCurrencies = async () => {
    try {
      const { data } = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
      const cryptoNames = data.map(obj => obj.name);
      this.setState({ cryptoCurrencies: data, cryptoNames, isLoading: false })
    } catch(error) {
      this.setState({ hasError: false, isLoading: false })
    }
  }

  handleAddAsset = () => {
    this.setState({ addIsClicked: true });
  };

  handleClose = () => {
    this.setState({ addIsClicked: false })
  }

//   handleAdd = () => {

//   }

componentDidMount(){
    this.setState({ isLoading: true });
    this.getCryptoCurrencies();
}

  render() {
    console.log(this.state.cryptoNames, this.state.cryptoCurrencies)
    return (
      <StyledPortfolioPage>
        <AddAssetButton onClick={this.handleAddAsset}>Add Asset</AddAssetButton>
        {this.state.addIsClicked && <AddAsset handleClose={this.handleClose} handleAdd={this.handleAdd} cryptoNames={this.state.cryptoNames} cryptoInfo={this.state.cryptoCurrencies} />}
        {this.state.assetList.length < 1 ? (
          <ZeroAssets>You currently have 0 assets.</ZeroAssets>
        ) : (
          <div>hello</div>
        )}
      </StyledPortfolioPage>
    );
  }
}
