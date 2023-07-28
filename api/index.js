const express = require('express');
const cheerio = require('cheerio');
const makeAxiosRequest = require('./axiosWork');
const scrapingbee = require('scrapingbee');
const cors = require('cors');
const app = express();
const PORT = 3005; // You can change this to any available port you prefer
app.use(cors());





const axios = require('axios');


async function getUrlBody(url) {
    try {
      const response = await axios.get(url);
      const htmlContent = response.data;
      const pTagContent = extractPTagContent(htmlContent);
      return pTagContent; // Return the content inside the <p> tags
    } catch (error) {
      console.error('Error fetching URL:', error.message);
      return null; // Return null in case of an error
    }
  }
  
  function extractPTagContent(html) {
    const $ = cheerio.load(html);
    const pTagContent = $('p').text().trim(); // Selecting text inside all <p> tags
  
    return pTagContent;
  }

  
  
async function letsgeturl(htmlContent) {

   const firstFiveUrls = [];
    for (let i = 0; i <= 5; i++) {
        if (htmlContent.organic_results[i]) {
          firstFiveUrls.push(htmlContent.organic_results[i].url);
        } else {
          break; // Break the loop if there are less than 5 organic_results
        }
      }
      return firstFiveUrls ;
  }  
  
  
  


app.get('/scrape', async (req, res) => {
    const searchTerm = req.query.search;
    console.log(searchTerm);
 
  
   const response = await makeAxiosRequest(searchTerm); // Using await here to get the response
    const htmlContent = response.data;
    const ans = [];
    
  
    const firstFiveUrls = await letsgeturl(htmlContent);


      for(let i = 0 ; i <= 5 ; i++){
               ans[i] = await getUrlBody(firstFiveUrls[i]);
              console.log(ans[i]);
      }
      res.send(ans);

  });


  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });










  






















