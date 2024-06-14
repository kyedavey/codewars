// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// My Solution
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}

// Another Solution
function firstNonConsecutive(arr) {
  let result = arr.find((val, index) => val !== index + arr[0]);
  return Number.isInteger(result) ? result : null;
}
