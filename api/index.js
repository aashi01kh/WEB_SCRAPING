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
    // const a = ['a','b'];
    // res.send(a);
  
  // const response = await makeAxiosRequest(searchTerm); // Using await here to get the response
    const htmlContent = response.data;
    const ans = [];
    //const firstFiveUrls = [];
  
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










  
























 // Example usage



// async function get(url) {
//     var client = new scrapingbee.ScrapingBeeClient('7PF28B13WMYXGMU10G6VRVRU47VTCGM9XJF4L969VM2VHW53XZ5GDSZ9KXAESW738JJUXVSR35N32ZA9');
//     var response = await client.get({
//       url: url,
//       params: {
//         'api_key': '7PF28B13WMYXGMU10G6VRVRU47VTCGM9XJF4L969VM2VHW53XZ5GDSZ9KXAESW738JJUXVSR35N32ZA9',
//         //'search': 'pizza new york',
//         //'add_html': true // Enable this parameter to receive the full HTML content
//       }
//     })
//     return response
//   }














// const firstFiveUrls = ["https://www.tripadvisor.com/Restaurants-g60763-c31-New_York_City_New_York.html",
// "https://www.partir-a-new-york.com/restaurants-new-york/meilleures-pizzas-new-york",
// "https://www.newyorkcity.fr/la-meilleure-pizza-a-new-york/",
// "https://ny.eater.com/maps/nyc-best-iconic-pizza-pizzeria",
// "https://www.theinfatuation.com/new-york/guides/best-pizza-nyc",
// "https://www.hellonewyork.fr/ou-manger-une-pizza-a-new-york/"];













//   function myFunction(myVariable) {
//     const url = myVariable;
//     get(url)
//   .then(function (response) {
//     var decoder = new TextDecoder();
//     var text = decoder.decode(response.data);
    
//     // Call extractTextFromBody with wordLimit set to 50
//     const bodyText = extractTextFromBody(text, 50);
    
//     console.log(bodyText);
//     return bodyText
//     //res.send(bodyText); // Send the truncated text as the response to the client
//   })
//  // .catch((e) => console.log('A problem occurs : ' + e.response.data));

//   }









// function extractTextFromBody(html, wordLimit) {
//   const $ = cheerio.load(html);
//   const bodyText = $('body').text().trim();

//   // Split the text into words
//   const words = bodyText.split(/\s+/);

//   // Join the first `wordLimit` words back into a truncated text
//   const truncatedText = words.slice(0, wordLimit).join(' ');

//   return truncatedText;
// }







// app.get('/scrape', async (req, res) => {
//     try {
//       const response = await makeAxiosRequest(); // Using await here to get the response
//       const htmlContent = response.data; // The HTML content is available in response.data
  
//       const ans = [];
//       const firstFiveUrls = [];
  
//       for (let i = 0; i <= 5; i++) {
//         if (htmlContent.organic_results[i]) {
//           firstFiveUrls.push(htmlContent.organic_results[i].url);
//         } else {
//           break; // Break the loop if there are less than 5 organic_results
//         }
//       }

//       ans[0] = await myFunction(firstFiveUrls[0]); 
//       ans[1] = await myFunction(firstFiveUrls[1]); 
//    //   ans[2] = await myFunction(firstFiveUrls[2]); 
//      // ans[3] = await myFunction(firstFiveUrls[3]); 
//      // ans[4] = await myFunction(firstFiveUrls[4]); 
//      if(ans[1])
//       res.send(ans)

//     } catch (error) {
//       // Handle error
//       console.error(error);
//       res.status(500).send('Error occurred while making the Axios request.'); // Send an error response to the client
//     }
//   });
  
//   Start the server









// app.get('/scrape', async (req, res) => {
    
//   makeAxiosRequest()

