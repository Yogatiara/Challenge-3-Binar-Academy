const fs = require('fs');
const carsData = JSON.parse(fs.readFileSync(`${__dirname}/../../dev-data/data/cars-data.json`));

const checkId = (req, res, next, val) => {
  const car = carsData.find(el => el.id === val);

  if (!car) {
    return res.status(404).json({
      status: 'failed',
      message: `data with id : ${val} this not found`
    })
  }
  next();
}

module.exports = checkId;