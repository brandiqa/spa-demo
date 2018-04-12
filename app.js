window.addEventListener('load', ()=> {

  const showRates = async() => {
    // Instantiate api handler
    const service = axios.create({
      baseURL: 'http://localhost:35729/api',
      timeout: 5000,
    })

    // Load Currency Rates
    const response = await service.get('/rates');
    const rates = response.data.rates;

    // Display Rates Table
    const rates_template = Handlebars.compile($('#rates-template').html());
    const html = rates_template({ 'rates': rates });
    $('#app').html(html);
  }

  page.base('/');

  page('/', showRates);
  page();
});