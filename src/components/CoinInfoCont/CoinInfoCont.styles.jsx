import styled from "styled-components";

export const StyledCoinInfoCont = styled.div`
  background-color: ${(props) => props.theme.main};
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

  @media (max-width: 1000px) {
    border-top-right-radius: 0;
    height: auto;
    padding-bottom: 10px;
  }

  > div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // border: 1px red solid;
    
    @media (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
        justify-content: center;
        gap: 10px;
        height: auto;
      }
  }
`;

export const CoinCont = styled.div`
  width: 20%;
  height: 170px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};

  @media (max-width: 1000px) {
    width: auto;
    gap: 10px;
    padding: 0 10px 0 10px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
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

  @media (max-width:1000px) {
    height: auto;
  }
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
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  //   border: 1px blue solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  color: ${(props) => props.theme.text};

  @media (max-width:1000px) {
    width: 80%;
    padding: 0 10px 0 10px;
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

export const CoinPriceData = styled.div`
    display: flex;
    gap: 20px;
    color: ${(props) => props.theme.text};
    
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
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  //   border: 1px orange solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: ${(props) => props.theme.text};

  @media (max-width:1000px) {
    width: 80%;
    padding: 0 10px 0 10px;
  }
`;

export const CoinMarketVolumeData = styled.div`
  width: 20%;
  height: 170px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  //   border: 1px orange solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: ${(props) => props.theme.text};

  @media (max-width:1000px) {
    width: 80%;
    padding: 0 10px 0 10px;
  }
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
  background-color: ${(props) => props.theme.main};

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
  background-color: ${(props) => props.theme.main};

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

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 97%;
height: 200px;`
