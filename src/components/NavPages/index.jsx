import React from 'react';
import { StyledNavPages, StyledLink } from './NavPages.styles';

export default function NavPages() {
    return (
        <StyledNavPages>
            <div>
              <StyledLink to="/">Coins</StyledLink>
            </div>
            <div>
              <StyledLink to="/portfolio">Portfolio</StyledLink>
            </div>
          </StyledNavPages>
    )
}