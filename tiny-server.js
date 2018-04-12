const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const tinyLr = require('tiny-lr');
const { getRates } = require('./fixer-api-service');

const app = express();
const port = process.env.PORT || 35729;

app.get('/api/rates', async (req, res) => {
  const data = await getRates();
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

// Bind Express and Tiny Reload
app
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json())
  .use(tinyLr.middleware({ app: app }))
  .use(express.static(path.resolve('./')))
  .listen(port, () => {
    console.log('listening on %d', port);
  });
