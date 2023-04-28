import styled from "styled-components";

export const StyledCoinInfo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  justify-content: center;
  margin: 0 auto;
  padding-top: 200px;
`;
export const SummaryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CoinCont = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
//   justify-content: space-around;
  border: 1px pink solid;

  div {
    display: flex;
    flex-direction: column;
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
  background-position: top center;
`;

export const CoinName = styled.div`
  width: 100%;
  height: 70%;
`;

export const CoinLink = styled.div`
//   width: 100%;
margin: 0 auto;
  height: 20%;
  background-image: url('https://i.postimg.cc/Z5G4b0jy/Icon-awesome-link.png');
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: left;
  text-indent 25px;
`;

export const CoinHighlights = styled.div`
  width: 30%;
  height: 100%;
  border: 1px blue solid;
`;

export const CoinSpecfics = styled.div`
  width: 30%;
  height: 100%;
  border: 1px orange solid;
`;

export const DescriptionWrapper = styled.div`
  background-color: #191b1f;
`;

export const LinkWrapper = styled.div``;

export const ConvertCont = styled.div``;

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
  align-items: center;
`;

export const CoinInfoCont = styled.div`
  background-color: #191b1f;
  height: 300px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid green;
  border-radius: 50%;
`;

export const Period = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
`;
