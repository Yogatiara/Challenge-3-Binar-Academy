const fs = require('fs');

const carsData = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/cars-data.json`));

const { v4: uuidv4 } = require('uuid');
const uuid = uuidv4();

module.exports = {
  getMessage: (req, res) => {
    res.status(200).json({
      message: "ping successfully"
    })
  },

  getAllCarsData: (req, res) => {

    res.status(200).json({
      status: "succes",
      message: "car data is successfully displayed",
      data: {
        carsData
      }
    })
  },

  getCarsDataById: (req, res) => {
    const id = req.params.id_cars;

    const carData = carsData.find(el => el.id === id);

    if (!carData) {
      return res.status(404).json({
        status: 'failed',
        message: `data with ${id} this not found`
      })
    } else {
      res.status(200).json({
        status: "succes",
        message: `car data with ${id} is successfully displayed`,
        data: {
          carData
        }
      })
    }

  },

  postCarsData: (req, res) => {
    const newId = uuid;
    const newData = Object.assign({ id: newId }, req.body);

    carsData.push(newData);

    fs.writeFile(`${__dirname}/../dev-data/data/cars-data.json`, JSON.stringify(carsData), err => {
      if (err) {
        return res.status(500).json({
          status: "failed",
          message: "Internal Server Error: Unable to read file"
        })
      } else {
        res.status(201).json({
          status: "succes",
          message: "Insert data is successful",
          data: {
            car: newData
          }
        })
      }
    })
  },

  updateCarDataById: (req, res) => {
    const id = req.params.id_cars;

    const carIndex = carsData.findIndex(el => el.id === id);

    if (carIndex === -1) {
      return res.status(404).json({
        status: "failed",
        message: `car data with ${id} this not found`
      })
    }

    carsData[carIndex] = { ...carsData[carIndex], ...req.body }

    fs.writeFile(`${__dirname}/../dev-data/data/cars-data.json`, JSON.stringify(carsData), err => {
      if (err) {
        return res.status(500).json({
          status: "failed",
          message: "Internal Server Error: Unable to read file"
        })
      } else {
        res.status(201).json({
          status: "succes",
          message: `car data with id : ${id} is edited`,
          data: {
            car: carsData[carIndex]
          }
        })
      }
    })
  },

  deleteCarDataById: (req, res) => {
    const id = req.params.id_cars;

    const carIndex = carsData.findIndex(el => el.id === id);

    if (carIndex === -1) {
      return res.status(404).json({
        status: "failed",
        message: `car data with ${id} this not found`
      })
    }

    carsData.splice(carIndex, 1);

    fs.writeFile(`${__dirname}/../dev-data/data/cars-data.json`, JSON.stringify(carsData), err => {
      if (err) {
        return res.status(500).json({
          status: "failed",
          message: "Internal Server Error: Unable to read file"
        })
      } else {
        res.status(200).json({
          status: "succes",
          message: `car data with id : ${id} is deleted`,
          data: null
        })
      }
    })





  }
}