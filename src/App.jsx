import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Nav';
import Coins from './pages/Coins';
import Portfolio from './pages/Portfolio';
import { AppDesign } from "./App.styles";

export default function App() {
  return (
    <Router>
      <AppDesign >
        <Nav />
        <Switch>
          <Route exact path="/coins" component={Coins} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </AppDesign>
    </Router>
  );
}