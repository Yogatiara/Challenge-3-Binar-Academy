const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

router.get('/', UserController.getMessage);
router.get('/cars', UserController.getAllCarsData);


module.exports = router;