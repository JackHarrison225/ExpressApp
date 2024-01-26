//main file for the app

const express = require("express")
const app = express()
const port = 3001 //port for use
const gamesRouter = require("./Games/routes/gamesRoutes")// the route for games CRUD operations
const authRouter = require("./Games/routes/authRoutes")  // routes for the login and register operations

const cors = require("cors")
require("dotenv").config()

const mongoose = require('mongoose')


// database integration 
mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() => console.log('MongoDB connected'))
.catch(error => console.error('MongoDB connection error', error ))



// middleware
app.use(express.json());
app.use(cors()) // allows requests from the frontend by setting correct Headers.

app.use(gamesRouter)
app.use(authRouter)





//use whatever defined port to listen for a response
app.listen(port, () => {
     console.log(`Server is running on ${port}`)
})

//auth stuff