var parseJson = require('./parseJson');
var fs = require('fs');
var path = require('path');
var xml2js = require('xml2js');
//xml2js is needed to parse XML file
//please run this "npm install xml2js" in your terminal
var parser = new xml2js.Parser();

var solution = function(fileName) {
  var filePath = path.join(__dirname, fileName);
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) throw err;
    parser.parseString(data, function (err, result) {
      //console.log(result['ListBucketResult']);
      var key = Object.keys(result)[0];
      var jsonObj = result[key];
      parseJson(result[key], key);
    });
  });
} 

solution('example1.codex');






