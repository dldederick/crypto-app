import styled from 'styled-components';


export const StyledCoinsPage = styled.div`
width: 100%;
height: 100vh;
border-radius: 10px;
// background-color: #1F2128;
background-color: ${(props) => props.theme.secondary};
padding-top: 200px;
color: ${(props) => props.theme.text};
`