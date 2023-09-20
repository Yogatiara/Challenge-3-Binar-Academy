const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const host = 'localhost';
const host_url = `http://${host}:${port}`;
const UserRoute = require('./routes/UserRoute')


app.use(UserRoute);

app.listen(port, () => {
  console.log(`Localhost is running: ${host_url}`);
})
