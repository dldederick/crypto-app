import styled from "styled-components"

export const AppDesign = styled.div`
min-width: 1000px;
width: calc(80vw);
// height: 100vh;
display: flex;
position: relative;
border-radius: 10px;
justify-content: center;`

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
