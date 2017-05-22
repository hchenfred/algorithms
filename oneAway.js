let oneAway = function(str1, str2) {
 //check replace
  if (str1.length === str2.length) {
    let i = 0;
    let j = 0;
    let diff = 0;
    for (let index = 0; index < str1.length; index++) {
      if (str1.charAt(index) !== str2.charAt(index)) {
        diff++;
      }
    }
    if (diff > 1) {
      return false;
    }
  }

  //check insert or delete
  if (Math.abs(str1.length - str2.length) === 1) {
    let shorter = '';
    if (str1.length > str2.length) {
      shorter = str2;
    } else {
      shorter = str1;
    }
    let j = 0;
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1.charAt(i) === str2.charAt(2)) {
        i++;
        j++;
      } else {
        diff++;
        if (diff > 1) {
          return false;
        }
        j++;
      }
    }

  }


  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  return true;
}