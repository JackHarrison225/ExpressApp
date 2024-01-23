// this is the routes that the app has

const express = require("express");
const router = express.Router();
const { index, createTodo, deleteTodo, updateTodo } = require("../controllers/todoController")

router.get("/todo", index)
router.post("/createTodo", createTodo)
router.delete("/delete/:id", deleteTodo)
router.patch("/update/:id", updateTodo)

module.exports = router;