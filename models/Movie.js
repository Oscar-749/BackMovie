const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: String,
    overview: String
})

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;