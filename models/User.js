const mongoose = require('mongoose');
const bccrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
});

UserSchema.pre('save', async function (next){
    try {
        const user = this;
        user.password = await bccrypt.hash(user.password, 9);
        next();
    }catch (error){
        console.error(error);
    }
    
})

const User = mongoose.model('User', UserSchema);

module.exports = User;