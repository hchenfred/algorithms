var writeToFiles = require('./writeToFiles');
var test1 = {
  Name: [ 'datacoral.codex' ],
  Prefix: [''],
  Marker: [''],
  Grades: [{
    "date": "2014­03­03T00:00:00.000Z",
    "grade": "A",
    "score": {
    "x": 1,
    "y": 2
  }
  }, {
    "date": "2011­11­23T00:00:00.000Z",
    "grade": "A",
    "score": {
    "x": 11,
    "y": 22
    }
  }],
};


var parseJson = function(obj, fileName) {
  var currMap = {};
  //console.log(obj);
  for (var key in obj) {
    if (typeof obj[key][0] === 'string') {
      currMap[key] = obj[key][0];
     } else if (Array.isArray(obj[key])) {
      //console.log(key);
      fileName += '_' + key;
      for (var i = 0; i < obj[key].length; i++) {
        parseJson(obj[key][i], fileName);
      }
      fileName = fileName.substring(0, fileName.length - key.length - 1);
      //console.log(currMap);
    }
  }
  //console.log(fileName, JSON.stringify(currMap));
  writeToFiles(fileName, JSON.stringify(currMap));
};


module.exports = parseJson;
