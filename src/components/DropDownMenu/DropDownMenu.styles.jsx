import styled from "styled-components";

export const StyledDropDown = styled.div`
  width: 120px;
  background-color: ${(props) => props.theme.main};
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  position: absolute;
  top: calc(90%);
  left: 0;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 101;

  input {
    border: none;
    background-color: ${(props) => props.theme.secondary};
    width: 90%;
    height: 30px;
    text-indent: 30px;
    outline: none;
    border-radius: 5px;
    font-size: 13px;
    color: ${(props) => props.theme.text};
    background-image: ${(props) => props.darkMode ? 'url(https://i.postimg.cc/ncZpvPtZ/Search.png)' : 'url(https://i.postimg.cc/h4wdpZvL/Search-1.png)'};
    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-position: 10px;
  }

  input::placeholder {
    color: ${(props) => props.theme.text};
    -webkit-text-fill-color: ${(props) => props.theme.text};
  }
`;

export const CurrencyList = styled.div`
  width: 90%;
  height: 100px;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    
  }
  
  ::-webkit-scrollbar-track {
    background-color: rgba(240, 240, 240, 0.2);
    margin: 10px 0 10px 0;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgba(240, 240, 240, 0.2);
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const CurrencyListItems = styled.div`
  width: 60%;
  padding: 5px 0 5px 0;
  color: ${(props) => props.theme.text};
  text-align: center;
  border-bottom: 1px solid rgba(240, 240, 240, 0.2);
`;


