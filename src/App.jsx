import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import getSymbolFromCurrency from "currency-symbol-map";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import Coins from "./pages/Coins";
import CoinInfoPage from "./pages/CoinInfoPage";
import Portfolio from "./pages/Portfolio";
import { AppDesign, darkTheme, lightTheme } from "./App.styles";

const App = () => {
  const [listOfCurrencies, setListOfCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [currencySymbol, setCurrencySymbol] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // const [ isSmallScreen, setIsSmallScreen ] = useState(window.innerWidth <= 1000)

  const getSupportedCurrencies = async () => {
    try {
      const { data } =
        await axios(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies
`);
      setListOfCurrencies(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleSelect = (key) => {
    setSelectedCurrency(key);
    localStorage.setItem("SelectedCurrency", key);
  };

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const symbol = getSymbolFromCurrency(selectedCurrency);
    setCurrencySymbol(symbol);
  }, [selectedCurrency]);

  useEffect(() => {
    // const handleResize = () => {
    //   setIsSmallScreen(window.innerWidth <= 700);
    // };

    // window.addEventListener("resize", handleResize);

    const storedCurrency = localStorage.getItem("SelectedCurrency");
    if (storedCurrency) {
      setSelectedCurrency(storedCurrency);
      console.log(storedCurrency, "storedCurrency");
    } else {
      setSelectedCurrency("usd");
      localStorage.setItem("SelectedCurrency", "usd");
    }
    setIsLoading(true);
    getSupportedCurrencies();
    const symbol = getSymbolFromCurrency(selectedCurrency);
    setCurrencySymbol(symbol);
    console.log(selectedCurrency, 'setCurrency');

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };

  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <AppDesign>
          <Nav
            selectedCurrency={selectedCurrency}
            currencySymbol={currencySymbol}
            listOfCurrencies={listOfCurrencies}
            handleSelect={handleSelect}
            handleClick={handleClick}
            darkMode={darkMode}
            // isSmallScreen={isSmallScreen}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Coins
                  {...props}
                  selectedCurrency={selectedCurrency}
                  currencySymbol={currencySymbol}
                  darkMode={darkMode}
                />
              )}
            ></Route>
            <Route
              exact
              path="/coin/:coinId"
              render={(props) => (
                <CoinInfoPage
                  {...props}
                  selectedCurrency={selectedCurrency}
                  darkMode={darkMode}
                />
              )}
            ></Route>
            <Route exact path="/portfolio">
              <Portfolio
                selectedCurrency={selectedCurrency}
                currencySymbol={currencySymbol}
                darkMode={darkMode}
              />
            </Route>
          </Switch>
        </AppDesign>
      </Router>
    </ThemeProvider>
  );
};
export default App;
