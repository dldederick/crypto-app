import React from "react";
import {
  StyledAddAsset,
  AssetInfoCont,
  AssetImageCont,
  AssetInfo,
  SelectCoin,
  PurchaseAmount,
  PurchaseDate,
  ButtonCont,
  CloseButton,
  AddButton,
  SearchAssets,
  Assets,
  AssetImage
} from "./AddAsset.styles";

export default class AddAsset extends React.Component {
  state = {
    inputValue: "",
    assetName: "",
    assetAmount: 0,
    assetPurchaseDate: null,
    newAsset: {},
    showDropDown: false,
  };

  handleClose = () => {
    this.props.handleClose();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { assetName, assetAmount, assetPurchaseDate } = this.state;
    const newAsset = { assetAmount, assetName, assetPurchaseDate };
    this.setState({ newAsset });
    // const asset = this.state.newAsset;
    this.props.addAsset(newAsset);
    this.props.handleClose();
  };

  handleSelect = (item) => {
    this.setState({ assetName: item, inputValue: item, showDropDown: false });
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ inputValue: value, showDropDown: value.length > 0 });
  };

  render() {
    const filteredItems = this.props.cryptoNames?.filter((obj) =>
      obj[0].toUpperCase().includes(this.state.inputValue[0]?.toUpperCase())
    );
    const imageUrl = this.props.cryptoInfo.filter(item => item.name === this.state.assetName);
    console.log(this.state.newAsset, 'welcome')
    return (
      <StyledAddAsset onSubmit={this.handleSubmit}>
          <AssetInfoCont>
            <AssetImageCont>
              {this.state.assetName.length > 0 && imageUrl.map(obj => (
              <React.Fragment key={this.state.assetName}>
              <AssetImage image={obj.image}></AssetImage>
              <div>{this.state.assetName}</div>
              </React.Fragment>))}
            </AssetImageCont>
            <AssetInfo>
              <SelectCoin
                type="text"
                placeholder="Enter coin purchased:"
                onChange={this.handleChange}
                value={this.state.inputValue}
              ></SelectCoin>
              {this.state.showDropDown && (
                <SearchAssets>
                  {filteredItems.map((item) => (
                    <Assets key={item} onClick={() => this.handleSelect(item)}>
                      {item}
                    </Assets>
                  ))}
                </SearchAssets>
              )}
              <PurchaseAmount
                placeholder="Enter purchased amount:"
                onChange={(e) => this.setState({ assetAmount: e.target.value })}
              ></PurchaseAmount>
              <PurchaseDate
                placeholder="Enter date purchased: mm/dd/yyy"
                onChange={(e) =>
                  this.setState({ assetPurchaseDate: e.target.value })
                }
              ></PurchaseDate>
            </AssetInfo>
          </AssetInfoCont>
          <ButtonCont>
            <CloseButton onClick={this.handleClose}>Close</CloseButton>
            <AddButton type='submit'>Add</AddButton>
          </ButtonCont>
      </StyledAddAsset>
    );
  }
}
