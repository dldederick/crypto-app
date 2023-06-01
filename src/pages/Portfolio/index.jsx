import React, { useState, useEffect } from "react";
import axios from "axios";
import AddAsset from "../../components/AddAsset";
import ListOfAssets from "../../components/ListOfAssets";
import { convertToUnixTimestamp } from "../../Utils";
import { StyledPortfolioPage } from "./Portfolio.styles";
import { ZeroAssets, NewAssetButton } from "./Portfolio.styles";

const Portfolio = (props) => {
  const [assetList, setAssetList] = useState([]);
  const [addIsClicked, setAddIsClicked] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [cryptoNames, setCryptoNames] = useState([]);
  const [newAsset, setNewAsset] = useState({});

  const getCryptoCurrencies = async () => {
    const currency = props.selectedCurrency;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
      );
      const cryptoNames = data.map((obj) => obj.name);
      setCryptoCurrencies(data);
      setCryptoNames(cryptoNames);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const getCoinPriceChange = async () => {
    try {
      const assetList = await Promise.all(
        assetList.map(async (obj) => {
          const purchaseDate = convertToUnixTimestamp(obj.assetPurchaseDate);
          const newDate = Math.floor(Date.now() / 1000);
          const name = obj.id;
          const currency = props.selectedCurrency;
          const { data } = await axios(
            `https://api.coingecko.com/api/v3/coins/${name}/market_chart/range?vs_currency=${currency}&from=${purchaseDate}&to=${newDate}`
          );
          const firstPrice = data.prices[0][0];
          const lastPrice = data.prices[data.prices.length - 1][1];
          const priceChange = lastPrice - firstPrice;
          const percentageChange = (priceChange / firstPrice) * 100;
          return { ...obj, percentageChange };
        })
      );
      setAssetList(assetList);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleNewAsset = () => {
    setAddIsClicked(true);
  };

  const handleClose = () => {
    setAddIsClicked(false);
  };

  const addAsset = (asset) => {
    const createAsset = cryptoCurrencies.find(
      (obj) => obj.name.toLowerCase() === asset.assetName.toLowerCase()
    );
    const numericValue = asset.assetAmount.replace(/\D/g, "");
    createAsset.assetAmount = numericValue;
    createAsset.assetPurchaseDate = asset.assetPurchaseDate;
    const newList = [...assetList, createAsset];
    setAssetList(newList);
    setNewAsset({});
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.assetList.length !== this.state.assetList.length) {
  //     this.getCoinPriceChange();
  //   }
  // }

  useEffect(() => {
    getCoinPriceChange();
  }, [assetList.length]);

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   this.getCryptoCurrencies();
  // }

  useEffect(() => {
    setIsLoading(true);
    getCryptoCurrencies();
  }, []);

  return (
      <StyledPortfolioPage>
        <NewAssetButton onClick={handleNewAsset}>Add Asset</NewAssetButton>
        {addIsClicked && (
          <AddAsset
            handleClose={handleClose}
            cryptoNames={cryptoNames}
            cryptoInfo={cryptoCurrencies}
            addAsset={addAsset}
            currencySymbol={props.currencySymbol}
            darkMode={props.darkMode}
          />
        )}
        {assetList?.length < 1 ? (
          <ZeroAssets>You currently have 0 assets.</ZeroAssets>
        ) : (
          <ListOfAssets
            assets={assetList}
            selectedCurrency={props.selectedCurrency}
            currencySymbol={props.currencySymbol}
          />
        )}
      </StyledPortfolioPage>
  );
};
export default Portfolio;
