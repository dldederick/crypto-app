import styled from "styled-components";

export const StyledCurrencyConvert = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  gap: 15px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 1000px) {
    width: 80%;
  }
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

  > div:nth-child(1) {
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
`;

export const ConvertFromCont = styled.div`
width: 70%;
display: flex;

  div {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 20%;
    height: 100%;
    background-color: ${(props) => props.theme.main}
  }

  input {
    width: 80%;
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.text};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    outline: none;
    border: none;
    font-size: 15px;
    text-indent: 3px;
  }
`;

export const ConvertCurrencyTwo = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  border-radius: 10px;

  > div:nth-child(2) {
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

export const ConvertToCont = styled.div`
width: 70%;
display: flex;

div {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 20%;
  height: 100%;
  background-color: ${(props) => props.theme.main};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

input {
  width: 90%;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-size: 15px;
  text-indent: 3px;
}`;
