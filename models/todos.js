// models/todos.js

module.exports = (sequelize, DataTypes) => {
    const todos = sequelize.define("todos", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iscompleted: {
        type: DataTypes.BOOLEAN,
      },
    });
    return todos;
  };