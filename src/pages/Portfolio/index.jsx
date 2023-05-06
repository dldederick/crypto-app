import React from 'react';
import { render } from 'react-dom';
import { StyledPortfolioPage } from './Portfolio.styles';
import { ZeroAssets, AddAsset } from './Portfolio.styles'

export default class Coins extends React.Component {
    state = {
        assetList: []
    }
    
    render(){
        return(
        <StyledPortfolioPage>
            <AddAsset>Add Asset</AddAsset>
            {this.state.assetList.length < 1 && <ZeroAssets>You currently have 0 assets.</ZeroAssets>}
        </StyledPortfolioPage>
        )
    }
}