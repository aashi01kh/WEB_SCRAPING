// axiosWork.js
const axios = require('axios');

// Function to make the Axios request
function makeAxiosRequest(lol) {
   // console.log(lol);
  return axios.get('https://app.scrapingbee.com/api/v1/store/google', {
    params: {
      'api_key': APIKEY,
      'search': lol,
      'add_html': true // Enable this parameter to receive the full HTML content
    }
  });
}

module.exports = makeAxiosRequest;
