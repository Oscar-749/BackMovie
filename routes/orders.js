const router = require('express').Router();
const Ordercontroller = require('../controllers/OrderController');

router.post('/reserve', Ordercontroller.newOrder);

module.exports = router;