const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    let data = {};
    if (error) {
      callback("Error:", error);
    } else if (body) {
      data = JSON.parse(body);
      if (data[0] === undefined) {
        callback ('The requested breed is not found');
      } else {
        callback(data[0]);
      }
    }
  });
};

module.exports = { fetchBreedDescription };













  
