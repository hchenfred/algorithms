/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
   
    var curr = n;
    var numSet = new Set();
    while(true) {
        var num = 0;
        var currStr = curr.toString();
        for (var i = 0; i < currStr.length; i++) {
            var currDigit = parseInt(currStr.charAt(i));
            num += currDigit * currDigit;
        }
        if (num === 1) {
            return true;
        }
        // enters into a loop
        if (numSet.has(num)) {
            return false;
        }
        curr = num;
        numSet.add(num);
    }
    
};

console.log(isHappy(19));