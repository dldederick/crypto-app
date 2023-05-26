import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import getSymbolFromCurrency from "currency-symbol-map";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import Coins from "./pages/Coins";
import CoinInfoPage from "./pages/CoinInfoPage";
import Portfolio from "./pages/Portfolio";
import { AppDesign } from "./App.styles";

const App = () => {
const [ listOfCurrencies, setListOfCurrencies ] = useState([]);
const [ selectedCurrency, setSelectedCurrency ] = useState('');
const [ currencySymbol, setCurrencySymbol ] = useState('');
const [ isLoading, setIsLoading ] = useState(false);
const [ hasError, setHasError ] = useState(false);
const [ darkMode, setDarkMode ] = useState(true);

  const darkTheme = {
    main: "#191B1F",
    secondary: "#1F2128",
  };

  const lightTheme = {
    main: "#FFFFFF",
    secondary: "#FFFF00",
  };

  const getSupportedCurrencies = async () => {
    try {
      const { data } =
        await axios(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies
`);
      setListOfCurrencies(data);
      setIsLoading(false)
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleSelect = (key) => {
    setSelectedCurrency(key);
    localStorage.setItem('SelectedCurrency', key)
  };

  const handleClick = () => {
    setDarkMode(!darkMode)
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.selectedCurrency !== this.state.selectedCurrency) {
  //     const symbol = getSymbolFromCurrency(this.state.selectedCurrency);
  //     this.setState({ currencySymbol: symbol });
  //   }
  // }

  useEffect(() => {
    // localStorage.setItem('SelectedCurrency', selectedCurrency)
    const symbol = getSymbolFromCurrency(selectedCurrency);
    setCurrencySymbol(symbol)
  }, [selectedCurrency])

  // componentDidMount() {
    // const storedCurrency = localStorage.getItem('SelectedCurrency');
    // if (storedCurrency){
    //   this.setState({ selectedCurrency: storedCurrency })
    // } else {
    //   this.setState({ selectedCurrency: 'usd' })
    // }

  //   this.setState({ isLoading: true });
  //   this.getSupportedCurrencies();
  //   const symbol = getSymbolFromCurrency(this.state.selectedCurrency);
  //   this.setState({ currencySymbol: symbol });
  // }

  useEffect(() => {
    // console.log(localStorage('SelectedCurrency'))
    const storedCurrency = localStorage.getItem('SelectedCurrency');
    if (storedCurrency){
      setSelectedCurrency(storedCurrency);
    } else {
      setSelectedCurrency('usd');
      localStorage.setItem('SelectedCurrency', 'usd');
    }
    setIsLoading(true);
    getSupportedCurrencies();
    const symbol = getSymbolFromCurrency(selectedCurrency);
    setCurrencySymbol(symbol)
  }, [])

    return (
      <ThemeProvider
        theme={darkMode ? darkTheme : lightTheme}
      >
        <Router>
          <AppDesign>
            <Nav
              selectedCurrency={selectedCurrency}
              currencySymbol={currencySymbol}
              listOfCurrencies={listOfCurrencies}
              handleSelect={handleSelect}
              handleClick={handleClick}
            />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => <Coins
                {...props}
                  selectedCurrency={selectedCurrency}
                  currencySymbol={currencySymbol}
                />}
                >
                  
                  
              </Route>
              <Route
                exact
                path="/coin/:coinId"
                render={(props) => (
                  <CoinInfoPage
                    {...props}
                    selectedCurrency={selectedCurrency}
                  />
                )}
              ></Route>
              <Route exact path="/portfolio">
                <Portfolio
                  selectedCurrency={selectedCurrency}
                  currencySymbol={currencySymbol}
                />
              </Route>
            </Switch>
          </AppDesign>
        </Router>
      </ThemeProvider>
    );
  }
  export default App;
