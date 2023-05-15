import React, { useState } from "react";
import DropDownMenu from "../DropDownMenu";
import {
  CurrencySelectStyles,
  CoinSelected,
  DropdownVector,
} from "./CurrencySelect.styles";

const CurrencySelect = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleClick = (e) => {
    setIsClicked(!isClicked);
  };

  const handleSelect = (key) => {
    setSelectedCurrency(key.toUpperCase());
    props.handleSelect(key);
    handleClick;
  };

  console.log(isClicked, "hello");
  return (
    <CurrencySelectStyles>
      <CoinSelected>${selectedCurrency}</CoinSelected>
      <DropdownVector onClick={handleClick}></DropdownVector>
      {isClicked && (
        <DropDownMenu
          handleSelect={handleSelect}
          listOfCurrencies={props.listOfCurrencies}
        />
      )}
    </CurrencySelectStyles>
  );
};

export default CurrencySelect;

// export default class CurrencySelect extends React.Component {
//   state = {
//     isClicked: false,
//     selectedCurrency: "USD",
//   };

//   handleClick = (e) => {
//     this.setState({
//       isClicked: !prevState.isClicked,
//     });
//   };

//   handleSelect = (key) => {
//     this.setState({ selectedCurrency: key.toUpperCase() });
//     this.props.handleSelect(key);
//     this.handleClick();
//   };

//   render() {
//     console.log(this.state.isClicked, "hello");
//     return (
//       <CurrencySelectStyles>
//         <CoinSelected>${this.state.selectedCurrency}</CoinSelected>
//         <DropdownVector onClick={this.handleClick}></DropdownVector>
//         {this.state.isClicked && (
//           <DropDownMenu
//             handleSelect={this.handleSelect}
//             listOfCurrencies={this.props.listOfCurrencies}
//           />
//         )}
//       </CurrencySelectStyles>
//     );
//   }
// }
