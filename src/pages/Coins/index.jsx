import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { StyledCoinsPage, CoinsCont1, CoinsCont2, Cont1Wrapper, Chart1, Chart2, Overview } from './Coins.styles';
import TopCryptoCurrencies from '../../components/TopCryptCurrencies';

export default class Coins extends React.Component {
    state = {
        isLoading: false,
        hasError: false,
        topCryptoCurrencies: []
    }

    getTopCryptoCurrencies = async () => {
        this.setState({ isLoading: true });
        try {
            const { data } = await axios (`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`);
            this.setState({ topCryptoCurrencies: data, isLoading: false })
            
        } catch(error) {
            this.setState({ hasError: true, isLoading: false })
        }
    }

    componentDidMount() {
        this.getTopCryptoCurrencies()
    }
    
    render(){
        console.log(this.state.topCryptoCurrencies[1])
        return(
        <StyledCoinsPage>
            <CoinsCont1>
                <Overview>Your Overview</Overview>
                <Cont1Wrapper>
                    <Chart1></Chart1>
                    <Chart2></Chart2>
                </Cont1Wrapper>
            </CoinsCont1>
            <CoinsCont2>
                <Overview>Market Overview</Overview>
                <TopCryptoCurrencies topCoinsData={this.state.topCryptoCurrencies} />
            </CoinsCont2>
        </StyledCoinsPage>
        )
    }
}