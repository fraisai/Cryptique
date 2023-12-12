import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Navbar, Homepage, Cryptocurrencies, Exchanges, News, Coins } from './components';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import InputCryptoTodo from './components/InputCryptoTodo';
import { Button } from '@mantine/core';
import React, {useState, useEffect, useMemo } from 'react'
import axios from 'axios';
import TrendingContainer from './containers/TrendingContainer';
import MarketCharts from './components/MarketCharts';

const App = () => {
// HOMEPAGE.JS
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getCoinInfo = async () => {
    try {
      await axios.get('/home55')
      .then((response) => {
        console.log(response.data)
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
    } catch (error) {
      console.log(`Error in getCoinInfo GET request in App.js: ${error}`);
      alert(`Error in getCoinInfo GET request in App.js: ${error}`);
    }

  }
  
  useEffect(() => {
    getCoinInfo()
  }, [])

// TRENDING.JS
  const [trendingCoins, setTrendingCoins] = useState([]);

  const getTrendingCoins = async () => {
    await axios.get('trending2')
      .then((response) => {
        console.log("getTrendingCoings", response)
        setTrendingCoins(response.data);
      })
      .catch((error) => {
          console.log(`Error in getTrendingCoins GET request in App.js: ${error}`);
          alert(`Error in getTrendingCoins GET request in App.js: ${error}`);
      })
  }

  useEffect(() => {
    getTrendingCoins();
  }, [])

  // // MARKETCHARTS.JS
  // const [totalVol, setTotalVol] = useState([])
  // const volumeTradingUrl = `https://api.coingecko.com/api/v3/coins/${coins.name}/market_chart?vs_currency=usd&days=1`;
  // useEffect(() => {
  //     axios.get(volumeTradingUrl)
  //       .then(res => {
  //         setTotalVol(res.data["prices"]); // prices = res.data
  //         console.log("totalVol",res.data["prices"])
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         // alert('Error in get request MarketCharts.jsx')
  //       })
  //   }, []);


  return (
    <>
      <Button 
        variant="gradient" 
        gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }} 
        style={{height: '10%', width: '100%', margin: '8px auto', }}
      >
        <h1 style={{padding: '8px',}}>Raisa's Crypto Thingamajig</h1>
      </Button>

      <div style={{height: '100%', border: '1px solid black', margin: '10px'}}>
        <Navbar />
      </div>

      <div className="main" style={{margin: '12px', overflow: 'wrap', border: '1px solid black'}}>
        <Routes>
          <Route path="/" element={
            <Homepage
              coins={coins}
              setCoins={setCoins}
              search={search} 
              setSearch={setSearch}
           />
           
          }
          />
          <Route path="/trending" element={<TrendingContainer
            trendingCoins={trendingCoins}
            setTrendingCoins={setTrendingCoins}
            />}/>
          <Route path="/cryptotodo" element={<InputCryptoTodo />}/>
        </Routes>
        
      </div>
    </>
  )
}

export default App


// Getting a 429 error from Coingecko API The HTTP 429 Too Many Requests response status code indicates the user has sent too many requests in a given amount of time ("rate limiting"). 