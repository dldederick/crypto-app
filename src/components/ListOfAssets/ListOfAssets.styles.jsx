import styled from 'styled-components';

export const StyledAssetList = styled.div`
width: 80%;
// height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
background-color: ${(props) => props.theme.main};
border-radius: 10px;
`

export const ActiveAsset = styled.div`
width: 98%;
height: 250px;
display: flex;
justify-content: space-around;
align-items: center;
background-color: ${(props) => props.theme.main};
border-radius: 10px;
`

export const ListAssetImageCont = styled.div`
width: 15%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.secondary};
border-radius: 10px;
gap: 10px;
color: ${(props) => props.theme.text};

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
justify-content: space-between;
// align-items: center;
border-radius: 10px;

> div:nth-child(1) {
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

> div:nth-child(2) {
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}`

export const AssetHeader = styled.div`
width: 200px;
height: 35%;
color: ${(props) => props.theme.text};
display: flex;
align-items: center;
justify-content: center;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
background-color: ${(props) => props.theme.secondary};
`

export const AssetMarketPerformance = styled.div`
width: 100%;
height: 66%;
background-color: ${(props) => props.theme.secondary};
border-radius: 10px;
border-top-left-radius: 0px;
display: flex;
justify-content: space-around;
align-items: center;
color: ${(props) => props.theme.text};`

export const AssetPerformance = styled.div`
width: 100%;
height: 66%;
background-color: ${(props) => props.theme.secondary};
border-radius: 10px;
border-top-left-radius: 0px;
display: flex;
justify-content: space-around;
align-items: center;
color: ${(props) => props.theme.text};`