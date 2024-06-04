// Write a function which calculates the average of the numbers in a given list.

// My Solution
function findAverage(array) {
  return array.length === 0 ? 0 : array.reduce((acc, n) => acc + n, 0) / array.length;
}

// Without Reduce
function find_average(array) {
  if (array.length === 0) {
  return 0;
  }
  var result = 0;
  for (i=0; i<array.length; i++) {
    result +=array[i];
  }
  return result/array.length;
}