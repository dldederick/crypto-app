import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  import { Top7d } from './Sparklines.styles'
  import { readableNum } from '../../Utils'
  
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
  );

  export default function Sparkline(props) {
    const days = props.data.filter((value, index) => index % 24 === 0).map((value, index) => index);
    const amount = props.data.filter((value, index) => index % 24 === 0).map((value, index) => value);
    console.log('howdy', days, amount)
    
    const data = {
        labels: days,
        datasets: [
          {
            data: amount,
            borderColor: amount[0] < amount[amount.length-1] ? "#00ff5f" : 'red',
            tension: 0.1,
            pointStyle: false,
          },
        ],
      };
    
      const options = {
        maintainAspectRatio: false,
        responsive: true,
        aspectRatio: 2,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
                display: false,
            }
          },
          y: {
            display: false,
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              display: false,
            },
          },
        },
      };
    return (
        <Top7d>
            <Line data={data} options={options} />
        </Top7d>
    )
  }