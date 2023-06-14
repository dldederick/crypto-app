import React, { useState, useEffect } from "react";
import axios from "axios";
import AddAsset from "../../components/AddAsset";
import ListOfAssets from "../../components/ListOfAssets";
import { convertToUnixTimestamp } from "../../Utils/math";
import { StyledPortfolioPage, ZeroAssets, NewAssetButton } from "./Portfolio.styles";

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

  const updateAssetList = async () => {
    try {
      const updatedAssetList = await Promise.all(
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
  
      if (newAsset && Object.keys(newAsset).length > 0) {
        const createAsset = cryptoCurrencies.find(
          (obj) => obj.name.toLowerCase() === newAsset.assetName.toLowerCase()
        );
        if (createAsset) {
          const numericValue = newAsset.assetAmount.replace(/\D/g, "");
          createAsset.assetAmount = numericValue;
          createAsset.assetPurchaseDate = newAsset.assetPurchaseDate;
          createAsset.assetId = Math.random().toString();
          updatedAssetList.push(createAsset);
          const storedList = JSON.stringify(updatedAssetList);
          localStorage.setItem('StoredAssetList', storedList);
        }
      }
      console.log(updateAssetList, 'updatedList')
      setAssetList(updatedAssetList);
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
    setNewAsset(asset);
  };

  const handleDelete = (asset) => {
    console.log(asset, 'id')
    const updatedList = assetList.filter((obj) => obj.assetId !== asset.assetId);
    setAssetList(updatedList);
    const storedList = JSON.stringify(updatedList);
    localStorage.setItem("StoredAssetList", storedList);
  };
  

  // useEffect(() => {
  //   if (newAsset && Object.keys(newAsset).length > 0) {
  //     const createAsset = cryptoCurrencies.find(
  //       (obj) => obj.name.toLowerCase() === newAsset.assetName.toLowerCase()
  //     );
  //     if (createAsset) {
  //       const numericValue = newAsset.assetAmount.replace(/\D/g, "");
  //       createAsset.assetAmount = numericValue;
  //       createAsset.assetPurchaseDate = newAsset.assetPurchaseDate;
  //       createAsset.id = Date.now().toString();
  //       const newList = [...assetList, createAsset];
  //       setAssetList(newList);
  //       const storedList = JSON.stringify(newList);
  //       localStorage.setItem('StoredAssetList', storedList);
  //     }
  //   }
  //   if (cryptoCurrencies.length > 0) {
  //     updateAssetList();
  //   }
  //   return () => {
  //     setNewAsset({});
  //   };
  // }, [newAsset, cryptoCurrencies]);

  useEffect(() => {
    if (cryptoCurrencies.length > 0) {
      updateAssetList();
    }
  }, [cryptoCurrencies]);
  
  useEffect(() => {
    if (newAsset && Object.keys(newAsset).length > 0) {
      const createAsset = cryptoCurrencies.find(
        (obj) => obj.name.toLowerCase() === newAsset.assetName.toLowerCase()
      );
      if (createAsset) {
        const numericValue = newAsset.assetAmount.replace(/\D/g, "");
        createAsset.assetAmount = numericValue;
        createAsset.assetPurchaseDate = newAsset.assetPurchaseDate;
        createAsset.assetId = Math.random().toString();
        const newList = [...assetList, createAsset];
        setAssetList(newList);
        const storedList = JSON.stringify(newList);
        localStorage.setItem("StoredAssetList", storedList);
      }
    }
  }, [newAsset]);

  useEffect(() => {
    const storedList = localStorage.getItem('StoredAssetList');
    console.log(storedList)
    if(storedList) {
      setAssetList(JSON.parse(storedList))
    }
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
            handleDelete={handleDelete}
          />
        )}
      </StyledPortfolioPage>
  );
};
export default Portfolio;
