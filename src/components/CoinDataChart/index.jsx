// import React from 'react';
// import {
//     Chart as ChartJS,
//     LineElement,
//     CategoryScale,
//     LinearScale,
//     Filler,
//     PointElement
//   } from "chart.js";
//   import { Line } from "react-chartjs-2";

//   ChartJS.register(
//     LineElement,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     Filler
//   );

// export default function CoinDataChart(props) {
//     const data = {
//         labels: props.dates.map((date) => formatTimestamp(date)),
//         datasets: [
//           {
//             data: props.prices,
//             fill: true,
//             backgroundColor: "rgb(0, 255, 95, .3)",
//             borderColor: "#00ff5f",
//             tension: 0.1,
//             pointRadius: 0,
//           },
//         ],
//       };
    
//       const options = {
//         plugins: {
//           legend: {
//             display: false,
//           },
//         },
//         scales: {
//           x: {
//             grid: {
//               display: false,
//             },
//           },
//           y: {
//             grid: {
//               display: false,
//             },
//             ticks: {
//               beginAtZero: false,
//               callback: function (value) {
//                 return (value / 1000).toFixed(0) + "K";
//               },
//             },
//           },
//         },
//       };
//     return (

//     )
// }