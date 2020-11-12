const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId, ref: 'User',
        required: true
    },
    movie_id: {
        type: mongoose.Types.ObjectId, ref: 'Movie',
        required: true
    },
    createDate:{
        type: Date,
        default: Date
    },
    returnDate:{
        type: Date,
        default: Date + 5
    }
})
