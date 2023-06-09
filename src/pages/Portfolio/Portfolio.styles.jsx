import styled from "styled-components";

export const StyledPortfolioPage = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.secondary};
  padding-top: 200px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  gap: 200px;
  align-items: center;
  position: relative;

  @media (max-width: 1000px) {
    padding-top: 140px;
    height: 100%;
    padding-bottom: 0;
    gap: 50px;
    box-sizing: border-box;
  }
`;

export const NewAssetButton = styled.div`
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #6699ff;
  font-size: 20px;
  font-weight: boldest;
  border-radius: 10px;
  margin-top: 40px;
`;

export const ZeroAssets = styled.div`
  width: 400px;
  background: ${(props) => props.theme.main};
  margin: 0 auto;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  color: ${(props) => props.theme.text}
`;