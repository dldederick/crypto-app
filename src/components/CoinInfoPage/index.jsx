import React from 'react';
import { StyledCoinInfo, SummaryWrapper, CoinCont, CoinName, CoinLink, CoinHighlights, CoinSpecfics, DescriptionWrapper, LinkWrapper, ConvertCont} from './CoinInfoPage.styles';

export default class CoinsInfoPage extends React.Component {
    render() {
        const info = this.props.coinInfo;
        return (
            <StyledCoinInfo>
                <SummaryWrapper>
                    <CoinCont>
                        <CoinName image={info.image?.small}>{info.id}</CoinName>
                        <CoinLink>{info.links?.homepage[0]}</CoinLink>
                    </CoinCont>
                    <CoinHighlights></CoinHighlights>
                    <CoinSpecfics></CoinSpecfics>
                </SummaryWrapper>
                <DescriptionWrapper></DescriptionWrapper>
                <LinkWrapper></LinkWrapper>
                <ConvertCont></ConvertCont>
            </StyledCoinInfo>
        )
    }
}