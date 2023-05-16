import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import getSymbolFromCurrency from "currency-symbol-map";
import Nav from "./components/Nav";
import Coins from "./pages/Coins";
import CoinInfoPage from "./components/CoinInfoPage";
import Portfolio from "./pages/Portfolio";
import { AppDesign } from "./App.styles";
import axios from "axios";

export default class App extends React.Component {
  state = {
    listOfCurrencies: [],
    selectedCurrency: "usd",
    currencySymbol: '',
    isLoading: false,
    hasError: false,
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
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getSupportedCurrencies();
    const symbol = getSymbolFromCurrency(this.state.selectedCurrency);
    this.setState({ currencySymbol: symbol })
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.selectedCurrency !== this.state.selectedCurrency){
      const symbol = getSymbolFromCurrency(this.state.selectedCurrency);
      this.setState({ currencySymbol: symbol })
    }
  }

  render() {
    // console.log(this.state.listOfCurrencies, 'app');
    return (
      <Router>
        <AppDesign>
          <Nav
            selectedCurrency={this.state.selectedCurrency}
            currencySymbol={this.state.currencySymbol}
            listOfCurrencies={this.state.listOfCurrencies}
            handleSelect={this.handleSelect}
          />
          <Switch>
          <Route exact path="/">
              <Coins selectedCurrency={this.state.selectedCurrency} currencySymbol={this.state.currencySymbol} />
            </Route>
            <Route exact path="/coin/:coinId" component={CoinInfoPage} />
            <Route exact path="/portfolio">
              <Portfolio selectedCurrency={this.state.selectedCurrency} currencySymbol={this.state.currencySymbol}/>
            </Route>
          </Switch>
        </AppDesign>
      </Router>
    );
  }
}
