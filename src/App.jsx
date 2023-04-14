import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Coins from "./pages/Coins";
import Portfolio from "./pages/Portfolio";
import { AppDesign } from "./App.styles";

export default class App extends React.Component {
  state = {
    selectedCurrency: 'usd'
  }
  render() {
    return (
      <Router>
        <AppDesign>
          <Nav activeCryptoCurrencies={this.state.activeCryptoCurrencies} />
          <Switch>
            <Route exact path="/" component={Coins} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </AppDesign>
      </Router>
    );
  }
}
