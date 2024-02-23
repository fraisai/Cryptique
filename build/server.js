"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
// const PORT = 5000;
const PORT = process.env.PORT || '5000';
// const logger = require('morgan');
const github_url = '' + process.env.GITHUB_OAUTH_LOGIN_URL;
// MONGO DB ATLAS
const mongoConnect_1 = __importDefault(require("./models/mongoConnect"));
(0, mongoConnect_1.default)();
// ROUTES
const cryptRouter = require('./routes/cryptRoutes');
const watchlistRouter = require('./routes/watchlistRoutes');
const authRouter = require('./routes/authRoutes');
// MIDDLEWARE
// app.use(logger(':date[clf] :method :url :status :response-time ms - :res[content-length]'));
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(express_1.default.json()); // express's built in body-parser - parse JSON bodies, this gives ability to "read" incoming req.body/JSON object
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/build', express_1.default.static(path.join(__dirname, '../build/index.html')));
// HEALTH CHECK
app.get('/health', (req, res) => res.status(200).json("Health Check Passed"));
app.use('/auth', authRouter);
app.use('/crypt', cryptRouter);
app.use('/watchlist', watchlistRouter);
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});
// ERROR HANDLING
// 404 handler to your server such that if a request comes in to *ANY* route not listed above the 404 page is sent
app.all('*', function (req, res, next) {
    if (res.statusCode === 404)
        return res.status(404).json('Resource does not exist');
    // else res.sendFile(path.resolve(__dirname, '../public/index.html'));
    const err = new Error('Bad Request');
    err.message = 'Bad Request';
    next(err);
});
/**
* express error handler
* @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
*/
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log("Express error handler:", err.message);
    return res.status(errorObj.status).json(err.message);
});
// ERROR HANDLER EXAMPLE FROM TUTORIAL
// /**
//  * 404 handler
//  */
// app.use('*', (req,res) => {
//   res.status(404).send('Not Found');
// });
// /**
//  * Global error handler
//  */
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   console.log(err);
//   res.status(500).send({ error: err });
// });
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
 *    c) /auth/register
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
// RTC TEST
const ws_1 = __importStar(require("ws"));
const actions = {
    CONNECTION: 'CONNECTION',
    OFFER: 'OFFER',
    ANSWER: 'ANSWER',
    LOGIN: 'LOGIN',
    ICECANDIDATE: 'ICECANDIDATE',
    LEAVE: 'LEAVE',
    CREATE_ROOM: 'CREATE_ROOM',
    JOIN_ROOM: 'JOIN_ROOM',
    WECOME: 'WELCOME',
    USER_LEFT: 'USER_LEFT',
};
const { OFFER, ANSWER, ICECANDIDATE, LOGIN, LEAVE, USER_LEFT } = actions;
class SFUSignalingChannel {
    constructor(server) {
        this.webSocketServer = typeof server === 'number' ? new ws_1.default.Server({ port: server }) : new ws_1.default.Server({ server: server });
        this.peers = new Map();
        this.consumers = new Map();
    }
    initializeConnection() {
        this.webSocketServer.on('connection', (socket) => {
            let peerId = Math.random().toString();
            socket.id = peerId;
            console.log('A user has connected to the websocket server.', 'peerId:', peerId, 'socket: ', socket);
            socket.close = (event) => {
                //         const userToDelete = this.getByValue(this.peers, socket);
                // let user = '';
                // for (const [key, value] of this.peers.entries()) {
                //   if (value === socket) user = key;
                // }
                // const userToDelete = user;
                // this.peers.delete(userToDelete);
                // this.consumers.delete(userToDelete);
                // const userLeftPayload = {
                //     ACTION_TYPE: USER_LEFT,
                //     payload: socket.id
                // }
                // this.peers.forEach(function(peer) {
                //     if (peer.socket.readyState === WebSocket.OPEN) {
                //         this.peer.socket.send(JSON.stringify(userLeftPayload));
                //     }
                // })
            };
            // END onCLOSE
        });
    }
}
// const sc = new SignalingChannel(server);
// sc.initializeConnection();
const sc_SFU = new SFUSignalingChannel(exports.server);
sc_SFU.initializeConnection();
//# sourceMappingURL=server.js.map