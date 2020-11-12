const express = require('express');
const Ordercontroller = require('../controllers/OrderController');
const router = express.Router();

router.post('/reserve', Ordercontroller.reserve);

module.exports = router;