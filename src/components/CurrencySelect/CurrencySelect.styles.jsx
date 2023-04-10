import styled from "styled-components";

export const CurrencySelectStyles = styled.div`
  width: 120px;
  height: 45px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: #2c2f36;
  border-radius: 5px;
  position: relative;
`;

export const MoneyImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00ff5f;
  text-align: center;
  background-color: #191b1f;
  border-radius: 50%;
  width: 22px;
  height: 22px;
`;

export const MoneyOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 33px;

  span {
    color: white;
  }
`;

export const DropdownVector = styled.div`
  background-image: url(https://i.postimg.cc/SxHdpyJ6/Polygon-4.png);
  background-position: center;
  background-repeat: no-repeat;
  outline: none;
  border: none;
  width: 15px;
  height: 8px;
`;
