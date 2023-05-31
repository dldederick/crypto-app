import React from 'react';
import { StyledThemeButton } from './ThemeSelect.styles'

export default function ThemeSelect(props) {
    const handleClick = () => {
        props.handleClick();
    }
    return (
        <StyledThemeButton onClick={() => handleClick()} darkMode={props.darkMode}></StyledThemeButton>
    )
}