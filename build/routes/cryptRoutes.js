"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// export {} // fixes TS error "Cannot redeclare block-scoped variable 'router'" by making this a module and so it has its own module scope and can thus use name without a class. 
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cryptController_1 = require("../controllers/cryptController");
router.get('/coins/markets', cryptController_1.getAllMarkets); // current market price of all cryptos
router.get('/coins/market-charts', cryptController_1.getOneDayMarketChart); // 24 hr market chart data
router.get('/coins/trending', cryptController_1.getTrending); // top 7 trending cryptos and top 15 nfts
// router.get('/meta', getMeta);
module.exports = router;
//# sourceMappingURL=cryptRoutes.js.map