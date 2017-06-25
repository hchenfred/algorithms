const quickSort = function(arr) {
  if (arr === null || arr.length === 0) {
    return;
  }

  const quickSortHelper = function(arr, start, end) {
    //base case no element or only one element left, no need to sort
    if (start >= end) {
      return;
    }

    //partition
    let left = start;
    let right = end;
    let pivot = arr[start + Math.floor((end - start)/2)];
    console.log(pivot);
    //left <= right not left < right
    while (left <= right) {
      // arr[left] < pivot not arr[left] <= pivot
      while(left <= right && arr[left] < pivot) {
        left++;
      }
      while(left <= right && arr[right] > pivot) {
        right--;
      }
      if (left <= right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
      }
    }
    console.log(arr);

    quickSortHelper(arr, start, right);
    quickSortHelper(arr, left, end);
  } 

  quickSortHelper(arr, 0, arr.length - 1);
}


var test1 = [7, 2, 1, 6, 8, 5, 3, 4];
quickSort(test1);
console.log(test1);