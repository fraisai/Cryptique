const express = require('express');
const router = express.Router();
const { getLatestListings, getAllMarkets, getTrending, getOneDayMarketChart } = require('../controllers/cryptController');

router.get('/coins/markets', getAllMarkets); // current market price of all cryptos
router.get('/coins/market-charts', getOneDayMarketChart); // 24 hr market chart data
router.get('/coins/trending', getTrending); // top 7 trending cryptos and top 15 nfts

module.exports = router;
