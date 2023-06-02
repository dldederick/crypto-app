import { Link } from 'react-router-dom'
import styled from "styled-components";

export const StyledTopCurrencies = styled.div`
  width: 100%;
  padding: 15px 10px 0 10px;
  background-color: ${(props) => props.theme.main};
  border-radius: 10px;
  border-top-left-radius: 0px;
  flex-wrap: nowrap;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    border-top-right-radius: 0px;
    align-items: start;
    overflow-x: scroll;
  }
`;

export const TopCurrencyHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 50px;
  border-bottom: 4px #646263 solid;
  white-space: nowrap;
  

  div {
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 1000px) {
    width: unset;
  }
  `;

export const TopCurrencyList = styled.div`
width: 95%;
// overflow-x: scroll;
// box-sizing: border-box;
white-space: nowrap;

@media (max-width: 1000px) {
  width: unset;
}
`

export const TopCurrencyCont = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  align-items: center;
  // width: 100%;
  // max-width: 800px;
  height: 50px;
  border-bottom: 1px ${(props) => props.theme.secondary} solid;
  // white-space: nowrap;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  // box-sizing: border-box;

  div {
    // overflow: hidden;
    // overflow-x: scroll;
  }
`;

export const TopIndex = styled.div`
  width: 20px;
`;

export const TopIndexHeader = styled.div`
width: 20px;
`;

export const TopId = styled.div`
  width: 200px;
  background-image: url(${(props) => props.image});
  background-size: 20px 20px;
  background-position: left;
  background-repeat: no-repeat;
  text-indent: 35px;
`;

export const TopIdHeader = styled.div`
  width: 200px;
  background-image: ${(props) => props.darkMode ? 'url(https://i.postimg.cc/9fL0nrkP/Sort-arrow-2x.png)' : 'url(https://i.postimg.cc/nLm10Nbg/direction-01-2.png)'};
  background-size: 15px 15px;
  background-position: left;
  background-repeat: no-repeat;
  text-indent: 35px;
`;

export const TopCurrentPrice = styled.div`
  width: 100px;
`;

export const TopCurrentPriceHeader = styled.div`
  width: 100px;
  background-image: ${(props) => props.darkMode ? 'url(https://i.postimg.cc/9fL0nrkP/Sort-arrow-2x.png)' : 'url(https://i.postimg.cc/nLm10Nbg/direction-01-2.png)'};
  background-size: 15px 15px;
  background-position: left;
  background-repeat: no-repeat;
  text-indent: 20px;
`;

export const Top1h = styled.div`
  width: 100px;
  text-indent: 19px;
  color: ${(props) => (props.value > 0 ? " #00ff5f" : "#D9123A")};
  background-image: url(${(props) =>
    props.value > 0
      ? "https://i.postimg.cc/bJxz2MGv/Polygon-2.png"
      : "https://i.postimg.cc/xCqJqzr1/Polygon-3-1.png"});
  background-position: left;
  background-repeat: no-repeat;
  background-size: 10px 4px;
`;

export const Top24h = styled.div`
  width: 100px;
  text-indent: 19px;
  color: ${(props) => (props.value > 0 ? " #00ff5f" : "#D9123A")};
  background-image: url(${(props) =>
    props.value > 0
      ? "https://i.postimg.cc/bJxz2MGv/Polygon-2.png"
      : "https://i.postimg.cc/xCqJqzr1/Polygon-3-1.png"});
  background-position: left;
  background-repeat: no-repeat;
  background-size: 10px 4px;
`;

export const Top7d = styled.div`
  width: 100px;
  text-indent: 19px;
  color: ${(props) => (props.value > 0 ? " #00ff5f" : "#D9123A")};
  background-image: url(${(props) =>
    props.value > 0
      ? "https://i.postimg.cc/bJxz2MGv/Polygon-2.png"
      : "https://i.postimg.cc/xCqJqzr1/Polygon-3-1.png"});
  background-position: left;
  background-repeat: no-repeat;
  background-size: 10px 4px;
`;

export const TopVolumeMarketCap = styled.div`
  width: 180px;
`;

export const Top1hHeader = styled.div`
  width: 100px;
  text-indent: 19px;
  background-image: ${(props) => props.darkMode ? 'url(https://i.postimg.cc/9fL0nrkP/Sort-arrow-2x.png)' : 'url(https://i.postimg.cc/nLm10Nbg/direction-01-2.png)'};
  background-size: 15px 15px;
  background-position: left;
  background-repeat: no-repeat;
`;

export const Top24hHeader = styled.div`
  width: 100px;
  text-indent: 19px;
  background-image: ${(props) => props.darkMode ? 'url(https://i.postimg.cc/9fL0nrkP/Sort-arrow-2x.png)' : 'url(https://i.postimg.cc/nLm10Nbg/direction-01-2.png)'};
  background-size: 15px 15px;
  background-position: left;
  background-repeat: no-repeat;
`;

export const Top7dHeader = styled.div`
  width: 100px;
  text-indent: 19px;
  background-image: ${(props) => props.darkMode ? 'url(https://i.postimg.cc/9fL0nrkP/Sort-arrow-2x.png)' : 'url(https://i.postimg.cc/nLm10Nbg/direction-01-2.png)'};
  background-size: 15px 15px;
  background-position: left;
  background-repeat: no-repeat;
`;

export const CirculatingSupplyValues = styled.div`
  width: 100%;
  height: 22px;
  display: flex;
  font-size: 13px;
  justify-content: space-between;
`;

export const CirculatingValue = styled.div`
  text-align: left;
`;

export const SupplyValue = styled.div`
  text-align: right;
`;

export const CirculatingSupplyPercentageBar = styled.div`
  height: 8px;
  width: ${(props) => props.supplyPercentage * 100}%;
  background-color: #6699ff;
  border-radius: 5px;
`;

export const TopSupply = styled.div`
  width: 180px;
`;

export const Top7dChart = styled.div`
  width: 80px;
`;

export const VolumeMarketCapValues = styled.div`
  width: 100%;
  height: 22px;
  display: flex;
  font-size: 13px;
  justify-content: space-between;
`;

export const VolumeValue = styled.div`
  text-align: left;
`;

export const MarketCapValue = styled.div`
  text-align: right;
`;

export const TotalBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 5px;
`;

export const VolumeMarketCapPercentageBar = styled.div`
  height: 8px;
  width: ${(props) => props.volumePercentage * 100}%;
  background-color: #6699ff;
  border-radius: 5px;
`;

export const CoinsCont2 = styled.div`
width: 90%;
// height: 600px;
margin: 0 auto;
margin-top: 80px;
`

export const Overview = styled.div`
background-color: ${(props) => props.theme.main};
border-top-right-radius: 10px;
border-top-left-radius: 10px;
width: 350px;
text-align: center;
height: 40px;
line-height: 40px;

@media (max-width: 1000px) {
  width: 100%;
}`