//main file for the app

const express = require("express")
const app = express()
const port = 3002 //port for use
const gamesRouter = require("./Games/routes/gamesRoutes")// the route for the todolist
const cors = require("cors")
require("dotenv").config()

const mongoose = require('mongoose')


// database integration 
mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() => console.log('MongoDB connected'))
.catch(error => console.error('MongoDB connection error', error ))



// middleware
app.use(express.json());
app.use(cors()) // allows requests from the frontend. 

app.use(gamesRouter)





//use port 3000 to listen for a response
app.listen(port, () => {
     console.log(`Server is running on ${port}`)
})

//auth stuff