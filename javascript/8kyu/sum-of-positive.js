// You get an array of numbers, return the sum of all of the positives ones.

// My Solution

function positiveSum(arr) {
  return arr
    .filter((n) => n > 0)
    .reduce((acc, n) => acc + n, 0);
}

// In Single Line Arrow Function Expression

const positiveSum = (arr) => arr.filter((n) => n > 0).reduce((acc, n) => acc + n, 0);

// Without Array Methods

function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}

// Reduce & Ternary

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

