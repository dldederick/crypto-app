import styled from "styled-components";

export const StyledCoinInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background-color: #1f2128;
`;

export const CoinInfoWrapper = styled.div`
  width: 90%;
  display: flex;
  padding-top: 200px;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const SummaryWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 482px;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
`;

export const CoinCont = styled.div`
  width: 20%;
  height: 170px;
  background: #1f2128;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CoinImage = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.image});
  background-size: 50px 50px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CoinName = styled.div`
  width: 100%;
  height: 80px;
`;

export const CoinLink = styled.div`
margin: 0 auto;
  height: 20%;
  background-image: url('https://i.postimg.cc/Z5G4b0jy/Icon-awesome-link.png');
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: left;
  text-indent 25px;
`;

export const CoinHighlights = styled.div`
  width: 20%;
  height: 170px;
  background: #1f2128;
  border-radius: 10px;
  //   border: 1px blue solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

export const CoinPriceData = styled.div`
    display: flex;
    gap: 20px;
    
    > div:nth-child(2) {
        text-indent: 19px;
        color: ${(props) => (props.value > 0 ? " #00ff5f" : "#D9123A")};
        background-image: url(${(props) =>
          props.value > 0
            ? "https://i.postimg.cc/bJxz2MGv/Polygon-2.png"
            : "https://i.postimg.cc/xCqJqzr1/Polygon-3-1.png"});
        background-position: left;
        background-repeat: no-repeat;
        background-size: 10px 4px;  
    })`;

export const CoinSupplyData = styled.div`
  width: 20%;
  height: 170px;
  background: #1f2128;
  border-radius: 10px;
  //   border: 1px orange solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CoinMarketVolumeData = styled.div`
  width: 20%;
  height: 170px;
  background: #1f2128;
  border-radius: 10px;
  //   border: 1px orange solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const DescriptionWrapper = styled.div`
  padding: 50px;
  background-color: #191b1f;
  border-radius: 10px;
`;

export const CoinInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CoinInfoSummary = styled.div`
  background-color: #191b1f;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 350px;
  text-align: center;
  height: 40px;
  line-height: 40px;
`;

export const TimePeriod = styled.div`
  display: flex;
  background-color: #191b1f;
  justify-content: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 500px;
  height: 40px;
  line-height: 40px;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
`;

export const CoinInfoCont = styled.div`
  background-color: #191b1f;
  height: 400px;
  width: 100%;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  //   justify-content: center;
  align-items: center;

  > div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid green;
  border-radius: 50%;
  background-color: ${(props) =>
    props.item === props.isSelected ? "#00ff5f" : "none"};
`;

export const Period = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
`;

export const CoinSupplyPercent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;

export const CoinSupplyBar = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const CoinSupplyBars = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background-color: #191b1f;

  > div:nth-child(1) {
    width: ${(props) => props.supplyPercent}%;
    height: 100%;
    border-radius: 5px;
    background-color: #6699ff;
  }
`;

export const CoinMarketVolumePercent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;

export const CoinMarketVolumeBar = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const CoinMarketVolumeBars = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background-color: #191b1f;

  > div:nth-child(1) {
    width: ${(props) => props.supplyPercent}%;
    height: 100%;
    border-radius: 5px;
    background-color: #6699ff;
  }
`;

export const CoinAth = styled.div`
  text-align: center;
  //   margin: auto 0;
`;

export const CoinAtl = styled.div`
  text-align: center;
  //   margin: auto 0;
`;

export const ConvertCont = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  // justify-content: space-between;
  gap: 15px;
  margin: 0 auto;
  align-items: center;
`;

export const ConvertIcon = styled.div`
  width: 50px;
  height: 100%;
  background-image: url("https://i.postimg.cc/zfxZRZrh/Icon-awesome-exchang.png");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: center;
`;

export const ConvertCurrencyOne = styled.div`
  width: 45%;
  height: 100%;
  display: flex;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    background-color: #00ff5f;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    color: #191b1f;
    font-size: boldest;
  }

  input {
    width: 70%;
    height: 100%;
    background-color: #191b1f;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    outline: none;
    border: none;
    font-size: 15px;
    text-indent: 15px;
  }
`;

export const ConvertCurrencyTwo = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  border-radius: 10px;

  input {
    width: 70%;
    height: 100%;
    background-color: #191b1f;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    outline: none;
    border: none;
    font-size: 15px;
    text-indent: 15px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    background-color: #00ff5f;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #191b1f;
    font-size: boldest;
  }
`;

// export const LinkWrapper = styled.div`
//   width: 100%;
//   height: 50px;
//   display: flex;
//   justify-content: space-around;
// `;

// export const Link1 = styled.div`
//   width: 25%;
//   border-radius: 10px;
//   background: #191b1f;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   > div:nth-child(1) {
//     width: 20%;
//     height: 100%;
//     background-image: url("https://i.postimg.cc/Z5G4b0jy/Icon-awesome-link.png");
//     background-size: 20px 20px;
//     background-repeat: no-repeat;
//     background-position: center;
//   }

//   > div:nth-child(2) {
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     min-width: 60%;
//     text-align: center;
//   }

//   > div:nth-child(3) {
//     width: 20%;
//     height: 100%;
//     background-image: url("https://i.postimg.cc/JnzzvCm7/Icon-feather-copy.png");
//     background-size: 20px 20px;
//     background-repeat: no-repeat;
//     background-position: center;
//   }
// `;

export const Link2 = styled.div`
  width: 25%;
  height: 100%;
  border-radius: 10px;
  background: #191b1f;
  display: flex;
  justify-content: center;
  align-items: center;

  > div:nth-child(1) {
    width: 20%;
    height: 100%;
    background-image: url("https://i.postimg.cc/Z5G4b0jy/Icon-awesome-link.png");
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    
  }

  > div:nth-child(2) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: 60%;
    text-align: center;
  }

  > div:nth-child(3) {
    width: 20%;
    height: 100%;
    background-image: url("https://i.postimg.cc/JnzzvCm7/Icon-feather-copy.png");
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const Link3 = styled.div`
  width: 25%;
  height: 100%;
  border-radius: 10px;
  background: #191b1f;
  display: flex;
  justify-content: center;
  align-items: center;

  > div:nth-child(1) {
    width: 20%;
    height: 100%;
    background-image: url("https://i.postimg.cc/Z5G4b0jy/Icon-awesome-link.png");
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
  }

  > div:nth-child(2) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: 60%;
    text-align: center;
  }

  > div:nth-child(3) {
    width: 20%;
    height: 100%;
    background-image: url("https://i.postimg.cc/JnzzvCm7/Icon-feather-copy.png");
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
