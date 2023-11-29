const pool = require('../models/cryptModel'); // connect server to database aka connecting to the db.js file

const crudController = {};

crudController.addCrypto = async(req, res, next) => { // v1/api/cryptodo/post
    try {
        const name = req.body.name;

        // you are inserting into the column for description in the table named 'todo' (located in the database 'perntodo') the object description (from req.body)
        const newTodo = await pool.query(`INSERT INTO cryptoToDo(name) VALUES($1) RETURNING *`, [name]);

        return res.status(200).json(newTodo)
            /* when you go on website: localhost:5000/todos and post:
                {"description": "BTC"} 
            you update the database by inserting into database the description in pool.query()*/
    } catch(error) {
        return next(`Error in crudController.js: addCrypto: ${error}`)
    }
}

crudController.getCrypto = async(req, res, next) => { //v1/api/cryptodo/
    try {
        // you are selecting all the data from the table 'todo' located inside of the database you initially created called 'perntodo'
        const allTodos = await pool.query('SELECT * FROM cryptoToDo'); // SELECT ALL FROM TABLE TODO

        res.status(200).json(allTodos.rows); // aka sending back on the response object
        // USE postman: localhost:5000/todos and send a get request to see the list of all the todo items
        next();
    } catch(err) {
        console.error(err.message);
        return next()
    }
}

crudController.deleteCrypto = async(req, res, next) => {
    try {
        // specify exactly what we want to delete
        const id = req.params.id;
        const deleteTodo = await pool.query('DELETE FROM cryptoToDo WHERE trending_id = $1', [id]);
        res.status(200).json('To do item was deleted');
        return next();

    } catch (error) {
        console.log("Error in DELETE request in server", error.message);
        return next();
    }
}

crudController.patchCrypto = async(req, res, next) => {
    try {

        const { id } = req.params;
        const { name } = req.body;

        if (!name) return next();

        const updateTodo = await pool.query(`UPDATE cryptoToDo SET name=$1 WHERE trending_id = $2;`, [name, id]);

        res.status(200).json('Item was edited.');
        return next();

    } catch (error) {
        console.log("Error in EDIT request in server", error.message);
        return next();
    }
}

module.exports = crudController;