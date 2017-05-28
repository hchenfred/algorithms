/*
Given a dictionary, we want to make sure that the keys dont contain "$", so replace all the "$" signs with an "_" in the keys. The keys in dictionary are always strings while the values can be any of the following

a) Dictionary / List of dictionaries
b) String / List of strings
c) Integer / List of integers

For example:
{'key$1' : 'abc'}
{'key1': {'key$2' : 'def', 'key3' : [1,2]} }
{'key$1': 'abc', 'key$2' : ['def','ghi'], 'key3': [{'key$4' :[1,2] , 'key$5': 'jkl'}]}

*/

var removeDollarSign = function(dict) {
  // if the input is an array
  if (Array.isArray(dict)) {
    var temp = [];
    for (var i = 0; i < dict.length; i++) {
      temp.push(removeDollarSign(dict[i]));
    }
    return temp;
  } else if (typeof dict === 'object') {
    var result = {};
    for (var key in dict) {
      var newKey = key.replace('$', '_');
      result[newKey] = removeDollarSign(dict[key]);
    }
    return result;
  } else {
    return dict;
  }
}

var test1 = {'key$1' : 'abc'};
console.log(removeDollarSign(test1));
var test2 = {'key1': {'key$2' : 'def', 'key3' : [1,2]} }
console.log(removeDollarSign(test2));
var test3 = {'key$1': 'abc', 'key$2' : ['def','ghi'], 'key3': [{'key$4' :[1,2] , 'key$5': 'jkl'}]};