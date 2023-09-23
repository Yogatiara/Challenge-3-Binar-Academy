const express = require('express');
const app = express();

const morgan = require('morgan');

const CarsRoute = require('./routes/carRoute')

app.use(express.json());
app.use(morgan("dev"))

app.use('/api/v1', CarsRoute);

module.exports = app;