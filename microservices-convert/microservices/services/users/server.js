const app = express();
const db = require('./dbUsers.json');
const router = express.Router();
const PORT = 3000;

const apiUserRoutes = require('../routes/apiUserRoutes');

app.use(async (req, res, next) => {
    try {
        const start = new Date;
        await next();
        const ms = new Date - start;
    } catch (error) {
        res.status = error.status || 500;
    }
});

app.use('/api/users', apiUserRoutes);

router.get('/api/', async (req, res, next) => {
    return res.status(200).send("API ready to receive requests");
});

router.get('/', async (req, res, next) => {
    return res.send("Ready to receive requests");
});

app.use(router);
// // app.use(router.allowedMethods());

app.listen(PORT, () => {
    `Server on port ${PORT}`;
});