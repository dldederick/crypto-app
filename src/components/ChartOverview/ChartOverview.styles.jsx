import styled from 'styled-components';

export const CoinsCont1 = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;`

export const Wrapper1 = styled.div`
width: 48%;
`

export const Wrapper2 = styled.div`
width: 48%;
display: flex;
flex-direction: column;
`

// export const CoinsCont2 = styled.div`
// width: 90%;
// // height: 600px;
// margin: 0 auto;
// margin-top: 80px;
// `
// export const Overview = styled.div`
// background-color: #191B1F;
// border-top-right-radius: 10px;
// border-top-left-radius: 10px;
// width: 350px;
// text-align: center;
// height: 40px;
// line-height: 40px;`

export const PriceOverview = styled.div`
background-color: #191B1F;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
width: 350px;
text-align: center;
height: 40px;
line-height: 40px;
background-image: url(${props => props.img});
background-size: 20px 20px;
background-repeat: no-repeat;
background-position: 50px;`

export const VolumeOverview = styled.div`
background-color: #191B1F;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
width: 350px;
text-align: center;
height: 40px;
line-height: 40px;
background-image: url(${props => props.img});
background-size: 20px 20px;
background-repeat: no-repeat;
background-position: 40px;
`

export const VolumeOverviewWrapper = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;`