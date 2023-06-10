import styled from 'styled-components';

export const StyledCoinsPage = styled.div`
width: 100%;
min-height: 1000px;
border-radius: 10px;
background-color: ${(props) => props.theme.secondary};
padding-top: 200px;
color: ${(props) => props.theme.text};

@media (max-width: 1000px) {
    padding-top: 170px;
    height: 100%;
    box-sizing: border-box;
}
`