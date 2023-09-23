const express = require('express');
const router = express.Router();

const carController = require('../controllers/carController');
const checkId = require('../middlewares/checkId');
const checkBody = require('../middlewares/checkBody');

router.param('id_cars', checkId);

router
  .route('/')
  .get(carController.getMessage);

router
  .route('/cars')
  .get(carController.getAllCarsData)
  .post(checkBody, carController.postCarsData);

router
  .route('/cars/:id_cars')
  .get(carController.getCarsDataById)
  .put(checkBody, carController.updateCarDataById)
  .delete(carController.deleteCarDataById);


module.exports = router;