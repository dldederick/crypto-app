import React from "react";
import { OverviewImg, PortfolioImg, SearchImg } from '../Images/svg'
import {
  StyledBottomNav,
  OverviewTab,
  PortfolioTab,
  SearchTab,
} from "./BottomNav.styles";

export default function BottomNav(props) {
  const handleClick = (value) => {
    props.handleClick(value);
  };

  return (
    <StyledBottomNav>
      <OverviewTab to="/" onClick={() => handleClick("Overview")}>
        <OverviewImg darkMode={props.darkMode} />
        <div>Overview</div>
      </OverviewTab>
      <PortfolioTab to="/portfolio" onClick={() => handleClick("Portfolio")}>
        <PortfolioImg darkMode={props.darkMode} />
        <div>Portfolio</div>
      </PortfolioTab>
      <SearchTab onClick={() => handleClick("")}>
        <SearchImg darkMode={props.darkMode} />
        <div>Search</div>
      </SearchTab>
    </StyledBottomNav>
  );
}
