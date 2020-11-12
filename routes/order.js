const express = require('express');
const OrderController = require('../controllers/OrderController');
const router = express.Router();

router.get('/', OrderController.getAll);
router.get('/:id', OrderController.getById);
router.post('/reserve', OrderController.createOrder);
router.post('/update/:id', OrderController.updateOrder);
router.delete('/delete/:id', OrderController.deleteOrder);

module.exports = router;