/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function(pattern, str) {
  const arr = str.split(' ');
  console.log(arr);
  let map = {};
  if (pattern.length !== arr.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern.charAt(i);
    if (map[char] === undefined) {
      for (let key in map) {
        if (arr[i] === map[key]) {
          return false;
        }
      }
      map[char] = arr[i];
    } else {
      let val = map[char];
      if (val !== arr[i]) {
        return false;
      }
    }
  }

  return true;
};

const pattern1 = 'abba';
const str1 = 'dog cat cat dog';
const test1 = wordPattern(pattern1, str1);
console.log(test1);