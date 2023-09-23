const fs = require('fs');
const dataDirectory = `${__dirname}/../../dev-data/data/cars-data.json`;


const carsData = JSON.parse(fs.readFileSync(dataDirectory));

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


    res.status(200).json({
      status: "succes",
      message: `car data with ${id} is successfully displayed`,
      data: {
        carData
      }
    })

  },

  postCarsData: (req, res) => {
    const newId = uuid;
    const newData = Object.assign({ id: newId }, req.body);

    carsData.push(newData);

    fs.writeFile(dataDirectory, JSON.stringify(carsData), err => {
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

    carsData[carIndex] = { ...carsData[carIndex], ...req.body }

    fs.writeFile(dataDirectory, JSON.stringify(carsData), err => {
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

    carsData.splice(carIndex, 1);

    fs.writeFile(dataDirectory, JSON.stringify(carsData), err => {
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