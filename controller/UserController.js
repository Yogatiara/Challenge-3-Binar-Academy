const fs = require('fs');

const carsData = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/cars-data.json`));

module.exports = {
  getMessage: (req, res) => {
    res.status(200).json({
      message: 'ping successfully'
    })
  },

  getAllCarsData: (req, res) => {
    res.status(200).json({
      status: 'succes',
      data: {
        carsData
      }
    })
  },
  getCarsDataById: (req, res) => {
    res.status(200).json({
      status: 'succes',


    })
  }
}