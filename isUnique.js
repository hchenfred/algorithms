let isUnique = function(str) {
  let map = {};

  for (var i = 0; i < str.length; i++) {
    var currChar = str.charAt(i);
    if (map[currChar]) {
      return false;
    } else {
      map[currChar] = true;
    }
  }
  
  return true;
}

var test1 = isUnique('abcde');
console.log(test1); //should return false;