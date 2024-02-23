import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const app = express();
// const PORT = 5000;
const PORT = process.env.PORT || '5000';
// const logger = require('morgan');



const github_url: string = '' + process.env.GITHUB_OAUTH_LOGIN_URL;

// MONGO DB ATLAS
import mongoDbConnect from './models/mongoConnect';
mongoDbConnect();

// ROUTES
const cryptRouter= require('./routes/cryptRoutes.ts');
const watchlistRouter = require('./routes/watchlistRoutes.ts');
const authRouter = require('./routes/authRoutes.ts');

// MIDDLEWARE
// app.use(logger(':date[clf] :method :url :status :response-time ms - :res[content-length]'));
app.use(cors({credentials: true}));
app.use(cookieParser());
app.use(express.json()); // express's built in body-parser - parse JSON bodies, this gives ability to "read" incoming req.body/JSON object
app.use(express.urlencoded({ extended: true }));


// app.use('/build', express.static(path.join(__dirname, '../build')));

// app.get('/', (req: Request, res: Response) => {
//   res.sendFile(path.resolve(__dirname, '../public/index.html'));
// });


app.get('/health', (req: Request, res: Response) => res.status(200).json("HEY"))
app.use('/auth', authRouter);
// app.get('/oauth/github-login', (req: Request, res: Response) => res.status(200).send(github_url) );

app.use('/crypt', cryptRouter);
app.use('/watchlist', watchlistRouter);


// ERROR HANDLING

// 404 handler to your server such that if a request comes in to *ANY* route not listed above the 404 page is sent
app.all('*', function(req, res, next: NextFunction) {
  if (res.statusCode === 404) return res.status(404).json('Resource does not exist');
  // else res.sendFile(path.resolve(__dirname, '../public/index.html'));
  const err = new Error('Bad Request')
  err.message = 'Bad Request'
  next(err);
});

/**
* express error handler
* @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
*/
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log("Express error handler:" , err.message);
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


export const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





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
import WebSocket, { WebSocketServer } from 'ws';
import { Server } from 'http';
import { Server as httpsServer } from 'https';

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

declare class MyWebSocket extends WebSocketServer {
  id?: string;
}

interface myClass {
  webSocketServer: MyWebSocket;
  peers: Map<string, MyWebSocket>;
  consumers: Map<string, MyWebSocket[]>;
}
class SFUSignalingChannel {
  webSocketServer: MyWebSocket;
  peers: Map<string, MyWebSocket>; // same as users
  consumers: Map<string, MyWebSocket[]>;

  constructor(server: Server | httpsServer | number) {
    this.webSocketServer = typeof server === 'number' ? new WebSocket.Server({ port: server }) : new WebSocket.Server({ server: server });
    this.peers = new Map();
    this.consumers = new Map();
  }

  initializeConnection() {
    this.webSocketServer.on('connection', (socket: MyWebSocket) => {
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

const sc_SFU = new SFUSignalingChannel(server);
sc_SFU.initializeConnection();
