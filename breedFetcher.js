const readline = require('readline');
const request = require('request');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const args = process.argv.slice(2);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args[0];

request (url, (error, response, body) => {
  let data = {};
  if (error) {
    console.log("Error:", error);
  } else if (body) {
    data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log('The requested breed is not found')
    } else { 
      console.log(data[0])
    }
  }
});
















  
