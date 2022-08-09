import React from 'react'

const HomepageContainer = ({}) => {
  return (
  <>
      <div style={{ display: 'flex', flexDirection: 'column', color: 'gray'}}>
        <h1 style={{ alignSelf: 'center', fontFamily: 'Lato'}}>Top 7 Trending Cryptos</h1>
        <h3 style={{ alignSelf: 'center' }}>Data provided by CoinGecko</h3>
        <h6 style={{ alignSelf: 'center' }}>Cards created using Material UI</h6>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gridColumnGap: '14px',gridRowGap: '14px'}}>
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

export default HomepageContainer