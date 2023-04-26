import React from 'react';
import { StyledInput } from './SearchBar.styles';
import SearchMatches from '../SearchMatches';

export default class SearchBar extends React.Component {
    state = {
        filteredValue: '',
        // hasValue: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.filteredValue);
    }

    handleChange = (e) => {
        this.setState({ filteredValue: e.target.value })
    }

    render(){
        const hasLength = this.state.filteredValue.length > 0 ? true : false;
        return(
            <form onSubmit={this.handleSubmit}>
                <StyledInput placeholder='Search' onChange={this.handleChange} value={this.state.filteredValue} ></StyledInput>
                {hasLength && <SearchMatches coinsList={this.props.coinsList} filteredValue={this.state.filteredValue} />}
            </form>
            
        )
    }
}