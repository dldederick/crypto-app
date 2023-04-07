import React from "react";
import { Link } from 'react-router-dom';
export default class Nav extends React.Component {
  state = {};

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/coins">Coins</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    );
  }
}