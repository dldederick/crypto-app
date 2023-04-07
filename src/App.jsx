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

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/coins" component={Coins} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}