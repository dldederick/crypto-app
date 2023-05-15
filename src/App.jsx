import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
  }

  render() {
    // console.log(this.state.listOfCurrencies, 'app');
    return (
      <Router>
        <AppDesign>
          <Nav
            selectedCurrency={this.state.selectedCurrency}
            listOfCurrencies={this.state.listOfCurrencies}
            handleSelect={this.handleSelect}
          />
          <Switch>
          <Route exact path="/">
              <Coins selectedCurrency={this.state.selectedCurrency} />
            </Route>
            <Route exact path="/coin/:coinId" component={CoinInfoPage} />
            <Route exact path="/portfolio">
              <Portfolio selectedCurrency={this.state.selectedCurrency} />
            </Route>
          </Switch>
        </AppDesign>
      </Router>
    );
  }
}
