"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchCard = exports.deleteCard = exports.addCard = exports.getCard = exports.getAllCards = void 0;
const pool = require('../models/sqlModel'); // connect server to database aka connecting to the db.js file
const watchlist_card = require('../data/watchlist_card.csv');
// Get all watchlist cards
const getAllCards = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCards = yield pool.query('SELECT * FROM watchlist_card;'); // SELECT ALL FROM TABLE TODO
        console.log('getAllCards: ', allCards);
        // TEMPORARY dummy data
        return res.status(200).json(watchlist_card);
        // ElephantSQL
        return res.status(200).json(allCards.rows); // aka sending back on the response object
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
});
exports.getAllCards = getAllCards;
// Get a single card from watchlist
const getCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const oneCard = yield pool.query('SELECT * FROM watchlist_card WHERE _id = $1', [id]);
        console.log('watchlistCrudController.ts getCard', oneCard);
        // ElephantSQL
        res.status(200).json(oneCard.rows);
        return next();
    }
    catch (error) {
        console.error(error.message);
        return next();
    }
});
exports.getCard = getCard;
// Add a card to watchlist
const addCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body; // you are inserting into the column for description in the table named 'todo' (located in the database 'perntodo') the object description (from req.body)
        // const newCard = await pool.query(`INSERT INTO watchlist_card(_id, _name, symbol, percent_change, equity, shares, price) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [name]);
        const card = yield pool.query('INSERT INTO watchlist_card SELECT * FROM ');
        // ElephantSQL
        // res.status(200).json(newCard);
        return next();
    }
    catch (error) {
        return next(`Error in watchListCrudController.js: addCrypto: ${error}`);
    }
});
exports.addCard = addCard;
// Delete a card from watch list
const deleteCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // specify exactly what we want to delete
        const { id } = req.params;
        // ElephantSQL
        const deleteTodo = yield pool.query('DELETE FROM watchlist_card WHERE _id = $1', [id]);
        res.status(200).json('To do item was deleted');
        return next();
    }
    catch (error) {
        console.log("Error in DELETE request in server", error.message);
        return next();
    }
});
exports.deleteCard = deleteCard;
// Edit a card in watch list
const patchCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name } = req.body;
        if (!name)
            return next();
        const updateTodo = yield pool.query(`UPDATE watchlist_card SET name=$1 WHERE _id = $2;`, [name, id]);
        res.status(200).json('Item was edited.');
        return next();
    }
    catch (error) {
        console.log("Error in EDIT request in server", error.message);
        return next();
    }
});
exports.patchCard = patchCard;
//# sourceMappingURL=watchlistCrudController.js.map