import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const MarketCharts = ({name}) => {
  console.log("name", name)
  const [totalVol, setTotalVol] = useState([])
  const volumeTradingUrl = `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=1`;
  
  const getVolumeTradingUrl = async () => {
    try {
      await axios.get(volumeTradingUrl)
      .then(res => {
        // setTotalVol(res.data["prices"]); // prices = res.data
        setTotalVol(res.data["total_volumes"]); // prices = res.data

        console.log("totalVol",res.data, res.data["prices"])
      })
      .catch((error) => {
        console.log(`Error in MarketCharts.js getVolumeTradingUrl ${error}`);
      })
    } catch (error) {
      console.log(`Error in MarketCharts.js getVolumeTradingUrl ${error}`);
    }
  }
  useEffect(() => {
      getVolumeTradingUrl();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: `${name.toUpperCase()} Total Trade Volume`,
      },
    },
  };

  const labels = [0, 4, 8, 12, 16, 20, 24];
  const data = {
    labels,
    datasets: [
      {
        label: 'Price converted to BTC',
        data: labels.map((el) => {
          console.log('el', totalVol[el], totalVol[288]);
          return (totalVol[el]);
        }),
        // data: labels.map(() => ({ totalVol })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div><Line options={options} data={data} /></div>
  )
}

export default MarketCharts