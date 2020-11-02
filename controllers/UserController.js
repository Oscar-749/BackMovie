const { update } = require('../models/User');
const User = require('../models/User');

const UserController = {
    //SACA TODOS LOS USUARIOS
    async getAll(req, res){
        try{
            const users = await User.find();
            res.send(users);

        }catch(error){
            console.log(error);                
            res.status(500).send({message:'Hay algun problema'})
        }
        
    },

    //BUSCAR USUARIO POR ID
    async getById(req, res){
        try{
            const users = await User.findById(req.params.id);
            res.send(users);

        }catch(error){
            console.log(error);                
            res.status(500).send({message:'Hay algun problema al encontrar el user por id'})
        }
        
    },
    
    async register(req, res){
        try{
            const user = await User.create(req.body);
            res.send({user, message: 'Usuario creado correctamente'})
    
        }catch(error){
            console.log(error);                
            res.status(500).send({message:'Hay algun problema'})
        }
    },

    async login(req, res) {
        try{
            const user = await User.findOne(req.params)
            res.send({user, message:'Has iniciado correctamente'})
        }catch{
            console.log(error);                
            res.status(500).send({message:'Hay algun problema'})
        }
    },

    async update(req, res){
        try{
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            })
            res.send(user);

        }catch{
            console.log(error);                
            res.status(500).send({message:'Hay algun problema al modificar el usuario', error})
        }
    },

    async delete(req, res){
        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.json({message:'Usuario eliminado con exito'});

        }catch(error) {
            console.log(error);
            res.status(500).send({message:'Hay algun problema al modificar el usuario', error})
        }
    }
}

module.exports = UserController;