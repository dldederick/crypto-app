import React, { useState, useEffect } from "react";
import axios from "axios";
import NavPages from "../NavPages";
import NavOptions from "../NavOptions";
import GlobalCoins from "../GlobalCoins";
import BottomNav from "../BottomNav";
import SearchPopUp from '../SearchPopUp'
import {
  StyledNav,
  TopNav,
} from "./Nav.styles";

const Nav = (props) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ hasError, setHasError ] = useState(false);
  const [ searchedCoin, setSearchedCoin ] = useState('');
  const [ dominance, setDominance ] = useState('btc');
  const [ currencies, setCurrencies ] = useState([]);
  const [ activeCryptoCurrencies, setActiveCryptoCurrencies ] = useState(0);
  const [ markets, setMarkets ] = useState(0);
  const [ totalMarketCap, setTotalMarketCap ] = useState(0);
  const [ totalVolume, setTotalVolume ] = useState(0);
  const [ coinsList, setCoinsList ] = useState([]);
  const [ everything, setEverything ] = useState([]);
  const [ currentPage, setCurrentPage] = useState("Overview");
  const [ searchIsSelected, setSearchIsSelected ] = useState(false)

  const getGlobalCryptoCurrencyData = async () => {
    try {
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      setEverything(data);
      setActiveCryptoCurrencies(data.data.active_cryptocurrencies);
      setMarkets(data.data.markets);
      const currencies = Object.keys(data.data.total_market_cap).map((key) =>
        key.toUpperCase()
      );
      setTotalMarketCap(data.total_market_cap[props.selectedCurrency]);
      setTotalVolume(data.total_volume[props.selectedCurrency]);
      setDominance(data.data.market_cap_percentage.btc);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  const getCoinsList = async () => {
    try {
      const { data } = await axios(`https://api.coingecko.com/api/v3/coins/list`);
      setCoinsList(data.map(obj => obj.name));
      setIsLoading(false);
    } catch(error) {
      setIsLoading(false);
      setHasError(true);
    }
  }

  const handleRemoveSearch = () => {
    setSearchIsSelected(false)
  }
  
  const handleClick = () => {
    props.handleClick()
  }

  const handleSelect = (key) => {
    const lowerCase = key.toLowerCase();
    props.handleSelect(lowerCase)
  };

  const handleSubmit = (item) => {
    setSearchedCoin(item)
  }

  const handleBottomNavClick = (value) => {
    setCurrentPage(value);
    if (value === ''){
      setSearchIsSelected(true)
    }
    console.log(currentPage, 'currentPage')
  }

  useEffect(() => {
    getGlobalCryptoCurrencyData()
  }, [props.selectedCurrency])

useEffect(() => {
  setIsLoading(true);
  getGlobalCryptoCurrencyData();
  getCoinsList();
}, [])

  return (
      <StyledNav>
        <TopNav>
          <NavPages />
          <NavOptions
          listOfCurrencies={props.listOfCurrencies}
          handleSelect={handleSelect}
          currencySymbol={props.currencySymbol}
          selectedCurrency={props.selectedCurrency}
          darkMode={props.darkMode}
          coinsList={coinsList}
          handleSubmit={handleSubmit}
          handleClick={handleClick} 
          currentPage={currentPage} />
        </TopNav>
        <GlobalCoins
          coins={activeCryptoCurrencies}
          exchange={markets}
          marketCap={totalMarketCap}
          volume={totalVolume}
          dominance={dominance}
          currencySymbol={props.currencySymbol}
        />
        {searchIsSelected && (
          <SearchPopUp darkMode={props.darkMode} coinsList={coinsList} handleRemoveSearch={handleRemoveSearch} />
        )}
        <BottomNav handleClick={handleBottomNavClick} darkMode={props.darkMode} />
      </StyledNav>
    );
  }
export default Nav;
