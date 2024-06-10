// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// My Solution
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, n) => acc + n, 0);
}

// Spread
function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}
