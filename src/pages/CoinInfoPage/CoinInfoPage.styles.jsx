import styled from "styled-components";

export const StyledCoinInfo = styled.div`
  width: 100%;
  min-height: 1000px;
  display: flex;
  gap: 50px;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  padding-top: 160px;
  padding-bottom: 50px;

  @media (max-width: 1000px) {
    padding-top: 170px;
    gap: 50px;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    padding-bottom: 60px;
    box-sizing: border-box;
  }
`;

export const SummaryWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  @media (max-width: 1000px) {
    width: 80%;
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
width: 80%;
  padding: 50px;
  background-color: ${(props) => props.theme.main};
  border-radius: 10px;
  color: ${(props) => props.theme.text};
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 80%;
    min-height: 192px;
    padding: 20px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
  }
`;

export const AltCoinDataChart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
