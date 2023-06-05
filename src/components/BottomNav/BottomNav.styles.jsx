import styled from "styled-components";

export const StyledBottomNav = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 78%;
    height: 80px;
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.text};
    margin: auto;
    position: fixed;
    bottom: 227px;
    left: 0;
    right: 0;
    z-index: 100;
    border-radius: 10px;
  }
`;

export const OverviewTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;

  div:nth-child(1) {
    width: 25px;
    height: 25px;
    background-image: url("https://i.postimg.cc/90kPDZ5r/Category.png");
    background-size: cover;
    background-repeat: no-repeat;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PortfolioTab = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 70px;

div:nth-child(1) {
  width: 25px;
  height: 28px;
  background-image: url("https://i.postimg.cc/13fgRBSQ/Document.png");
  background-size: cover;
  background-repeat: no-repeat;
}

div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchTab = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 70px;

div:nth-child(1) {
  width: 25px;
  height: 25px;
  background-image: url("https://i.postimg.cc/T3DRH4Gp/Search-2.png");
  background-size: cover;
  background-repeat: no-repeat;
}

div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
