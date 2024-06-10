// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// My Solution
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// Other Solutions
var min2 = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max2 = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};
