//Task 3
function findLongestIncSubArray(arr) {
  var maxLenghtOfSubArr = 1,
    lengthOfCurrentSubArr = 1,
    n = arr.length,
    maxIndex = 0,
    subArr = [];
  for (var i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) lengthOfCurrentSubArr++;
    else {
      if (maxLenghtOfSubArr < lengthOfCurrentSubArr) {
        maxLenghtOfSubArr = lengthOfCurrentSubArr;
        maxIndex = i - maxLenghtOfSubArr;
      }
      lengthOfCurrentSubArr = 1;
    }
  }
  if (maxLenghtOfSubArr < lengthOfCurrentSubArr) {
    maxLenghtOfSubArr = lengthOfCurrentSubArr;
    maxIndex = n - maxLenghtOfSubArr;
  }
  for (var i = maxIndex; i < maxLenghtOfSubArr + maxIndex; i++)
    subArr.push(arr[i]);
  console.log("En uzun subArray: ", subArr);
}
