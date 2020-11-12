const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('Conectado con exito a MongoDB'))
.catch(console.error)