// [-3, 1, 2, -3, 4]
// [-3, -2, 0, -3, 1]

const subarraySum = function(arr) {
  if (arr === null || arr.length === 0) {
    return [];
  }
  let result = [];
  let map = {};
  // key (sum) value - index
  map[0] = -1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (map[sum] === undefined) {
      map[sum] = i;
    } else {
      result[0] = map[sum] + 1;
      result[1] = i;
      return result;
    }
    
  }
  return result;
};

console.log(subarraySum([-3, 1, 2, -3, 4]));