import React from 'react';
import { Doughnut } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const OneDayBar = ({ chartData }) => {

  const data = {
    labels: [
      'ETH',
      'BTC',
      'Memecoins'
    ],
    datasets: [{
      label: 'Total Holdings',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  return (
    <div style={{maxHeight: '350px'}} className='p-6'>
      <Doughnut
        data={data}
        // options={options}
        datasetIdKey='one-day-bar'
      />
    </div>
  )
}

export default OneDayBar