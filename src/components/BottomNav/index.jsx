import React from 'react';
import { StyledBottomNav, OverviewTab, PortfolioTab, SearchTab } from './BottomNav.styles'

export default function BottomNav(props) {
    const handleClick = (value) => {
        props.handleClick(value)
    }

    return (
        <StyledBottomNav >
            <OverviewTab to='/' onClick={() => handleClick('Overview')}>
                <div></div>
                <div>Overview</div>
            </OverviewTab>
            <PortfolioTab to='/portfolio' onClick={() => handleClick('Portfolio')}>
                <div></div>
                <div>Portfolio</div>
            </PortfolioTab>
            <SearchTab onClick={() => handleClick('')} >
                <div></div>
                <div>Search</div>
            </SearchTab>
          </StyledBottomNav>
    )
}