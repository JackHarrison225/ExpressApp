// import { Schema, model } from "mongoose";

const mongoose = require("mongoose")

const gameSchema =  new mongoose.Schema({
 
    gameName: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    imageData: {
        type: String,
        required: true 
    },

})

module.exports = mongoose.model("Games", gameSchema);

