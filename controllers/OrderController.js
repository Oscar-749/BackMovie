const Order = require('../models/Order');
const { getAll, getById } = require('./UserController');

const OrderController = {
    async getAll(req, res){
        try{
            const orders = await Order.find();
            res.send(orders);
        }catch(error){
            console.log(error);
            res.status(500).send({message: "Hay algun problema"});
        }
    },

    async getById(req, res){
        try{
            const orders = await Order.findById(req.params.id);
            res.send(orders);
        }catch(error){
            console.log(error);
            res.status(500).send({message:'Hay algun problema al encontrar la pelicula'});
        }
    },

    async createOrder(req, res) {
        try{
            const order = await Order.create(req.body);
            res.send({order, message: 'Pedido realizado correctamente'})
        }catch(error){
            console.log(error);                
            res.status(500).send({message:'Hay algun problema en el pedido'})
        }
    },

    async updateOrder(req, res) {
        try {
          const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });
          res.send({ order, message: "Usuario actualizado!" });
        } catch {
          console.log(error);
          res
            .status(500)
            .send({ message: "Hay algun problema al modificar el usuario", error });
        }
      },

    async deleteOrder(req, res) {
        try{
            const order = await Order.findByIdAndDelete(req.params.id)
            res.json({message:'Pedido cancelado con exito'});
        }catch(error){
            console.log(error);
            res.status(500).send({message:'Hay algun problema al eliminar el pedido', error})
        }
    }
}

module.exports = OrderController;