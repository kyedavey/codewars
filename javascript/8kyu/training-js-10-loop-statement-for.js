// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.
// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

// My Solution
function pickIt(arr) {
  var odd = [],
    even = [];
  for (const n of arr) {
    n % 2 === 0 ? even.push(n) : odd.push(n);
  }

  return [odd, even];
}

// Another Solution
function pickIt(arr) {
  let odd = [];
  let even = [];

  for (var x of arr) {
    (x % 2 ? odd : even).push(x);
  }

  return [odd, even];
}
