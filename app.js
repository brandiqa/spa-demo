window.addEventListener('load', async ()=> {
  // Instantiate api handler
  const service = axios.create({
    baseURL: 'http://localhost:35729/api',
    timeout: 5000,
  })

  // Load Currency Rates
  const response = await service.get('/rates');
  console.log(response.data.rates)

});