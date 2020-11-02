const express = require('express');
const MovieController = require('../controllers/MovieController');
const router = express.Router();

router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getById);
router.post('/create', MovieController.createMovie);
router.delete('/delete/:id', MovieController.delete);


module.exports = router;