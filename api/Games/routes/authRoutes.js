const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController')



// router for login using POST request
router.post('/login', authController.login) 

// router for registering using POST request
router.post('/register', authController.register)

module.exports = router