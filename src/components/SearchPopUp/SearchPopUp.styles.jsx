import styled from "styled-components";

export const StyledSearchPopUp = styled.div`
  width: 100%;
  height: 819px;
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  padding-top: 100px;

  form {
    width: 285px;
    height: 60px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    // background: #646263;
    background: #191B1F;
  }

  input {
    height: 40px;
    width: 265px;
    // background: #1F2128;
    background: rgba(255, 255, 255, .1);
    border: none;
    border-radius: 5px;
    border-bottom-right-radius: ${(props) => (props.hasLength ? '5px' : '0')};
    border-bottom-left-radius: ${(props) => (props.hasLength ? '5px' : '0')};
    outline: none;
    // border-bottom: 1px ${(props) => props.theme.text} solid;
    background-image: ${(props) =>
      props.darkMode
        ? "url(https://i.postimg.cc/ncZpvPtZ/Search.png)"
        : "url(https://i.postimg.cc/h4wdpZvL/Search-1.png)"};
    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-position: 10px;
    text-indent: 38px;
    font-size: 15px;
    color: white;
  }

  input::placeholder {
    color: white;
  }
`;
