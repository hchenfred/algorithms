const convertToBinary = function(num) {

  if (num === 0) {
    return '0';
  }

  let result = '';

  while (num > 0) {
    let temp = num % 2;
    result = temp + result;
    num = Math.floor(num / 2);
  }

  return result;
}

console.log(convertToBinary(11));