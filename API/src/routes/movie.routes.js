const express = require("express")

const movieRoutes = express.Router()

//Inclusão dos middlewares
const checkMovieExists = require("../middlewares/checkMovieExistsMiddleware")
const findMovie = require("../middlewares/findMovieMiddleware")
const findMovies = require("../middlewares/findMoviesMiddleware")

//Inclusão dos controller
const movieController = require("../controllers/movieController")

//Criar filme
movieRoutes.post("/", checkMovieExists, (req, res)=> movieController.createMovie(req, res))

//Listar filmes
movieRoutes.get("/", (req, res)=> movieController.listMovies(req, res))

//Buscar filme pelo titulo
movieRoutes.get("/:title", findMovie, (req, res)=> movieController.getMovieByTitle(req, res))

//Buscar filme pelo gênero e/ou classificação
movieRoutes.get("/search/:genreOrAgeRate", findMovies, (req, res)=> movieController.getMovieByGenreOrAgeRating(req, res))

//Deletar filme (deve ser deletado pelo titulo
movieRoutes.delete("/:title", findMovie, (req, res)=> movieController.deleteMovie(req, res))

module.exports = movieRoutes