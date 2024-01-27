import React from 'react'
import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const OneDayChart = ({ name, labelName, chartData, maxH = '350px', maxW = '470px' }) => {
  let prices = []
  if (chartData.prices && chartData.prices.lenght > 0){
    prices = chartData.prices.filter((el, ind) => {
      if (ind % 10 === 0) return el;
    })
  
  } 
  const data = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    labels: chartData.times,
    datasets: [
      {
        label: `${labelName}`,
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
          callback: function(val, index) {
            // Hide every 2nd tick label
            index % 2 === 0 ? val : ''
          },
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
    <div style={{maxHeight: maxH }} className='p-6'>
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