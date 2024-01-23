//main file for the app

const express = require("express")
const app = express()
const port = 3000 //port for use
const router = require("./routes/todoRoutes")// the route for the todolist

app.use(express.json());
app.use(router)

// the "/" means base route (for example localhost:3000
app.get("/", function(req, res) {
     res.send("Hello World!")
})

//use port 3000 to listen for a response
app.listen(port, () => {
     console.log(`Server is running on ${port}`)
})

//auth stuff