import styled from "styled-components";

export const StyledCoinInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};

  @media (max-width: 1000px) {
    // padding-top: 50px;
    height: auto;
    // overflow: hidden;
    overflow-y: scoll;
    // border: 1px red solid;
  }
`;

export const CoinInfoWrapper = styled.div`
  width: 90%;
  display: flex;
  padding-top: 200px;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media (max-width: 1000px) {
    width: 100%;
    align-items: center;
    // border: 1px pink solid;
    overflow-y: scroll;
    padding-top: 130px;
    margin-top: 20px;
  }
`;

export const SummaryWrapper = styled.div`
  width: 100%;
  display: flex;
  // height: 482px;
  flex-direction: column;
  border-radius: 10px;
  // overflow: hidden;

  @media (max-width: 1000px) {
    width: 80%;
    height: auto;
  }
`;

export const CoinInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CoinInfoSummary = styled.div`
  background-color: ${(props) => props.theme.main};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 350px;
  text-align: center;
  height: 40px;
  line-height: 40px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 50px;
  background-color: ${(props) => props.theme.main};
  border-radius: 10px;
  color: ${(props) => props.theme.text};

  @media (max-width: 1000px) {
    width: 80%;
    height: 200px;
    padding: 20px;
    overflow: hidden;
    // overflow-y: scroll;
  }
`;

export const AltCoinDataChart = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`