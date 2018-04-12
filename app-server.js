const dotenv = require('dotenv').config();
const express = require('express');
const { getRates } = require('./fixer-api-service');

const app = express();
const port = process.env.PORT || 35729;

app.get('/api/rates', async (req, res) => {
  const data = await getRates();
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

app.use(express.static('./'));

app.listen(port, () => {
  console.log('listening on %d', port);
});
