export const geckoTrendingOptions = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/search/trending',
};

/**
 * {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400","current_price":52183.56,"market_cap":1028802505385,"market_cap_rank":1,"fully_diluted_valuation":1100711068434,"total_volume":43714601885,"high_24h":52463,"low_24h":49320,"price_change_24h":2718.93,"price_change_percentage_24h":5.49672,"market_cap_change_24h":56715611909,"market_cap_change_percentage_24h":5.83442,"circulating_supply":19628087.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":69045,"ath_change_percentage":-24.08576,"ath_date":"2021-11-10T14:24:11.849Z","atl":67.81,"atl_change_percentage":77197.7227,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2024-02-15T01:10:04.932Z","price_change_percentage_1h_in_currency":0.5585802834141024,"price_change_percentage_1y_in_currency":135.54065163257403,"price_change_percentage_24h_in_currency":5.496718094895758,"price_change_percentage_30d_in_currency":22.50920991815825,"price_change_percentage_7d_in_currency":17.173049578575604}
 */
export const geckoAllCoinsMarketsOptions = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y&locale=en&precision=2',
};


export const coinGeckoMarketCharts24 = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1',
};

module.exports = {
  geckoTrendingOptions,
  geckoAllCoinsMarketsOptions,
  coinGeckoMarketCharts24
}
const latestUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const infoUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info';

// export const  getLatestListings = async (req: Request, res: Response, next: NextFunction) => {
//   let cryptoResponse = null;

//   try {
//       cryptoResponse = await axios.get(latestUrl, {
//           headers: {
//               'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_KEY,
//           },
//       })

//       if (cryptoResponse) {
//           const data = cryptoResponse.data;
//           console.log(data);
//       }

//       return res.status(200).json(cryptoResponse.data).end();
//   } catch (error) {
//       console.log('error in cryptController.ts', error)
//       return res.sendStatus(400);
//   }

// }
