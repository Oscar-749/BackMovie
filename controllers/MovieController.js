const { getAll, getById} = require('./UserController');
const Movie = require('../models/Movie');

const MovieController = {

    async getAll(req, res){
        try{
            const movies = await Movie.find();
            res.send(movies);
        }catch(error){
            console.log(error);
            res.status(500).send({message: 'Hay algun problema'})
        }
    },

    async getById(req, res) {
        try{
            const movies = await Movie.findById(req. params.id);
            res.send(movies);
        }catch(error){
            console.log(error);
            res.status(500).send({message:'Hay algun problema al encontrar la pelicula'});
        }
    },

    async createMovie(req, res) {
        try{
            const movie = await Movie.create(req.body);
            res.send({movie, message: 'Pelicula creada correctamente'})
        }catch(error){
            console.log(error);                
            res.status(500).send({message:'Hay algun problema'})
        }
    },

    async delete(req, res) {
        try{
            const movie = await Movie.findByIdAndDelete(req.params.id)
            res.json({message:'Pelicula eliminada con exito'});
        }catch(error){
            console.log(error);
            res.status(500).send({message:'Hay algun problema al eliminar la pelicula', error})
        }
    }
}

module.exports = MovieController;