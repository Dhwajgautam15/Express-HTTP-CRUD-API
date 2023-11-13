const pool = require('../../db');
const queries = require("./queries")

const getTodos = (req, res) => {
    pool.query(queries.getTodos, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })

}

const getTodosById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getTodosById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addTodos = (req,res)=>{
    const{id,text,iscompleted} = req.body;
    pool.query(queries.checkId, [id], (error, results) => {
        if (results.rows.length) {
            res.send("id already exists");
        }
        // add student to db
        else {
            pool.query(queries.addTodos, [id,text,iscompleted], (error, results) => {
                if (error) throw error;
                res.status(201).send("new Id created succesfully");

            })
        }
    })
}

const updateTodos = (req, res) => {
    const id = parseInt(req.params.id);
    const { text } = req.body;
    pool.query(queries.getTodosById, [id], (error, results) => {
        const noTodoFound = !results.rows.length;
        if (noTodoFound) {
            res.send("todo does not exist in the database");
        }

        pool.query(queries.updateTodos,[text,id],(error, results)=>{
            if(error) throw error;
            res.status(200).send("todo update successfully")
        });

    });
}
const removeTodo = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getTodosById, [id], (error, results) => {
        const noTodoFound = !results.rows.length;
        if (noTodoFound) {
            res.send("todo does not exist in the database");
        }
        pool.query(queries.removeTodo, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("todo Removed successfully.");
        })

    });
}
module.exports = {
    getTodos,
    getTodosById,
    addTodos,
    updateTodos,
    removeTodo,
};