const express = require('express');
const app = express();
const { getRates } = require('./fixer-api-service');

app.get('/api/rates', async (req, res) => {
  const data = await getRates();
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

app.use(express.static('./'));
app.listen(3000);

console.log('Listening on localhost:3000');
