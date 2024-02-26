import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || '5000';
const logger = require('morgan');

// MONGO DB ATLAS
import mongoDbConnect from './models/mongoConnect';
mongoDbConnect();

// ROUTES
const cryptRouter= require('./routes/cryptRoutes');
const watchlistRouter = require('./routes/watchlistRoutes');
const authRouter = require('./routes/authRoutes');

// HEALTH CHECK
app.get('/health', (req: Request, res: Response) => res.status(200).json("Health Check Passed"));


// MIDDLEWARE
app.use(logger(':date[clf] :method :url :status :response-time ms - :res[content-length]'));
app.use(cors({credentials: true}));
app.use(cookieParser());
app.use(express.json()); // express's built in body-parser - parse JSON bodies, this gives ability to "read" incoming req.body/JSON object
app.use(express.urlencoded({ extended: true }));
app.use('/build', express.static(path.join(__dirname, '../build/index.html')));


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
  const err = new Error('Bad Request');
  err.message = 'Bad Request';

  if (res.statusCode === 404) {

    res.status(404).json('Resource does not exist');
  }

  next(err);
});

/**
* express error handler
* @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
*/
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log("Express error handler:" , err.message);
  return res.status(errorObj.status).json(err.message);
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