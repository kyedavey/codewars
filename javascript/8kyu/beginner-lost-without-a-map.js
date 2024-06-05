// Given an array of integers, return a new array with each value doubled.

// My Solution
function maps(x) {
  return x.map((n) => n * 2);
}

// Without Map
function maps(x) {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i] * 2);
  }
  return arr;
}
