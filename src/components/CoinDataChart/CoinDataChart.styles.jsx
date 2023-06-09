import styled from 'styled-components';

export const Chart3 = styled.div`
width: 105%;
// border: 1px red solid;
height: 105%;
background-color: ${(props) => props.theme.main};
border-radius: 10px;
border-top-left-radius: 0px;
padding: 20px 0 0px 0;
box-sizing: border-box;

@media (max-width: 1000px) {
    height: 200px;
}`