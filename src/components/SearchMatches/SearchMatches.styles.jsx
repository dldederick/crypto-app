import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSearchMenu = styled.div`
width: 402px;
background: ${(props) => props.theme.main};
position: absolute;
top: calc(68%);
padding: 10px;
box-sizing: border-box;
max-height: 200px;
overflow-y: scroll;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;

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
`

export const SuggestedCoin = styled.div`
width: 100%;
height 40px;
`

export const SuggestedCoinLink = styled(Link)`
text-decoration: none;
width: 100%;
height: 100%;
color: ${(props) => props.theme.text};`