import React from "react";
import { StyledAddAsset, AssetInfoCont, AssetImage, AssetInfo, SelectCoin, PurchaseAmount, PurchaseDate, ButtonCont, CloseButton, AddButton } from "./AddAsset.styles";

export default class AddAsset extends React.Component {
  state = {};

  render() {
    return (
      <StyledAddAsset>
        <AssetInfoCont>
          <AssetImage></AssetImage>
          <AssetInfo>
            <SelectCoin placeholder='Enter coin purchased:'></SelectCoin>
            <PurchaseAmount placeholder='Enter purchased amount:'></PurchaseAmount>
            <PurchaseDate placeholder='Enter date purchased:'></PurchaseDate>
          </AssetInfo>
        </AssetInfoCont>
        <ButtonCont>
          <CloseButton>Close</CloseButton>
          <AddButton>Add</AddButton>
        </ButtonCont>
      </StyledAddAsset>
    );
  }
}
