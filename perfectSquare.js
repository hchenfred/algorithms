/**
 * @param {number} n
 * @return {number}
 */
// https://leetcode.com/problems/perfect-squares/#/description
var numSquares = function(n) {
    
    // dp[i] denotes the least number of perfect square numbers that sums to i
    // dp[i] = Math.min(dp[i - j * j])  i - j * j >= 0;

    //dp[0] = 1;
    //dp[1] = 1;
    //dp[2] = Math.min()
    var dp = Array(n+1).fill(0);
    dp[0] = 0;
    for (var p = 1; p <= n; p++) {
      dp[p] = p;
    }
    console.log(dp);

    for (var i = 2; i <= n; i++) {
      for (var j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], 1 + dp[i - j * j]);
      }
    }
    console.log(dp);

    return dp[n]; 
};

console.log(numSquares(13));