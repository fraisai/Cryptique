import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { TextInput } from '@mantine/core';
import Coin from './Coin';
import MarketCharts from './MarketCharts';

const Homepage = ({coins, setCoins, search, setSearch}) => {
  const handleChange = event => {
      setSearch(event.target.value);
      // event.preventdefault()
  }
    
  // this creates an array (filteredCoins) that contains all the bitcoin that match the name or symbol entered in the search bar
  const filteredCoins = coins.filter(coin => {
      if (coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))
      return coin.name
  })

  function filteredCoinsMap() {
    return filteredCoins.map((coin, index) => {
      return (<>
        <div className='coin-div' style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
          <Coin
            img={coin.image}
            key={coin.id}
            name={coin.name}
            market_cap_rank={coin.market_cap_rank}
            market_cap={`$${coin.market_cap.toLocaleString()}`}
            symbol={coin.symbol}
            current_price={`$${coin.current_price}`}
            total_volume={`$${coin.total_volume.toLocaleString()}`} 
          />
        </div>
      </>);
    });
  }
  
  console.log("coins", coins)
  return (<>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ alignSelf: 'center' }}>Homepage</h1>
      <h4 style={{ alignSelf: 'center' }}>Data provided by CoinGecko</h4>
      <h5 style={{ alignSelf: 'center' }}>Cards created using Mantine UI</h5>
    </div>

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Enter name or symbol"
        label="Search Cryptocurrency"
        radius="l"
        size="md"
        onChange={handleChange}
        style={{alignSelf: 'center'}}
      />
    </div>
    <div className='homepage-grid-resize' 
      style={{}}>
    {filteredCoinsMap()}
    </div>

  </>)
}

export default Homepage