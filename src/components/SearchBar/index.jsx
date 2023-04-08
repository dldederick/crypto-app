import React from 'react';
import { StyledInput } from './SearchBar.styles'

export default class SearchBar extends React.Component {
    render(){
        return(
            <StyledInput placeholder='Search'></StyledInput>
        )
    }
}