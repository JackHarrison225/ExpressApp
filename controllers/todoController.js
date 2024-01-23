//this is the logic controller for the app
const createError = require("http-errors")

const todoList = []

exports.index = (req, res, next) => {
     res.send(todoList)
}

exports.createTodo = (req, res, next) => {
     console.log(req.headers)
     if(req.headers?.password !== "Password123") return next(createError(401, "Not authorised"))
     const IsMissingInfo = !req.body.name || !req.body.expriry || !req.body.difficulty
     if (IsMissingInfo) return next(createError(400, "Fill all fields"))
     req.body.id = todoList.length + 1 + Date.now()
     todoList.push(req.body)
     res.send(todoList)
}

exports.deleteTodo = (req, res, next) => {
     const todoListID = Number(req.params.id)
     const todoIndex = todoList.findIndex(todoList => todoList.id == todoListID)
     if( todoIndex === -1) return next(createError(404, "todo not found"))
     todoList.splice(todoIndex, 1)
     res.send(todoList)
}
exports.updateTodo = (req, res, next) => {
     const todoListID = Number(req.params.id)
     const todoIndex = todoList.findIndex(todoList => todoList.id == todoListID)
     req.body.id = todoList.length + 1 + Date.now()
     if( todoIndex === -1) return next(createError(404, "todo not found"))
     todoList[todoIndex] = req.body
     res.send(todoList)
}