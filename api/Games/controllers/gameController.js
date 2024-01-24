//this is the logic controller for the app
const createError = require("http-errors")
const Games = require("../models/gameModels")



exports.getAllGames = async function (req, res, next) {
     try {
          const game = await Games.find();
          res.json(game);
     } catch(error) {
          next(createError(500 ,error.message))
     }
}

exports.createGame = async function (req, res, next) {

     try {
          const newGame = new Games({ name : req.body.name, played : req.body.played});
          await newGame.save()
          res.status(201).json(newGame)
     } catch (error) {
          next(createError(500 ,error.message))
     }

}

exports.showGame = async function (req, res, next) {
     try {
          const game = await Games.findById(req.params.id)
      if(!game) {
          return next(createError(404, 'Game not found.'))
      }
     } catch(error) {
          next(createError(500, error.message))
     }

}


exports.updateGame = async function (req, res, next) {

     try {
          const gameListID = req.params.id; 
          const updatedGame = await Games.findByIdAndUpdate(gameListID, req.body, {new: true})

          if(!updatedGame) {
               return next(new Error('Game not found'));
          }

          res.status(200).json(updatedGame)
     } catch (error) {
          next(createError(500 ,error.message))
     }
}

exports.deleteGame = async function (req, res, next) {

     try {
          const gameListID = req.params.id;
          const deletedGame = await Games.findByIdAndDelete(gameListID)

          if(!deletedGame) {
               return next(new Error('Game not found'))
          }

          res.status(200).json({message: 'Game deleted successfully.'})
     } catch (error) {
          next(createError(500 ,error.message))
     }
}