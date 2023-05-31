import styled from "styled-components";

export const CurrencySelectStyles = styled.div`
  width: 90px;
  height: 45px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  // background-color: #2c2f36;
  border-radius: 5px;
  position: relative;
  // border: 1px red solid;
`;

export const CoinSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.darkMode ? '#00ff5f' : '#646263'};
  text-align: center;
  background-color: none;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  background-image: url(https://i.postimg.cc/SxHdpyJ6/Polygon-4.png);
  background-position: top 12px right 5px;
  background-repeat: no-repeat;
  background-size: 10px 5px;
`;
