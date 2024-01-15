import React from 'react'
import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { formatter } from '../../componentImports';

const CryptoOneWeekChart = ({ name, chartData, maxH = '350px', maxW = '470px' }) => {
    let xData = chartData.map((el, ind) => ind)
    const data = {
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        labels: xData,
        datasets: [
          {
            label: `Prices of ${name}`,
            data: chartData,
            fill: true,
            backgroundColor: "#fed2ed",
            borderColor: "#111827"
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
                  // return ('$'+ val); // add $ to y axis vals
                  return (formatter.format(val))
                }
            },
            grid: {
              drawOnChartArea: true, 
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
        <div style={{maxHeight: maxH}}>
            <div className='pt-1'>
                {name}
            </div>
          
          <Line
            datasetIdKey='one-day-chart'
            data={data}
            options={options}
          />
    
        </div>
      )
    }

export default CryptoOneWeekChart