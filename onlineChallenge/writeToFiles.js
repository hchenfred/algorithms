var fs = require('fs');
var fs = require('fs');

var writeToFile = function(fileName, data) {
  fs.appendFile(__dirname + '/output/' + fileName, data, function(err){
    if (err) throw err;
    console.log("append/write to file success");
  }); 
}

module.exports = writeToFile;