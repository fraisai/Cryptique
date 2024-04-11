import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || '5000';
const logger = require('morgan');
import { requestLogger, errorLogger } from './controllers/errorController';
const endpoint = require('./controllers/endpointController');

// MONGO DB ATLAS
import mongoDbConnect from './models/mongoConnect';
mongoDbConnect();

// ROUTES
const cryptRouter= require('./routes/cryptRoutes');
const watchlistRouter = require('./routes/watchlistRoutes');
const authRouter = require('./routes/authRoutes');

// HEALTH CHECK
app.get('/health', (req: Request, res: Response) => res.status(200).json("Health Check Passed"));

// LOGGERS
app.use(logger(':date[clf] :method :url :status :response-time ms - :res[content-length]'));
app.use(requestLogger); // request logger: method and url

// MIDDLEWARE
app.use(cors({credentials: true}));
app.use(cookieParser());
app.use(express.json()); // express's built in body-parser - parse JSON bodies, this gives ability to "read" incoming req.body/JSON object
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../build')));


// app.post('/auth/login', (req: Request, res: Response) => {
//   return res.status(200).json('auth/login');
// })
app.use('/auth', authRouter);
app.use('/crypt', cryptRouter);
app.use('/watchlist', watchlistRouter);


app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});


// ERROR HANDLING

/**
 * 404 handler to your server such that if a request comes in to *ANY* route not listed above the 404 page is sent
 */
app.all('*', function(req, res, next: NextFunction) {
  console.log('app.all(*) in server.ts', res.statusCode)

  const err = new Error('Bad Request');
  err.message = 'Bad Request';

  if (res.statusCode === 404) {
    res.status(404).json('Resource does not exist');
  }

  if (res.statusCode === 401) res.status(401).json('Request lacks valid authentication credentials');
  if (res.statusCode === 403) res.status(403).json('Valid credentials but does not have privilege to perform action.')
  req.baseUrl
  next(err);
});

/**
* express error handler
* @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
*/
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('app.use() error handler in server.ts', err, res.statusCode)

  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: err,
  };
  // const errorObj = Object.assign({}, defaultErr, err);
  console.log("Express error handler:" , err.message);
  // return res.status(defaultErr.status).send(defaultErr.message);
  return res.status(200).json(defaultErr.message)
});


// Protected
// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", endpoint, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});


app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});



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

/**
 * Caching:
 * If you are using caching, you should also include Cache-Control information in your headers. This will help users effectively use your caching system.'
 * 
 * let cache = apicache.middleware;
  app.use(cache('5 minutes')); // to apply the caching to the whole app. We cache the results for five minutes, for example. We can adjust this for our needs.

 * https://www.npmjs.com/package/apicache
 * var apicache = require('apicache')
var cache = apicache.middleware

// GET collection/id
app.get('/api/:collection/:id?', cache('1 hour'), function(req, res, next) {
  req.apicacheGroup = req.params.collection
  // do some work
  res.send({ foo: 'bar' })
})

// POST collection/id
app.post('/api/:collection/:id?', function(req, res, next) {
  // update model
  apicache.clear(req.params.collection)
  res.send('added a new item, so the cache has been cleared')
})

 */




// app.get('/', (req: Request, res: Response) => {
//     return res.status(400).sendFile(path.resolve(__dirname, '../build/index.html')); // how I fixed getting the trending page when I manually type in localhost:8080/trending and press enter
// })