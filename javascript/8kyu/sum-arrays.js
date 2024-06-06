// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// My Solution
function sum(numbers) {
  "use strict";
  return numbers.reduce((arr, n) => arr + n, 0);
}

// Loop
sum = function (numbers) {
  "use strict";
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};
