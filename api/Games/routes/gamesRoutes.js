// const games = require("../api")
// this is the routes that the app has

const express = require("express");
const router = express.Router();
// const { index, createGame, deleteGame, updateGame } = require("../controllers/gameController")

const gameController = require("../controllers/gameController")

// games.getGames();

router.get("/games", gameController.getAllGames)
router.post("/games/create", gameController.createGame)
router.delete("/games/delete/:id", gameController.deleteGame)
router.patch("/games/update/:id", gameController.updateGame)

module.exports = router;











//  ──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
//  ───▄▄██▌█_______________________________ █
//  ▄▄▄▌███▌█_______________________________ █
//  ███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
//  ▀(⊙)▀▀▀▀▀▀(⊙)▀(⊙)▀▀▀▀▀▀▀▀▀▀▀▀▀(⊙)▀▀(⊙)ooOOOOO