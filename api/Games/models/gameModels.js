// import { Schema, model } from "mongoose";

const mongoose = require("mongoose")

const gameSchema =  new mongoose.Schema({
 
    name: {
        type: String,
        required: true
    },
    played: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Games", gameSchema);

