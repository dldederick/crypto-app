import React, { useRef, useState } from "react";
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
  AssetImage,
} from "./AddAsset.styles";

const AddAsset = (props) => {
  const [coinInputValue, setCoinInputValue] = useState("");
  const [assetName, setAssetName] = useState("");
  const [assetAmount, setAssetAmount] = useState("");
  const [day, setDay] = useState("");
  const [dayInputValue, setDayInputValue] = useState("");
  const [month, setMonth] = useState("");
  const [monthInputValue, setMonthInputValue] = useState("");
  const [year, setYear] = useState("");
  const [yearInputValue, setYearInputValue] = useState("");
  const [assetPurchaseDate, setAssetPurchaseDate] = useState("");
  const [newAsset, setNewAsset] = useState({});
  const [showDropDown, setShowDropDown] = useState(false);

  const monthInput = useRef(null);
  const dayInput = useRef(null);
  const yearInput = useRef(null);

  const handleChangeCoin = (e) => {
    const value = e.target.value;
    setCoinInputValue(value);
    setShowDropDown(true);
  };

  const handleSelect = (item) => {
    setAssetName(item);
    setCoinInputValue(item);
    setShowDropDown(false);
  };

  const handleAmountFocus = (e) => {
    if (assetAmount === "") {
      setAssetAmount(props.currencySymbol);
    }
  };

  const handleChangeAmount = (e) => {
    const value = e.target.value;
    setAssetAmount(value);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;

    if (name === "month" && value.length <= 2) {
      setMonthInputValue(value);
      if (value.length === 2) {
        dayInput.current.focus();
      }
    } else if (name === "day" && value.length <= 2) {
      setDayInputValue(value);
      if (value.length === 2) {
        yearInput.current.focus();
      }
    } else if (name === "year" && value.length <= 4) {
      setYearInputValue(value);
      if (value.length === 4) {
        const assetPurchaseDate = `${monthInputValue}/${dayInputValue}/${value}`;
        setAssetPurchaseDate(assetPurchaseDate);
      }
    }
  };

  const handleClose = () => {
    props.handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAsset = { assetAmount, assetName, assetPurchaseDate };
    setNewAsset(newAsset);
    props.addAsset(newAsset);
    props.handleClose();
  };

  const filteredItems = props.cryptoNames?.filter((obj) =>
    obj[0].toUpperCase().includes(coinInputValue[0]?.toUpperCase())
  );

  const imageUrl = props.cryptoInfo.filter((item) => item.name === assetName);

  return (
    <StyledAddAsset onSubmit={handleSubmit}>
      <AssetInfoCont>
        <AssetImageCont>
          {assetName.length > 0 &&
            imageUrl.map((obj) => (
              <React.Fragment key={assetName}>
                <AssetImage image={obj.image}></AssetImage>
                <div>{assetName}</div>
              </React.Fragment>
            ))}
        </AssetImageCont>
        <AssetInfo>
          <SelectCoin>
            Enter coin purchased:
            <input
              type="text"
              placeholder=""
              onChange={handleChangeCoin}
              value={coinInputValue}
            ></input>
          </SelectCoin>
          {showDropDown && (
            <SearchAssets>
              {filteredItems.map((item) => (
                <Assets key={item} onClick={() => handleSelect(item)}>
                  {item}
                </Assets>
              ))}
            </SearchAssets>
          )}
          <PurchaseAmount>
            Enter purchased amount:
            <input
              value={assetAmount}
              onChange={handleChangeAmount}
              onFocus={handleAmountFocus}
            ></input>
          </PurchaseAmount>
          <PurchaseDate>
            Enter date purchased:
            <input
              name="month"
              ref={monthInput}
              placeholder="mm"
              maxLength={2}
              onChange={handleDateChange}
              value={monthInputValue}
            />
            /
            <input
              name="day"
              ref={dayInput}
              placeholder="dd"
              maxLength={2}
              onChange={handleDateChange}
              value={dayInputValue}
            />
            /
            <input
              name="year"
              ref={yearInput}
              placeholder="yyyy"
              maxLength={4}
              onChange={handleDateChange}
              value={yearInputValue}
            />
          </PurchaseDate>
        </AssetInfo>
      </AssetInfoCont>
      <ButtonCont>
        <CloseButton onClick={handleClose}>Close</CloseButton>
        <AddButton type="submit">Add</AddButton>
      </ButtonCont>
    </StyledAddAsset>
  );
};

export default AddAsset;
