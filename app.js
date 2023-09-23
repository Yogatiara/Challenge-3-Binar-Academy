const express = require('express');
const app = express();

const morgan = require('morgan');

const CarsRoute = require('./src/routes/carRoute')

app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  console.log(req.requestTime)
  next()
})

app.use('/api/v1', CarsRoute);

module.exports = app;