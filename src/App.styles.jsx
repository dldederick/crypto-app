import styled from "styled-components"

export const AppDesign = styled.div`
width: calc(80vw);
display: flex;
// position: relative;
// top: 0;
border-radius: 10px;
// justify-content: center;
// border: 1px blue solid;
// position: absolute;
// left: 0;
// right: 0;
margin: auto;

@media (max-width: 1000px) {
  height: 1100px;
  // border: 1px blue solid;
}
`

export const darkTheme = {
    main: "#191B1F",
    secondary: "#1F2128",
    text: 'white',
    addButton: '#1F2128',
    addButtonText: '#00ff5f'
  };

export const lightTheme = {
    main: "#FEFEFE",
    secondary: "#e7e6e7",
    text: '#646263',
    addButton: '#00ff5f',
    addButtonText: '#646263'
}
