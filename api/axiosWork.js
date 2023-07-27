// axiosWork.js
const axios = require('axios');

// Function to make the Axios request
function makeAxiosRequest(lol) {
   // console.log(lol);
  return axios.get('https://app.scrapingbee.com/api/v1/store/google', {
    params: {
      'api_key': '7PF28B13WMYXGMU10G6VRVRU47VTCGM9XJF4L969VM2VHW53XZ5GDSZ9KXAESW738JJUXVSR35N32ZA9',
      'search': lol,
      'add_html': true // Enable this parameter to receive the full HTML content
    }
  });
}

module.exports = makeAxiosRequest;
