import React from "react";
import axios from "axios";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import TopCryptoCurrencies from "../../components/TopCryptCurrencies";
import {
  StyledCoinsPage,
  CoinsCont1,
  CoinsCont2,
  Cont1Wrapper,
  Chart1,
  Chart2,
  Overview,
} from "./Coins.styles";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);
export default class Coins extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    topCryptoCurrencies: [],
    coinsMarketPriceArray: [],
    marketPrice: {}
  };

  getTopCryptoCurrencies = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({ topCryptoCurrencies: data, isLoading: false });
    } catch (error) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  getCoinsMarketChart = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily`
        );
      const coinsMarketPriceArray = data.price.map(item => item[1][1]);
      const marketPrice = data;
      this.setState({ marketPrice, coinsMarketPriceArray, isLoading: false })
    } catch(error) {
      this.setState({ hasError: true, isLoading: false })
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getTopCryptoCurrencies();
    this.getCoinsMarketChart();
  }

  render() {
    console.log(this.state.coinsMarketPriceArray);
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const options = {
      // scales: {
      //   yAxes: [
      //     {
      //       ticks: {
      //         beginAtZero: true,
      //       },
      //     },
      //   ],
      // },
    };

    return (
      <StyledCoinsPage>
        <CoinsCont1>
          <Overview>Your Overview</Overview>
          <Cont1Wrapper>
            <Chart1>
              <Line data={data} options={options} />
            </Chart1>
            <Chart2></Chart2>
          </Cont1Wrapper>
        </CoinsCont1>
        <CoinsCont2>
          <Overview>Market Overview</Overview>
          <TopCryptoCurrencies topCoinsData={this.state.topCryptoCurrencies} />
        </CoinsCont2>
      </StyledCoinsPage>
    );
  }
}
