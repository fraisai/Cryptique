import React from 'react'
import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const OneDayChart = ({ name, chartData, maxH = '350px', maxW = '470px' }) => {
  const data = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    labels: chartData.times,
    datasets: [
      {
        label: "Prices of BTC",
        data: chartData.prices,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "111827"
      },
      // {
      //   label: "Second dataset",
      //   data: [33, 25, 35, 51, 54, 76],
      //   fill: false,
      //   borderColor: "#742774"
      // }
    ]
  };

  const options = {
    scales: {
      y: {
        ticks: {
          callback: function(val, index) {
              // Hide every 2nd tick label
              return ('$'+ val); // add $ to y axis vals
            }
        },
        grid: {
          drawOnChartArea: false, 
        },
      },

      x: {
        border: {
          display: true
        },
        ticks: {
          display: false, // removes labels on x axis
          drawTicks: false
        },
        grid: {
          drawOnChartArea: false, // removes gridlines
        },
      }
    },
    responsive: true,
    maintainAspectRatio: false

  }
    return (
    <div style={{maxHeight: maxH }}>
      {name}
      <Line
        datasetIdKey='one-day-chart'
        data={data}
        options={options}
      />

    </div>
  )
}

export default OneDayChart