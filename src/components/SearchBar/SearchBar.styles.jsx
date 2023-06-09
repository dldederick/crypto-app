import styled from 'styled-components';

export const StyledInput = styled.input`
width: 300px;
height: 45px;
border: none;
background: none;
border-bottom: 1px ${(props) => props.theme.text} solid;
background-image: ${(props) => props.darkMode ? 'url(https://i.postimg.cc/ncZpvPtZ/Search.png)' : 'url(https://i.postimg.cc/h4wdpZvL/Search-1.png)'};
background-size: 15px 15px;
background-repeat: no-repeat;
background-position: 10px;
text-indent: 38px;
font-size: 15px;
outline: none;
color: ${(props) => props.theme.text};
position: relative;

&::placeholder {
    color: ${(props) => props.theme.text};
}

@media (max-width: 1000px) {
    display: none;
}`

