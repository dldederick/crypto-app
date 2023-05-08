import styled from 'styled-components';

export const StyledAssetList = styled.div`
width: 80%;
// height: 200px;
border: 1px red solid;`

export const ActiveAsset = styled.div`
width: 100%;
height: 250px;
border: 1px blue solid;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #191b1f;
border-radius: 10px;
`

export const ListAssetImageCont = styled.div`
width: 15%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #1f2128;
border-radius: 10px;

> div:nth-child(1) {
    width: 50px;
    height: 50px;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: 50px 50px;
    background-position: center;
}`

export const ListAssetInfoCont = styled.div`
width: 80%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #1f2128;
border-radius: 10px;`