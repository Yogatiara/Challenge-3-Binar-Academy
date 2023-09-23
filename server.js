const port = process.env.PORT || 5000;
const host = 'localhost';
const host_url = `http://${host}:${port}`;

const app = require('./app')


app.listen(port, () => {
  console.log(`Localhost is running: ${host_url}`);
})
