import React from 'react';
import TrendingCoinCard from '../components/TrendingCoinCard'
import Coin from '../components/Coin'

const TrendingContainer = ({ trendingCoins, setTrendingCoins }) => {

  console.log("trending coins", trendingCoins)

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', color: 'gray'}}>
        <h1 style={{ alignSelf: 'center', fontFamily: 'Lato'}}>Top 7 Trending Cryptos</h1>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gridColumnGap: '14px',gridRowGap: '14px'}}>
      

{/* // const Coin = ({key = new Date(), market_cap_rank, market_cap = 0, name, symbol, img = "none", current_price, total_volume = 0}) => { */}

      {trendingCoins.map(el => {
        return(
            <div style={{margin:'14px'}}>
                <Coin
                    market_cap_rank = {el.item.market_cap_rank}
                    name = {el.item.name}
                    symbol = {el.item.symbol}
                    img = {el.item.large}
                    current_price={`${el.item.price_btc} BTC`}
                />
            </div>
        )
      })}
      </div>
    </>
  )

}

export default TrendingContainer