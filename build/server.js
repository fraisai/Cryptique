"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const app = (0, express_1.default)();
const PORT = process.env.PORT || '5000';
const logger = require('morgan');
const errorController_1 = require("./controllers/errorController");
// MONGO DB ATLAS
const mongoConnect_1 = __importDefault(require("./models/mongoConnect"));
(0, mongoConnect_1.default)();
// ROUTES
const cryptRouter = require('./routes/cryptRoutes');
const watchlistRouter = require('./routes/watchlistRoutes');
const authRouter = require('./routes/authRoutes');
// HEALTH CHECK
app.get('/health', (req, res) => res.status(200).json("Health Check Passed"));
// LOGGERS
app.use(logger(':date[clf] :method :url :status :response-time ms - :res[content-length]'));
app.use(errorController_1.requestLogger); // request logger: method and url
// MIDDLEWARE
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(express_1.default.json()); // express's built in body-parser - parse JSON bodies, this gives ability to "read" incoming req.body/JSON object
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', express_1.default.static(path.join(__dirname, '../build')));
// app.post('/auth/login', (req: Request, res: Response) => {
//   return res.status(200).json('auth/login');
// })
app.use('/auth', authRouter);
app.use('/crypt', cryptRouter);
app.use('/watchlist', watchlistRouter);
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});
// ERROR HANDLING
/**
 * 404 handler to your server such that if a request comes in to *ANY* route not listed above the 404 page is sent
 */
app.all('*', function (req, res, next) {
    console.log('app.all(*) in server.ts', res.statusCode);
    const err = new Error('Bad Request');
    err.message = 'Bad Request';
    if (res.statusCode === 404) {
        res.status(404).json('Resource does not exist');
    }
    req.baseUrl;
    next(err);
});
/**
* express error handler
* @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
*/
app.use((err, req, res, next) => {
    console.log('app.use() error handler in server.ts', err, res.statusCode);
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: err,
    };
    // const errorObj = Object.assign({}, defaultErr, err);
    console.log("Express error handler:", err.message);
    // return res.status(defaultErr.status).send(defaultErr.message);
    return res.sendFile(path.resolve(__dirname, '../build/index.html'));
});
exports.server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
/**
 * Express Types
 * (
      err: any,
      req: Request<P, ResBody, ReqBody, ReqQuery, LocalsObj>,
      res: Response<ResBody, LocalsObj>,
      next: NextFunction,
    ) => void;
 */
/**
 * ENDPOINTS
 *
 * 1. /auth:
 *    a) /auth/github-login
 *    b) /auth/callback
 *    c) POST /auth/register
 *    d) POST /auth/login
 *
 *
 * 2. /crypt
 *    a) GET /crypt/coins/markets
 *    b) GET /crypt/coins/market-charts
 *    c) GET /crypt/coins/trending
 *    d) GET /crypt/meta
 *
 * 3. /watchlist
 *    a) GET /watchlist/cards = select all cards in watchlist
 *    b) GET /watchlist/cards/:id => select single card in watchlist
 *    c) POST /watchlist/cards => add card to watchlist
 *    d) DELETE /watchlist/cards/:id => delete a single card in watchlist
 *    e) PATCH /watchlist/cards/:id
 *
 */
// app.get('/', (req: Request, res: Response) => {
//     return res.status(400).sendFile(path.resolve(__dirname, '../build/index.html')); // how I fixed getting the trending page when I manually type in localhost:8080/trending and press enter
// })
//# sourceMappingURL=server.js.map