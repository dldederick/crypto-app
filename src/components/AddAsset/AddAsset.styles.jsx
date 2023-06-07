import styled from "styled-components";

export const StyledAddAsset = styled.form`
  width: 650px;
  height: 350px;
  background: ${(props) => props.theme.main};
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  @media (max-width: 1000px) {
    width: 400px;
    top: 35%;
  }
`;

export const AssetInfoCont = styled.div`
  width: 87%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;  

  @media (max-width: 1000px) {
    // height: 80%;
    justify-content: center;
  }
`;

export const AssetInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 90%;
    justify-content: center;
    // border: 1px red solid;
    gap: 10px;
  }
`;

export const AssetImageCont = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const AssetImageContAlt = styled.div`
  display: none;

  @media (max-width: 1000px) {
    width: 50%;
    height: 100%;
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.secondary};
    border-radius: 10px;
    padding-top: 5px;
  }
`;

export const AssetImage = styled.div`
  height: 60px;
  width: 60px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const SelectCoin = styled.div`
  width: 370px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  color: #a9a9a9;
  font-size: 13px;
  text-indent: 10px;
  position: relative;

  input {
    width: 200px;
    height: 30px;
    background: none;
    border: none;
    border-bottom: 1px ${(props) => (props.darkMode ? "#1F2128" : "#a9a9a9")}
      solid;
    outline: none;
    font-size: 13px;
    outline: none;
    text-indent: 5px;
    color: ${(props) => props.theme.text};
  }
`;

export const PurchaseAmount = styled.div`
  width: 370px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  font-size: 13px;
  text-indent: 10px;
  color: #a9a9a9;

  input {
    width: 177px;
    height: 30px;
    background: none;
    border: none;
    outline: none;
    font-size: 13px;
    border: none;
    border-bottom: 1px ${(props) => (props.darkMode ? "#1F2128" : "#a9a9a9")}
      solid;
    outline: none;
    text-indent: 5px;
    color: ${(props) => props.theme.text};
  }
`;

export const PurchaseDate = styled.div`
  width: 370px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  font-size: 13px;
  color: #a9a9a9;
  text-indent: 10px;

  input:nth-child(1) {
    height: 30px;
    width: 30px;
    background: none;
    border: none;
    border-bottom: 1px ${(props) => (props.darkMode ? "#1F2128" : "#a9a9a9")}
      solid;
    outline: none;
    text-align: center;
    font-size: 13px;
    color: ${(props) => props.theme.text};
  }

  input:nth-child(2) {
    height: 30px;
    width: 25px;
    background: none;
    border: none;
    border-bottom: 1px ${(props) => (props.darkMode ? "#1F2128" : "#a9a9a9")}
      solid;
    outline: none;
    text-align: center;
    font-size: 13px;
    color: ${(props) => props.theme.text};
  }

  input:nth-child(3) {
    height: 30px;
    width: 40px;
    background: none;
    border: none;
    border-bottom: 1px ${(props) => (props.darkMode ? "#1F2128" : "#a9a9a9")}
      solid;
    outline: none;
    text-align: center;
    font-size: 13px;
    color: ${(props) => props.theme.text};
  }
`;

export const ButtonCont = styled.div`
  width: 100%;
  // height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CloseButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  font-size: 15px;
  border: none;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.text};
`;

export const AddButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  font-size: 15px;
  border: none;
  background-color: ${(props) => props.theme.addButton};
  color: ${(props) => props.theme.addButtonText};
`;

export const SearchAssets = styled.div`
  width: 233px;
  max-height: 162px;
  position: absolute;
  padding-top: 5px;
  top: 70px;
  right: 42px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: ${(props) => props.theme.secondary};
  

  @media (max-width: 1000px) {
    // border: 1px red solid;
    top: 43%;
    // height: 200px;
    padding-top: 10px;
    right: 13px;
    border-bottom-right-radius: ${(props) => props.showDropDown ? '0' : '10px'};
    z-index: 10;
  }
`;

export const Assets = styled.div`
  width: 100%;
  text-indent: 10px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.text};
  font-size: 13px;
`;
