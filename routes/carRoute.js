const express = require('express');
const carsRouter = express.Router();
const carController = require('../controllers/carController');

carsRouter
  .route('/')
  .get(carController.getMessage);

carsRouter
  .route('/cars')
  .get(carController.getAllCarsData)
  .post(carController.postCarsData);

carsRouter
  .route('/cars/:id_cars')
  .get(carController.getCarsDataById)
  .put(carController.updateCarDataById)
  .delete(carController.deleteCarDataById);


module.exports = carsRouter;