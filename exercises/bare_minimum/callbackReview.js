/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');
var https = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      callback(err);
    } else {
      var fileDataArr = fileData.toString().split(/\r?\n/);
      callback(null, fileDataArr[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  var testAPI = https.get(url, (response) => {
    callback(response.statusCode);
    // response.on('data', (chunk) => {
    //   data += chunk;
    // });
    // response.on('end', (err, data) => {
    //   console.log('what is data', data);
    //   callback(null, data);
    // });
  }).on('error', (err) => {
    console.log('logging the error:', err);
    callback(err);
  });
};


// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