//     .then(function (response) {
//       // Handle success
//       const htmlContent = response.data; // The HTML content is available in response.data
//       const ans=[];
//       const firstFiveUrls = [];
// for (let i = 0; i <= 5; i++) {
//   if (htmlContent.organic_results[i]) {
//     firstFiveUrls.push(htmlContent.organic_results[i].url);
//     ans[i] = await myFunction(firstFiveUrls[i]);

//     if(i===5){

//         res.send(ans); // Send the HTML content as the response to the client
//     }
//   } else {
//     break; // Break the loop if there are less than 5 organic_results
//   }
// }
    
     
//     })
//     .catch(function (error) {
//       // Handle error
//       console.error(error);
//       res.status(500).send('Error occurred while making the Axios request.'); // Send an error response to the client
//     });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });











// const url = 'https://www.theinfatuation.com/new-york/guides/best-pizza-nyc';

// get(url)
//   .then(function (response) {
//     var decoder = new TextDecoder();
//     var text = decoder.decode(response.data);
    
//     // Call extractTextFromBody with wordLimit set to 50
//     const bodyText = extractTextFromBody(text, 50);
    
//     console.log(bodyText);
//     res.send(bodyText); // Send the truncated text as the response to the client
//   })
//   .catch((e) => console.log('A problem occurs : ' + e.response.data));














































// // index.js
// const express = require('express');
// const makeAxiosRequest = require('./axiosWork'); // Import the Axios function from axiosWork.js
// const app = express();
// const cheerio = require('cheerio');
// const axios = require('axios');
// const scrapingbee = require('scrapingbee');
// const PORT = 3000; // You can change this to any available port you prefer

// async function get(url) {
//     var client = new scrapingbee.ScrapingBeeClient('653VHBEA2B7XH1661ZMCX6QWXTH43ABWDNQN05Q9MMFNX146QBVOIMN9UVL3ULRK9WFTEOY4593T6QFO');
//     var response = await client.get({
//       url: url,
//       params: {
//         'api_key': '653VHBEA2B7XH1661ZMCX6QWXTH43ABWDNQN05Q9MMFNX146QBVOIMN9UVL3ULRK9WFTEOY4593T6QFO',
//         //'search': 'pizza new york',
//         //'add_html': true // Enable this parameter to receive the full HTML content
//       }
//     })
//     return response
//   }

// app.get('/scrape', (req, res) => {


//     get('https://www.theinfatuation.com/new-york/guides/best-pizza-nyc').then(function (response) {
//         var decoder = new TextDecoder();
//         var text = decoder.decode(response.data);
//         const $ = cheerio.load(text);

// // Extract the text inside the body tag
//          const bodyText = $('body').text().trim();

// // Display the extracted text
//           console.log(bodyText);
//       //  console.log(text);
//     }).catch((e) => console.log('A problem occurs : ' + e.response.data));




    
//   makeAxiosRequest()

//     .then(function (response) {
//       // Handle success
//       const htmlContent = response.data; // The HTML content is available in response.data








//       const firstFiveUrls = [];
// for (let i = 0; i < 5; i++) {
//   if (htmlContent.organic_results[i]) {
//     firstFiveUrls.push(htmlContent.organic_results[i].url);
//   } else {
//     break; // Break the loop if there are less than 5 organic_results
//   }
// }
//     for(let i = 0 ; i < 5;i++){
//         console.log(firstFiveUrls[i]);
//         console.log("/n")
//     }
//       res.send(htmlContent); // Send the HTML content as the response to the client
//     })
//     .catch(function (error) {
//       // Handle error
//       console.error(error);
//       res.status(500).send('Error occurred while making the Axios request.'); // Send an error response to the client
//     });
// });

// // const html = `<html><head>...</head><body>Your desired text here</body></html>`;

// // // Load the HTML content into cheerio
// // const $ = cheerio.load(html);

// // // Extract the text inside the body tag
// // const bodyText = $('body').text().trim();

// // // Display the extracted text
// // console.log(bodyText);
// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
