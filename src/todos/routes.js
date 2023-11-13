const { Router } = require('express');
const controller = require('./controller');
const router = Router();

const validation = require("../../middleWare/validateRequest")
const todoSchema = require("../../validations")


router.get('/',controller.getTodos);
router.get("/:id",controller.getTodosById);

router.post("/",validation(todoSchema),controller.addTodo);

router.put("/:id",validation(todoSchema),controller.updateTodo);

router.delete("/:id",controller.removeTodo);

module.exports = router;