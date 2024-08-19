const models = require("../models/models")
const { Op } = require("sequelize")

//Criar filme
async function createMovie(req, res){
    try {
        const { title, imageURL, synopse, genre, ageRating, director } = req.body

        const movie = await models.Movie.create({
            title,
            imageURL,
            synopse,
            genre,
            ageRating,
            director
        })
    
        return res.status(201).json(movie)
    } catch(error) {
        return res.status(500).json({ error: "It was not possible to create movie" })
    }

}

//Listar filmes
async function listMovies(req, res){
    try {
        const movies = await models.Movie.findAll()
        if(movies.length<=0){
            return res.status(404).json({error: "There are no movies to list."})
        }

        return res.status(200).json(movies)
    } catch (error) {
        return res.status(500).json({error: "Could not find movies!"})
    }

}




//Buscar filme pelo titulo
function getMovieByTitle(req, res){
    const movie = req.movie
    return res.status(200).json(movie)
}


//Buscar filme pelo gênero e/ou classificação
function getMovieByGenreOrAgeRating(req, res){
    const movies = req.movies
    return res.status(200).json(movies)
}

//Deletar filme (deve ser deletado pelo titulo)
async function deleteMovie(req, res){
    try {
        const movie = req.movie
        await movie.destroy()
        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ error: "Was not able to delete movie"})
    }
}

module.exports = {
    createMovie,
    listMovies,
    getMovieByTitle,
    getMovieByGenreOrAgeRating,
    deleteMovie
}