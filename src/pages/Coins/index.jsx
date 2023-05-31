import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";
import ChartOverview from "../../components/ChartOverview";
import TopCryptoCurrencies from "../../components/TopCryptoCurrencies";
import { StyledCoinsPage } from "./Coins.styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../App.styles";

const Coins = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [topCryptoCurrencies, setTopCryptoCurrencies] = useState([]);
  const [coinsMarketPriceArray, setCoinsMarketPriceArray] = useState([]);
  const [coinsMarketDateArray, setCoinsMarketDateArray] = useState([]);
  const [coinsMarketVolumeArray, setCoinsMarketVolumeArray] = useState([]);
  const [coinInfo, setCoinInfo] = useState({});
  const [settings, setSettings] = useState({});
  const [currencyDisplayed, setCurrencyDisplayed] = useState("");
  const [page, setPage] = useState(1);

  const location = useLocation();
  const history = useHistory();

  const getTopCryptoCurrencies = async () => {
    const currency = props.selectedCurrency;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      const sortBy = settings.sortBy;
      const sort = settings.sort;
      const topCryptoCurrencies = data.sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];

        if (valueA < valueB) {
          return sort === "desc" ? 1 : -1;
        }
        if (valueA > valueB) {
          return sort === "desc" ? -1 : 1;
        }
        return 0;
      });
      setTopCryptoCurrencies(topCryptoCurrencies);
      // console.log(topCryptoCurrencies, 'topCrypto', topCryptoCurrencies[0].id, 'firstTopCrypto')
      setCurrencyDisplayed(topCryptoCurrencies[0].id);
      setIsLoading(false);
      // getCoinsMarketChart();
      // console.log(currencyDisplayed, "checking currency");
    } catch (error) {
      console.log(error, "topCoinsError");
      setHasError(true);
      setIsLoading(false);
    }
  };

  const getCoinsMarketChart = async () => {
    const currency = props.selectedCurrency;
    const display = currencyDisplayed;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${display}/market_chart?vs_currency=${currency}&days=180&interval=daily`
      );
      console.log(data, 'data')
      setCoinsMarketDateArray(data.prices.map((item) => item[0]));
      setCoinsMarketPriceArray(data.prices.map((item) => item[1]));
      // console.log(coinsMarketPriceArray, 'priceArray')
      setCoinsMarketVolumeArray(data.total_volumes.map((item) => item[1]));
      setIsLoading(false);
    } catch (error) {
      console.log(error, "marketChartsError");
      setHasError(true);
      setIsLoading(false);
    }
  };

  const sortNameChange = (value) => {
    if (value === "1h") {
      return "price_change_percentage_1h_in_currency";
    }
    if (value === "24h") {
      return "price_change_percentage_24h";
    }
    if (value === "7d") {
      return "price_change_percentage_7d_in_currency";
    }
    if (value === "currentPrice") {
      return "current_price";
    }
    if (value === "id") {
      return "id";
    }
  };

  const handleClick = (id) => {
    const sortBy = sortNameChange(id);
    const currency = props.selectedCurrency;
    let sort = "desc";

    const settings = { currency, sortBy, sort };

    if (sortBy === settings.sortBy) {
      sort = settings.sort === "desc" ? "asc" : "desc";
    }

    console.log()

    const setUrl = queryString.stringify(settings);
    props.history.push(`?${setUrl}`);
  };

  const handleFetchData = async () => {
    setPage(page + 1);
    setIsLoading(true);
    try {
      const currency = props.selectedCurrency;
      const sortBy = settings.sortBy || "market_cap_desc";
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sortBy}&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      console.log(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sortBy}&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      setTopCryptoCurrencies([...topCryptoCurrencies, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCoinsMarketChart();
  }, [currencyDisplayed])

  useEffect(() => {
    setSettings((settings) => ({
      ...settings,
      currency: props.selectedCurrency,
    }));
  }, [props.selectedCurrency]);

  useEffect(() => {
    getTopCryptoCurrencies();
  }, [settings.currency]);

  useEffect(() => {
    const settings = queryString.parse(props.location.search);
    setSettings(settings);
  }, [props.location.search]);

  useEffect(() => {
    getTopCryptoCurrencies();
  }, [settings]);

  useEffect(() => {
    console.log(props.selectedCurrency, 'passedCurrency')
    const settings = queryString.parse(props.location.search);
    if (Object.keys(settings).length === 0) {
      props.history.push(
        `/?currency=${props.selectedCurrency}&sortBy=market_cap&sort=desc`
      );
    }
    setIsLoading(true);
    setSettings(settings);
    getTopCryptoCurrencies();
  }, []);

  const render = isLoading && hasError;

  return (
    <ThemeProvider theme={props.darkMode ? darkTheme : lightTheme}>
      <StyledCoinsPage>
        <ChartOverview
          currencyDisplayed={currencyDisplayed}
          topCryptoCurrencies={topCryptoCurrencies}
          coinsMarketVolumeArray={coinsMarketVolumeArray}
          coinsMarketDateArray={coinsMarketDateArray}
          coinsMarketPriceArray={coinsMarketPriceArray}
          selectedCurrency={props.selectedCurrency}
          currencySymbol={props.currencySymbol}
          darkMode={props.darkMode}
        />
        <TopCryptoCurrencies
          topCryptoCurrencies={topCryptoCurrencies}
          handleClick={handleClick}
          currencySymbol={props.currencySymbol}
          handleFetchData={handleFetchData}
          darkMode={props.darkMode}
        />
      </StyledCoinsPage>
    </ThemeProvider>
  );
};
export default Coins;
