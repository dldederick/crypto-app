import React from "react";
import {
  StyledAddAsset,
  AssetInfoCont,
  AssetImage,
  AssetInfo,
  SelectCoin,
  PurchaseAmount,
  PurchaseDate,
  ButtonCont,
  CloseButton,
  AddButton,
  SearchAssets,
  Assets,
} from "./AddAsset.styles";

export default class AddAsset extends React.Component {
  state = {
    inputValue: "",
    assetName: '',
    showDropDown: false
  };

  handleClose = () => {
    this.props.handleClose();
  };

  //   handleAdd = () => {

  //   }

  handleSelect = (item) => {
    this.setState({ assetName: item, inputValue: item, showDropDown: false })
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ inputValue: value, showDropDown: value.length > 0 });
  };

  render() {
    // const coins = this.props.cryptoInfo.find(obj => obj.name === this.state.assetName);
    const filteredItems = this.props.cryptoNames?.filter((obj) =>
      obj[0].toUpperCase().includes(this.state.inputValue[0]?.toUpperCase())
    );
    return (
      <StyledAddAsset>
        <AssetInfoCont>
          <AssetImage>
            <div></div>
            <div></div>
          </AssetImage>
          <AssetInfo>
            <SelectCoin
              placeholder="Enter coin purchased:"
              onChange={this.handleChange}
              value={this.state.inputValue}
            ></SelectCoin>
            {this.state.showDropDown && (
              <SearchAssets>
                {filteredItems.map((item) => (
                  <Assets key={item} onClick={() => this.handleSelect(item)}>{item}</Assets>
                ))}
              </SearchAssets>
            )}
            <PurchaseAmount placeholder="Enter purchased amount:"></PurchaseAmount>
            <PurchaseDate placeholder="Enter date purchased: mm/dd/yyy"></PurchaseDate>
          </AssetInfo>
        </AssetInfoCont>
        <ButtonCont>
          <CloseButton onClick={this.handleClose}>Close</CloseButton>
          <AddButton onClick={this.handleAdd}>Add</AddButton>
        </ButtonCont>
      </StyledAddAsset>
    );
  }
}
