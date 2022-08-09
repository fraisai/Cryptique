const crudController = {};

crudController.addCrypto = async(req, res, next) => {
    try {
        const name = req.body.name;
        // console.log(req.body, "name: ", name)
        // await pool.query("INSERT INTO tableName(column) VALUES($placeholder) RETURNING *", [variableName from req.body])

        // you are inserting into the column for description in the table named 'todo' (located in the database 'perntodo') the object description (from req.body)
        const newTodo = await pool.query(`INSERT INTO cryptoToDo(name) VALUES($1) RETURNING *`, [name]);

        res.status(200).json(newTodo)
        // Essentially what happens:
            /* when you go on website: localhost:5000/todos and post:
                {
                    "description": "BTC"
                }
                you update the database by inserting into database the description in pool.query()*/
    } catch(error) {
        return next(`Error in crudController.js: addCrypto: ${error}`)
    }
}


module.exports = crudController;