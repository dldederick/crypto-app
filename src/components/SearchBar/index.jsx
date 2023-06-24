import React from "react";
import SearchMatches from "../SearchMatches";
import { StyledInput } from "./SearchBar.styles";

export default class SearchBar extends React.Component {
  state = {
    filteredValue: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.filteredValue);
  };

  handleChange = (e) => {
    this.setState({ filteredValue: e.target.value });
  };

  handleClick = () => {
    this.setState({ filteredValue: "" });
  };

  render() {
    const hasLength = this.state.filteredValue.length > 0 ? true : false;
    return (
      <form onSubmit={this.handleSubmit}>
        <StyledInput
          placeholder="Search coins..."
          onChange={this.handleChange}
          value={this.state.filteredValue}
        ></StyledInput>
        {hasLength && (
          <SearchMatches
            coinsList={this.props.coinsList}
            filteredValue={this.state.filteredValue}
            handleClick={this.handleClick}
          />
        )}
      </form>
    );
  }
}
