export const coinGeckoTrendingOptions = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/search/trending',
};

export const coinGeckoMarketOptions = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y&locale=en&precision=2',
}


export const coinGeckoMarketCharts24 = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1',
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

