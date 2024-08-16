// in Crypto Cards => Add to Watchlist => 
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const pool = require('../models/sqlModel'); // connect server to database aka connecting to the db.js file
const watchlist_cards = require('../data/watchlist_card.csv');

/**
 * Get all watchlist cards
 */
export const getAllCards = async(req: Request, res: Response, next: NextFunction): Promise<Response<string, any> | void> => { // GET: /watchlist/cards
    try {
        const allCards = await pool.query('SELECT * FROM watchlist_cards;'); // SELECT ALL FROM TABLE TODO

        // TEMPORARY dummy data
        return res.status(200).json(watchlist_cards);
        // ElephantSQL
        return res.status(200).json(allCards.rows); // aka sending back on the response object
    } catch(error: any | ErrorRequestHandler) {
        console.error("watchlistCrudController.ts getAllCards: ", error);
        return next(error);
    }
}

/**
 * Get a single card from watchlist
 */
export const getCard = async(req: Request, res: Response, next: NextFunction): Promise<Response<string, any> | void> => { // GET: /watchlist/cards/:id
    try {
        const { _id } = req.body; 
        const oneCard = await pool.query('SELECT * FROM watchlist_cards WHERE _id = $1;', [id]);

        // TEMPORARY DUMMY DATA

        // ElephantSQL
        return res.status(200).json(oneCard.rows);
    } catch (error: any | ErrorRequestHandler) {
        console.error("watchlistCrudController.ts getCard: ", error);
        return next(error);
    }
}

// Add a card to watchlist
export const addCard = async(req: Request, res: Response, next: NextFunction): Promise<void> => { // POST: /watchlist/cards
    try {
        const { id } = req.body; // you are inserting into the column for description in the table named 'todo' (located in the database 'perntodo') the object description (from req.body)
        // const newCard = await pool.query(`INSERT INTO watchlist_cards(_id, _name, symbol, percent_change, equity, shares, price) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [name]);

        const card = await pool.query('INSERT INTO watchlist_cards SELECT * FROM ');

        // ElephantSQL
        // res.status(200).json(newCard);
        return next();
    } catch(error: any | ErrorRequestHandler) {
        console.error("watchlistCrudController.ts getCard: ", error);
        return next(error)
    }
}

// Delete a card from watch list
export const deleteCard = async(req: Request, res: Response, next: NextFunction): Promise<Response<Record<string, any>> | void> => { // DELETE /watchlist/cards/:id
    try {
        const { id } = req.params; // specify exactly what we want to delete

        // ElephantSQL
        const deletedCard = await pool.query('DELETE FROM watchlist_cards WHERE _id = $1 RETURN *;', [id]);
        return res.status(200).json(deletedCard.rows);
    } catch (error: any | ErrorRequestHandler) {
        console.log("Error in DELETE request in server", error.message);
        return next(error);
    }
}

// Edit a card in watch list
export const putCard = async(req: Request, res: Response, next: NextFunction): Promise<Response<string, any> | void> => { // PATCH: /watchlist/cards/:id
    try {
        const coin_id = req.params.id;
        const { shares, value } = req.body;
        if (!shares || !value ) return res.status(400).json({ error: 'Put request requires both shares & value.' });
        const updateTodo = await pool.query(`UPDATE watchlist_cards SET shares=$1 WHERE _id=$2 RETURNING * WHERE _id=$3;`, [shares, coin_id, coin_id]);

        return res.status(204).json('Item was edited.');
    } catch (error: any | ErrorRequestHandler) {
        console.log("Error in putCard request in server", error.message);
        return next(error);
    }
}

// Left join the cards in watchlist with their corresponding rows in meta table (adds [null] for meta table data if join conditions are not equal)
export const getWatchlistMetaCards = async(req: Request, res: Response, next: NextFunction) => { // GET: /watchlist/cards/info
    try {
        const sql = `SELECT watchlist_cards.*, meta.desc, meta.homepage_url, meta.img, meta.jsonb_meta
        FROM watchlist_cards LEFT JOIN meta
        ON watchlist_cards = meta.id;`;
        const joinWatchlistMetaCards = await pool.query(sql);
        return res.status(200).json(joinWatchlistMetaCards.rows);
    } catch (error: any | ErrorRequestHandler ) {
        console.log("Error in watchlistCrudController.ts - joinWatchlistMetaCards", error.message);
        return next(error);
    }
}