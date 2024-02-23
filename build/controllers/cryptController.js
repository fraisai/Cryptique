"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeta = exports.getTrending = exports.getOneDayMarketChart = exports.getAllMarkets = void 0;
const axios = require('axios');
const pool = require('../models/sqlConnection'); // connect server to database aka connecting to the db.js file
const dotenv = require('dotenv');
dotenv.config();
const { geckoTrendingOptions, geckoAllCoinsMarketsOptions, coinGeckoMarketCharts24, geckoAllCoins } = require('../helpers/options.ts');
const { btcMarketChart30Days, trendingCoinData, allMarketsCoinsData, marketChartBitcoinData, btc24HoursData } = require('../data/dataExports');
const { insert_meta_table } = require('../sql-scripts/insert-meta-table');
// Markets => GET: /crypt/coins/markets (all coins)
const getAllMarkets = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // temporary DUMMY DATA
        return res.status(200).json(yield allMarketsCoinsData).end();
        // Coingecko API Call: NEED TO PAY to use cg API so use dummy data from previous api call above:
        const response = yield axios.request(geckoAllCoinsMarketsOptions);
        return res.status(200).json(response.data).end();
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
exports.getAllMarkets = getAllMarkets;
/**
 *
 *    Coin Gecko URL => GET: crypt/coins/{id}/market_chart (historical market data like price, market cap, and 24h volume within a range of timestamp (granularity auto))
 *    GET: crypt/coins/market-charts?vs_currency=usd&days=:num_days
 *    days can be 1, 7, 30, 365, max
 */
// Market Charts => GET: crypt/coins/market_chart_id
const getOneDayMarketChart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // temporary DUMMY data
        const data = yield btc24HoursData; // replace this with axios req
        // // Coingecko API Call: data from coingecko api
        // const response = await axios.request(coinGeckoMarketCharts24);
        // const data = response.data;
        const oneMonthPrices = data.prices; // [[unix, price]]
        // create an array containing date/time converted string and price
        const monthDatePrices = oneMonthPrices.map((el) => {
            const unix = Number(el[0]);
            const price = Number(el[1]);
            const time = new Date(unix).toLocaleTimeString("en-US"); // "0:00:00 PM"
            const date = new Date(unix).toLocaleDateString("en-US"); // "8/30/2023"
            return [date, time, price];
        }).reverse();
        const oneDayLabels = monthDatePrices.map(el => el[1]);
        const oneDayPrices = monthDatePrices.map(el => el[2]);
        // data to display for crypto market charts
        const chartData = {
            times: [...oneDayLabels],
            prices: [...oneDayPrices]
        };
        return res.status(200).send(chartData).end();
        // return next();
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
exports.getOneDayMarketChart = getOneDayMarketChart;
// Trending: => GET: crypt/coins/trending (Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first))
const getTrending = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // temporary DUMMY data
        return res.status(200).json(yield trendingCoinData).end();
        // Coingecko API calls 
        const response = yield axios.request(geckoTrendingOptions);
        return res.status(200).json(response.data).end();
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
exports.getTrending = getTrending;
/**
 * GET /crypt/metaT
 * @param req
 * @param res
 * @param next
 * @returns
 */
const getMeta = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const all_coins = yield axios.request(geckoAllCoins); // list of all the supported coins
        // const all_coins = await allMarketsCoinsData; // DUMMY DATA list of all the supported coins
        const all_coins_meta = [];
        const makeRateLimitedRequests = () => __awaiter(void 0, void 0, void 0, function* () {
            for (let i = 50; i < all_coins.rows.length; i++) {
                let coin = all_coins.rows[i];
                try {
                    const res = yield axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}?localization=false&tickers=false&community_data=true&developer_data=false&sparkline=true`);
                    const { id, symbol, name, description, links, image, sparkline_7d, last_updated } = res.data;
                    // jsonb data to insert into meta table: 
                    const jsonObj = {
                        id: id,
                        symbol: symbol,
                        name: name,
                        desc: description,
                        homepage_url: links.homepage[0],
                        subreddit_url: links.subreddit_url,
                        official_forum_url: links.official_forum_url,
                        chat_url: links.chat_url,
                        img: image.large,
                        sparkline_7d: sparkline_7d,
                        last_updated: last_updated
                    };
                    const metaInsert = yield pool.query(insert_meta_table, [id, symbol, name, description, links.homepage[0], image.large, JSON.stringify(jsonObj)]);
                    console.log('inserted', coin.id);
                    yield new Promise(resolve => setTimeout(resolve, 30000));
                }
                catch (error) {
                    console.log('error on index, coin', i, coin.id, error.detail);
                }
            }
        });
        makeRateLimitedRequests();
        const all_meta = yield pool.query('SELECT * FROM meta;'); // SELECT ALL FROM TABLE TODO
        return res.status(200).json(all_meta.rows);
        // return next();
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
exports.getMeta = getMeta;
// RAPID API: https://rapidapi.com/coingecko/api/coingecko/
// COIN GECKO API: https://www.coingecko.com/api/do
// COIN GECKO ROOT: 'https://api.coingecko.com/api/v3/'
// https://www.coingecko.com/api/documentation
// localhost:5000/crypt/coins/
// GET crypto history: https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true
// GET: /coins/{id}
//# sourceMappingURL=cryptController.js.map