import React from 'react';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    Filler,
    PointElement
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  import { formatTimestamp } from '../../Utils';
  import { Chart3 } from './CoinDataChart.styles';

  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
  );

export default function CoinDataChart(props) {
    const data = {
        labels: props.marketDates.map((date) => formatTimestamp(date)),
        datasets: [
          {
            data: props.marketPrices,
            fill: true,
            backgroundColor: "rgb(0, 255, 95, .3)",
            borderColor: "#00ff5f",
            tension: 0.1,
            pointRadius: 0,
          },
        ],
      };
    
      const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
                display: false
            }
          },
          y: {
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              display: false
              },
            },
          },
        };

    return (
        <Chart3>
            <Line data={data} options={options} />
        </Chart3>
    )
}