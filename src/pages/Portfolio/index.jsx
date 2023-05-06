import React from "react";
import { render } from "react-dom";
import { StyledPortfolioPage } from "./Portfolio.styles";
import { ZeroAssets, AddAssetButton } from "./Portfolio.styles";
import AddAsset from "../../components/AddAsset";

export default class Coins extends React.Component {
  state = {
    assetList: [],
    addIsClicked: false,
  };

  handleAddAsset = () => {
    this.setState({ addIsClicked: true });
  };

  render() {
    return (
      <StyledPortfolioPage>
        <AddAssetButton onClick={this.handleAddAsset}>Add Asset</AddAssetButton>
        {this.state.addIsClicked && <AddAsset />}
        {this.state.assetList.length < 1 ? (
          <ZeroAssets>You currently have 0 assets.</ZeroAssets>
        ) : (
          <div>hello</div>
        )}
      </StyledPortfolioPage>
    );
  }
}
