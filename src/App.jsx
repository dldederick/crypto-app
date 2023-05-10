import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Coins from "./pages/Coins";
import Portfolio from "./pages/Portfolio";
import { AppDesign } from "./App.styles";

export default class App extends React.Component {
  state = {
    selectedCurrency: "usd",
  };

  handleSelect = (key) => {
    this.setState({ selectedCurrency: key })
  }

  render() {
    console.log(this.state.selectedCurrency)
    return (
      <Router>
        <AppDesign>
          <Nav selectedCurrency={this.state.selectedCurrency} handleSelect={this.handleSelect} />
          <Switch>
            <Route exact path="/">
                <Coins selectedCurrency={this.state.selectedCurrency} />
            </Route>
            <Route exact path="/coinId" />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </AppDesign>
      </Router>
    );
  }
}
