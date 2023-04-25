import { Redirect } from "react-router-dom";
import styled from "styled-components";

export const StyledTopCurrencies = styled.div`
  width: 100%;
  padding: 15px 10px 0 10px;
  background-color: #191b1f;
  border-radius: 10px;
  border-top-left-radius: 0px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
`;

export const TopCurrencyHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 50px;
  border-bottom: 4px #2c2f36 solid;
  white-space: nowrap;

  div {
    color: white;
  }
`;

export const TopCurrencyCont = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 50px;
  border-bottom: 1px #2c2f36 solid;
  white-space: nowrap;
`;

export const TopIndex = styled.div`
  width: 10px;
`;

export const TopId = styled.div`
  width: 200px;
  background-image: url(${(props) => props.image});
  background-size: 20px 20px;
  background-position: left;
  background-repeat: no-repeat;
  text-indent: 35px;
`;

export const TopCurrentPrice = styled.div`
  width: 40px;
`;

export const Top1h = styled.div`
  width: 40px;
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
  width: 40px;
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
  width: 40px;
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

export const Top1hHeader = styled.div`
width: 40px;
text-indent: 19px;`

export const Top24hHeader = styled.div`
width: 40px;
text-indent: 19px;`

export const Top7dHeader = styled.div`
width: 40px;
text-indent: 19px;`

export const TotalBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #2c2f36;
  border-radius: 5px;
`;

export const VolumeMarketCapPercentageBar = styled.div`
  height: 8px;
  width: ${(props) => props.volumePercentage * 100}%;
  background-color: #6699ff;
  border-radius: 5px;
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