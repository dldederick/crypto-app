import {
    Chart as ChartJS,
    BarController,
    BarElement,
    LinearScale,
    CategoryScale,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  import { Chart2 } from './CurrencyVolumeChart.styles'
  import { formatTimestamp } from "../../Utils";
  
  ChartJS.register(
    BarController,
    BarElement,
    LinearScale,
    CategoryScale,
  );

  export default function CurrencyVolumeChart(props) {
    const data = {
        labels: props.dates.map((date) => formatTimestamp(date)),
        datasets: [{
            data: props.volumes,
            backgroundColor: '#6699ff'
        }]
    }

    const options = {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              beginAtZero: false,
              callback: function (value) {
                return (value / 1000000000).toFixed(0) + "B";
              },
            },
          },
        },
      };

    return (
        <Chart2>
            <Bar data={data} options={options} />
        </Chart2>
    )
  }