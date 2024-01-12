// https://www.coingecko.com/api/documentation
// localhost:5000/crypt/coins/

import { Request, Response, NextFunction } from 'express';
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const parseCoinGeckoCsv = require('../helpers/parseCoinGeckoCsv');
const coinGeckoTrendingOptions = require('../helpers/options');
const coinGeckoMarketsOptions = require('../helpers/options');
const coinGeckoMarketCharts24 = require('../helpers/options');

const trendingCoinData = require('../data/trendingCoinData.json');
const allMarketsCoinsData = require('../data/allMarketsCoinsData.json');
const marketChartBitcoinData = require('../data/marketChartBitcoinData.json');

// GET crypto history: https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true
    // GET: /coins/{id}

// Markets: all coins
    // GET: crypt/coins/markets
export const getCoinGeckoMarkets = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).json(allMarketsCoinsData).end();
        // NEED TO PAY to use cg API so commented out for now and using past data:
        // const response = await axios.request(coinGeckoMarketsOptions); 
        // return res.status(200).json(response.data).end();
    } catch (error) {
        console.error(error);
        return next();
    }
}

// Market Chart: historical market data like price, market cap, and 24h volume within a range of timestamp (granularity auto)
    // GET: crypt/coins/market-charts?vs_currency=usd&days=:num_days
    // days can be 1, 7, 30, 365, max

    // /coins/{id}/market_chart
export const getCoinGeckoMarketChart = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).json(marketChartBitcoinData).end();
        const response = await axios.request(coinGeckoMarketCharts24);
        return res.status(200).json(response.data).end();
    } catch (error) {
        console.error(error);
        return next();
    }
}

// Trending: Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first).
    // GET: crypt/coins/trending
export const getCoinGeckoTrending = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).json(trendingCoinData).end();
        const response = await axios.request(coinGeckoTrendingOptions);
        return res.status(200).json(response.data).end();
    } catch (error) {
        console.error(error);
        return next();
    }
}


// RAPID API: https://rapidapi.com/coingecko/api/coingecko/
// COIN GECKO API: https://www.coingecko.com/api/do
// COIN GECKO ROOT: 'https://api.coingecko.com/api/v3/'

