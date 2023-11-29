const express = require('express');
const router = express.Router();
const db = require('./db.json');

router.get('/', async (req, res, next) => {
    req.body = db.users;
    console.log('Line 110 req.body', req.body);
    return next();
});

router.get('/:userId', async (req, res, next) => {
    const id = parseInt(req.params.userId);
    console.log('apiUserRouter id', id, req.params, db.users);
    return res.status(200).send(db.users.find((user) => user.id == id));
});




module.exports = router;