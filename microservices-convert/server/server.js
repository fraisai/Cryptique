const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db.json');
const router = express.Router();
const PORT = 3000;

const apiUserRouter = require('./apiUserRoutes');
const apiThreadsRouter = require('./apiThreadsRoute');
const apiPostRouter = require('./postRoutes');


app.use(async (req, res, next) => {
    try {
        const start = new Date;
        console.log('start', start)
        await next();
        const ms = new Date - start;
        console.log('%s %s - %s', req.method, req.url, ms);   
    } catch (error) {
        res.status = error.status || 500;
    }
});

app.use('/api/users', apiUserRouter);
app.use('/api/threads', apiThreadsRouter);
app.use('/api/posts', apiPostRouter);

router.get('/api/', async (req, res, next) => {
    return res.status(200).send("API ready to receive requests");
});

router.get('/', async (req, res, next) => {
    return res.send("Ready to receive requests");
});

router.route('/api')

app.use(router);
// // app.use(router.allowedMethods());

app.listen(PORT, () => {
    `Server on port ${PORT}`;
});