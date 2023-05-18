import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import getSymbolFromCurrency from "currency-symbol-map";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import Coins from "./pages/Coins";
import CoinInfoPage from "./pages/CoinInfoPage";
import Portfolio from "./pages/Portfolio";
import { AppDesign } from "./App.styles";
import axios from "axios";

export default class App extends React.Component {
  state = {
    listOfCurrencies: [],
    selectedCurrency: "usd",
    currencySymbol: "",
    isLoading: false,
    hasError: false,
    darkMode: true,
  };

  darkTheme = {
    main: "#191B1F",
    secondary: "#1F2128",
  };

  lightTheme = {
    main: "#FFFFFF",
    secondary: "#FFFF00",
  };

  getSupportedCurrencies = async () => {
    try {
      const { data } =
        await axios(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies
`);
      this.setState({ listOfCurrencies: data, isLoading: false });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  handleSelect = (key) => {
    this.setState({ selectedCurrency: key });
    // localStorage.setItem('SelectedCurrency', key)
  };

  handleClick = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  componentDidMount() {
    // const storedCurrency = localStorage.getItem('SelectedCurrency');
    // if (storedCurrency){
    //   this.setState({ selectedCurrency: JSON.parse(storedCurrency) })
    // }

    this.setState({ isLoading: true });
    this.getSupportedCurrencies();
    const symbol = getSymbolFromCurrency(this.state.selectedCurrency);
    this.setState({ currencySymbol: symbol });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCurrency !== this.state.selectedCurrency) {
      const symbol = getSymbolFromCurrency(this.state.selectedCurrency);
      this.setState({ currencySymbol: symbol });
    }
  }

  render() {
    // console.log(this.state.selectedCurrency)
    return (
      <ThemeProvider
        theme={this.state.darkMode ? this.darkTheme : this.lightTheme}
      >
        <Router>
          <AppDesign>
            <Nav
              selectedCurrency={this.state.selectedCurrency}
              currencySymbol={this.state.currencySymbol}
              listOfCurrencies={this.state.listOfCurrencies}
              handleSelect={this.handleSelect}
              handleClick={this.handleClick}
            />
            <Switch>
              <Route
                exact
                path="/">
                  <Coins
                    selectedCurrency={this.state.selectedCurrency}
                    currencySymbol={this.state.currencySymbol}
                  />
              </Route>
              <Route
                exact
                path="/coin/:coinId"
                component={(props) => (
                  <CoinInfoPage
                    {...props}
                    selectedCurrency={this.state.selectedCurrency}
                  />
                )}
              ></Route>
              <Route exact path="/portfolio">
                <Portfolio
                  selectedCurrency={this.state.selectedCurrency}
                  currencySymbol={this.state.currencySymbol}
                />
              </Route>
            </Switch>
          </AppDesign>
        </Router>
      </ThemeProvider>
    );
  }
}
