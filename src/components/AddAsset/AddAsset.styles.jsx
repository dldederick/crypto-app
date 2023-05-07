import styled from "styled-components";

export const StyledAddAsset = styled.form`
  width: 600px;
  height: 350px;
  background: #2c2f36;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`;

export const AssetInfoCont = styled.div`
width: 87%;
height: 60%;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
`

export const AssetInfo = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-content: space-between;`

export const AssetImageCont = styled.div`
width: 35%;
height: 100%;
display: flex;
gap: 15px;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #191B1F;
border-radius: 10px;

`

export const AssetImage = styled.div`
    height: 60px;
    width: 60px;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export const SelectCoin = styled.input`
width: 300px;
height: 50px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
background-color: #191B1F;
border: none;
outline: none;
font-size: 13px;
text-indent: 10px;
position: relative;`

export const PurchaseAmount = styled.input`
width: 300px;
height: 50px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
background-color: #191B1F;
border: none;
outline: none;
font-size: 13px;
text-indent: 10px;
`

export const PurchaseDate = styled.input`
width: 300px;
height: 50px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
background-color: #191B1F;
border: none;
outline: none;
font-size: 13px;
text-indent: 10px;
`

export const ButtonCont = styled.div`
width: 100%;
// height: 20%;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`
export const CloseButton = styled.button`
width: 120px;
height: 50px;
border-radius: 10px;
font-size: 15px;
border: none;
background-color: #191B1F;
`
export const AddButton = styled.button`
width: 120px;
height: 50px;
border-radius: 10px;
font-size: 15px;
border: none;
background-color: #191B1F;
color: #00ff5f;`

export const SearchAssets = styled.div`
width: 302px;
max-height: 162px;
position: absolute;
top: 75px;
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
background-color: #191B1F;
`
export const Assets = styled.div`
width: 100%;
text-indent: 10px;
background-color: #191B1F;
color: white;
font-size: 13px;`