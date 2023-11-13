const db = require("../../models");
const todos = db.todos;

const getTodos = async (req, res) => {
  let result = await todos.findAll({});
  res.status(200).json(result);
};

const getTodosById = async (req, res) => {
  const id = parseInt(req.params.id);
  let result = await todos.findOne({ where: { id: id } });
  res.status(200).send(result);
};

const addTodo = async (req, res) => {
  const result = await todos.create(req.body);
  res.status(200).send("Todo created successfully");
};

const removeTodo = async (req, res) => {
  const id = req.params.id;

  const result = await todos.destroy({ where: { id: id } });
  if (result) {
    res.status(200).send("Todo is deleted !");
  } else {
    res.status(401).send("No such ID exists");
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  const result = await todos.update(req.body, { where: { id: id } });
  res.status(200).send("Todo updated successfully");
};

module.exports = {
  getTodos,
  getTodosById,
  addTodo,
  removeTodo,
  updateTodo,
};