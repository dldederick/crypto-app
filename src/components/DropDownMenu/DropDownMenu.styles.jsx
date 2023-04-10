import styled from "styled-components";

export const StyledDropDown = styled.div`
  width: 120px;
  background-color: #2c2f36;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  position: absolute;
  top: calc(90%);
  left: 0;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   border: 1px pink solid;

  input {
    border: none;
    background-color: rgba(240, 240, 240, 0.2);
    width: 90%;
    height: 30px;
    text-indent: 30px;
    outline: none;
    border-radius: 5px;
    font-size: 13px;
    color: white;
    background-image: url(https://i.postimg.cc/ncZpvPtZ/Search.png);
    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-position: 10px;
  }

  input::placeholder {
    color: white; /* Standard syntax */
    -webkit-text-fill-color: white; /* Vendor prefix for WebKit browsers */
  }

  div {
    width: 90%;
    height: 100px;
    overflow-y: scroll;
  }
`;
