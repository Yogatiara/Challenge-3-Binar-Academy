const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const host = 'localhost';
const host_url = `http://${host}:${port}`;
const CarsRoute = require('./routes/CarsRoute')

app.use(express.json());
app.use('/api/v1', CarsRoute);

app.listen(port, () => {
  console.log(`Localhost is running: ${host_url}`);
})
