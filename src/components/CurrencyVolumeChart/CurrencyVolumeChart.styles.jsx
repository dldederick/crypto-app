import styled from 'styled-components';

export const Chart2 = styled.div`
width: 100%;
// height: 450px;
background-color: ${(props) => props.theme.main};
border-radius: 10px;
border-top-right-radius: 0px;
padding: 20px 20px 0px 20px;
box-sizing: border-box;

@media (max-width: 1000px) {
    border-top-left-radius: 0;
}`