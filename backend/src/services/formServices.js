const axios = require('axios');

exports.getCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch countries');
  }
};
