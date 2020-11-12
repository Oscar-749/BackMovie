const mongoose = require('mongoose');
const MongoURI = process.env.MongoURI || 'mongodb://localhost:27017/mongoose'

mongoose.connect('mongodb://localhost:27017/mongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('Conectado con exito a MongoDB ' + MongoURI))
.catch(console.error)