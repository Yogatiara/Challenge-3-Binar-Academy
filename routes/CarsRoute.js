const express = require('express');
const carsRouter = express.Router();
const CarsController = require('../controller/CarsrController');

carsRouter
  .route('/')
  .get(CarsController.getMessage);

carsRouter
  .route('/cars')
  .get(CarsController.getAllCarsData)
  .post(CarsController.postCarsData);

carsRouter
  .route('/cars/:id_cars')
  .get(CarsController.getCarsDataById)
  .put(CarsController.updateCarDataById)
  .delete(CarsController.deleteCarDataById);


module.exports = carsRouter;