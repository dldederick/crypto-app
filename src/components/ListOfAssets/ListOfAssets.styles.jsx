import styled from "styled-components";

export const StyledAssetList = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => props.theme.main};
  border-radius: 10px;

  @media (max-width: 1000px) {
    justify-content: start;
    max-height: 620px;
    width: 90%;
    overflow: hidden;
    overflow-y: scroll;
  }
`;

export const ActiveAsset = styled.div`
  width: 98%;
  height: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.main};
  border-radius: 10px;

  @media (max-width: 1000px) {
    width: 95%;
    gap: 10px;
  }
`;

export const ListAssetImageCont = styled.div`
  width: 15%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  gap: 10px;
  color: ${(props) => props.theme.text};

  @media (max-width: 1000px) {
    width: 20%;
  }

  > div:nth-child(1) {
    width: 50px;
    height: 50px;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: 50px 50px;
    background-position: center;
  }
`;

export const ListAssetInfoCont = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;

  @media (max-width: 1000px) {
    overflow-x: scroll;
  }

  > div:nth-child(1) {
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  > div:nth-child(2) {
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const AssetHeader = styled.div`
  width: 240px;
  height: 35%;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;

  > div:nth-child(1) {
    height: 100%;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.secondary};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  > div:nth-child(2) {
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: ${(props) => props.theme.secondary};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

export const AssetMarketPerformance = styled.div`
  height: 66%;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  border-top-left-radius: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.text};

  @media (max-width: 1000px) {
    gap: 20px;
    justify-content: start;
    padding: 0 20px 0 20px;
    white-space: nowrap;
    min-width: fit-content;
  }
`;

export const AssetPerformance = styled.div`
  width: 100%;
  height: 66%;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  border-top-left-radius: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.text};

  @media (max-width: 1000px) {
    gap: 20px;
    justify-content: start;
    padding: 0 20px 0 20px;
    white-space: nowrap;
    min-width: fit-content;
  }
`;
