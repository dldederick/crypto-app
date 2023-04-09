import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Coins from "./pages/Coins";
import Portfolio from "./pages/Portfolio";
import { AppDesign } from "./App.styles";

export default class App extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    activeCryptoCurrencies: 0,
  };

  // 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'

  getActiveCryptoCurrencies= async () => {
    try {
      const { data } = await axios(
        'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?convert=BTC,SGD',
        {
          headers: {
            "X-CMC_PRO_API_KEY": 'b2160b05-d2ce-445c-a7e2-144e31dde65b',
            // "process.env.REACT_APP_API_KEY"
          },
        }
      );
      const activeCryptoCurrencies = data.data.active_cryptocurrencies;
      // const activeCryptoCurrencies = data.data.quote.active_cryptocurrencies;
      this.setState({ activeCryptoCurrencies, isLoading: false });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getActiveCryptoCurrencies();
  }

  render() {
    // console.log(data, activeCurrencies, this.state.globalActiveCurrencies)
    return (
      <Router>
        <AppDesign>
          <Nav activeCryptoCurrencies={this.state.activeCryptoCurrencies} />
          <Switch>
            <Route exact path="/coins" component={Coins} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </AppDesign>
      </Router>
    );
  }
}
