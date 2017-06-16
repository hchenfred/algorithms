// For this problem, you are given N days of average home sale price data, and a fixed window size K . For each window of K days, from left to right, find the number of increasing subranges within the window minus the number of decreasing subranges within the window.

const numOfSubRanges = function(n) {
  return n * (n - 1)/2;
}

const trackTrends = function(N, K, prices) {


}