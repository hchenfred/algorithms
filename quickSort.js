let quickSort = function(arr, start, end) {
  //base case
  if (start >= end) {
    return;
  }

  //partition
  let pivotIndex = partition(arr, start, end);

  //sort left part
  quickSort(arr, start, pivotIndex - 1);

  //sort right part
  quickSort(arr, pivotIndex + 1, end);
}

let partition = function(arr, start, end) {
  let pivot = arr[end];
  //console.log('pivot', pivot);
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, end, pivotIndex);
  return pivotIndex;
}

let swap = function(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var test1 = [7, 2, 1, 6, 8, 5, 3, 4];
partition(test1, 0, test1.length - 1)
console.log(test1);
quickSort(test1, 0, test1.length - 1);
console.log(test1);