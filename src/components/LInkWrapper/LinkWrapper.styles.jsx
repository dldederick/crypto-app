import styled from 'styled-components';

export const StyledLinkWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 80%;
    height: auto;
  }
`;

export const Link = styled.div`
  width: 25%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 80%;
    
  }

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