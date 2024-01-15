import { Request, Response, NextFunction } from 'express';
// const pool = require('../models/sqlModel.ts');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const parseCoinGeckoCsv = require('../helpers/parseCoinGeckoCsv');
const { coinGeckoTrendingOptions,  coinGeckoMarketsOptions, coinGeckoMarketCharts24 } = require('../helpers/options');
const { btcMarketChart30Days, trendingCoinData, allMarketsCoinsData, marketChartBitcoinData, btc24HoursData } = require('../data/dataExports');


// Markets => GET: /crypt/coins/markets (all coins)
export const getAllMarkets = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('getAllMarkets')
    return res.status(200).json(allMarketsCoinsData).end();
    // NEED TO PAY to use cg API so commented out for now and using past dummy data:
    const response = await axios.request(coinGeckoMarketsOptions);
    return res.status(200).json(response.data).end();
  } catch (error) {
    console.error(error);
    return next();
  }
};


/**
 * 
 *    Coin Gecko URL => GET: crypt/coins/{id}/market_chart (historical market data like price, market cap, and 24h volume within a range of timestamp (granularity auto))
 *    GET: crypt/coins/market-charts?vs_currency=usd&days=:num_days
 *    days can be 1, 7, 30, 365, max
 */
// Market Charts => GET: crypt/coins/market_chart_id
export const getOneDayMarketChart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = btc24HoursData; // replace this with axios req
    const oneMonthPrices: Array<string[]> = data.prices // [[unix, price]]
    const monthDatePrices = oneMonthPrices.map((el) => {
      const unix = Number(el[0]);
      const price = Number(el[1]);
      const time = new Date(unix).toLocaleTimeString("en-US"); // "0:00:00 PM"
      const date = new Date(unix).toLocaleDateString("en-US"); // "8/30/2023"

      return [date, time, price];
    }).reverse();
    const oneDayLabels= monthDatePrices.map(el => el[1]);
    const oneDayPrices = monthDatePrices.map(el => el[2]);
    const chartData = {
      times: [...oneDayLabels],
      prices: [...oneDayPrices]
    }
    return res.status(200).send(chartData).end();

    // const response = await axios.request(coinGeckoMarketCharts24);
    // return res.status(200).json(response.data).end();
  } catch (error) {
    console.error(error);
    return next();
  }
};

// Trending: => GET: crypt/coins/trending (Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first))
export const getTrending = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json(trendingCoinData).end();
    const response = await axios.request(coinGeckoTrendingOptions);
    return res.status(200).json(response.data).end();
  } catch (error) {
    console.error(error);
    return next();
  }
};









// RAPID API: https://rapidapi.com/coingecko/api/coingecko/
// COIN GECKO API: https://www.coingecko.com/api/do
// COIN GECKO ROOT: 'https://api.coingecko.com/api/v3/'
// https://www.coingecko.com/api/documentation
// localhost:5000/crypt/coins/


// GET crypto history: https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true
// GET: /coins/{id}
