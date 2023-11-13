const getTodos = "select * from todos";
const getTodosById ="select * from todos where id=$1";
const checkId = "select i from todos i where i.id = $1";
const addTodos ="insert into todos(id,text,iscompleted) values($1,$2,$3)"
const updateTodos = "UPDATE todos set text = $1 where id = $2";
const removeTodo = "delete from todos where id =$1";

module.exports = {
    getTodos,
    getTodosById,
    checkId,
    addTodos,
    updateTodos,
    removeTodo
};
