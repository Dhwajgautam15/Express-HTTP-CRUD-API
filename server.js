require("dotenv").config();
const express = require('express');
const todosRoutes = require('./src/todos/routes')
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("hello world!")
})

app.use(express.json());

app.use('/todos',todosRoutes)




app.listen(port,()=>console.log(`app listen on port ${port}`))