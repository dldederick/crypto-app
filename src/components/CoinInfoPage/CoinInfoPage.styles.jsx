import styled from 'styled-components';

export const StyledCoinInfo = styled.div`
width: 90%;
display: flex;
justify-content: center;
padding-top: 200px;
`
export const SummaryWrapper = styled.div`
width: 100%;
height: 300px;
background-color: #191B1F;
display: flex;
justify-content: space-between;
border-radius: 10px;
`

export const CoinCont = styled.div`
width: 30%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;`

export const CoinName = styled.div`
width: 100%;
height: 70%;
background-image: url(${props => props.image});
background-size: 20px 20px;
background-repeat: no-repeat;
`

export const CoinLink = styled.div`
width: 100%;
height: 20%;
`

export const CoinHighlights = styled.div`
width: 30%;
height: 100%;
`

export const CoinSpecfics = styled.div`
width: 30%;
height: 100%;
`

export const DescriptionWrapper = styled.div`
background-color: #191B1F;`

export const LinkWrapper = styled.div``

export const ConvertCont = styled.div``

