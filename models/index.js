const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");
// console.log(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD);

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: true,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});


sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require("./todos.js")(sequelize, DataTypes);
db.sequelize.sync({ force: true }).then(() => {
  console.log("yes re-sync done!");
});

// 1 to Many Relation

module.exports = db;