const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user_id: String,
    movie_id: String,
    createDate: Date,
    returnDate: Date
})

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
