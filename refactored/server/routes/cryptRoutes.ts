const express = require('express');
const router = express.Router();
const { getLatestListings, getCoinGeckoMarkets, getCoinGeckoTrending, getCoinGeckoMarketChart } = require('../controllers/cryptController');

router.get('/coins/markets', getCoinGeckoMarkets); // current market price of all cryptos
router.get('/coins/market-charts', getCoinGeckoMarketChart); // 24 hr market chart data
router.get('/coins/trending', getCoinGeckoTrending); // top 7 trending cryptos and top 15 nfts

module.exports = router;