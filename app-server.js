const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const port = 3000;

console.log(process.env.API_KEY);

app.use(express.static('./'));
app.listen(port);