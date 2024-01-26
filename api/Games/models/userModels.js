const mongoose = require("mongoose")

const userLogin = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    token: String
  },
  { collection: 'users'}
  )

module.exports = mongoose.model("Login", userLogin)