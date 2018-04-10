const dotenv = require('dotenv').config();
const axios = require('axios');

const api = axios.create({
  baseURL: `http://data.fixer.io/api`,
  params: {
    access_key: process.env.API_KEY
  },
  timeout: 5000,
});

module.exports = {
  getRates: async () => {
    try {
      const response = await api.get('/latest')
      return response.data;
    } catch (error) {
      console.log(error)
    }
    return {};
  }
}