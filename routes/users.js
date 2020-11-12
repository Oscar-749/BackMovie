const express = require('express');
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');

const router = express.Router();

//RUTAS USER
router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.post('/register', UserController.register);
// router.get('/login', UserController.login);
router.put('/update/:id', UserController.update);
router.delete('/delete/:id', UserController.delete);

module.exports = router;
