// export {} // fixes TS error "Cannot redeclare block-scoped variable 'router'" by making this a module and so it has its own module scope and can thus use name without a class. 
import express from 'express';
const router = express.Router();
import { getAllMarkets, getTrending, getOneDayMarketChart, getMeta } from '../controllers/cryptController';

router.get('/coins/markets', getAllMarkets); // current market price of all cryptos
router.get('/coins/market-charts', getOneDayMarketChart); // 24 hr market chart data
router.get('/coins/trending', getTrending); // top 7 trending cryptos and top 15 nfts
// router.get('/meta', getMeta);
module.exports = router;
