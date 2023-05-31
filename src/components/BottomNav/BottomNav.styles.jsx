import styled from 'styled-components';

export const StyledBottomNav = styled.div`
display: flex;
justify-content: space-around;
color: white;
font-size: 13px;
background-color: ${(props) => props.theme.main};
color: ${(props) => props.theme.text};
align-items: center;
width: 50%;
height: 40px;
margin: 0 auto;
// border: 1px pink solid;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;`