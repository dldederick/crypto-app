import React from 'react';
import { StyledBottomNav, OverviewTab, PortfolioTab, SearchTab } from './BottomNav.styles'

export default function BottomNav() {
    return (
        <StyledBottomNav>
            <OverviewTab>
                <div></div>
                <div>Overview</div>
            </OverviewTab>
            <PortfolioTab>
                <div></div>
                <div>Portfolio</div>
            </PortfolioTab>
            <SearchTab>
                <div></div>
                <div>Search</div>
            </SearchTab>
          </StyledBottomNav>
    )
}