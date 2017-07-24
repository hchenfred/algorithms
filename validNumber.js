const isNumber = function(str) {
  const newStr = str.trim();
  let numberSeen = false;
  let pointSeen = false;
  let eSeen = false;

  for (let i = 0; i < newStr.length; i++) {
    let curr = newStr.charAt(i);

    if (curr === '+' || curr === '-') {
      if (i !== 0 || newStr.charAt(i-1) !== 'e') {
        return false;
      }
    }

    else if (curr.match(/[0-9]/)) {
      numberSeen = true;
    }

    else if (curr === 'e') {
      if (!numberSeen || eSeen) {
        return false;
      }
      eSeen = true;
    }

    else if (curr === '.') {
      if (!numberSeen || pointSeen || eSeen) {
        return false;
      }
      pointSeen = true;
    } else {
      return false;
    }
  }

  return true;

};

console.log(isNumber("0"));
console.log(isNumber("0.1"));
console.log(isNumber("abc"));
console.log(isNumber("2e10"));