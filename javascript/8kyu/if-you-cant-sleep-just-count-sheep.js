// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// My Solution
var countSheep = function (num) {
  let string = "";
  for (let i = 0; i < num; i++) {
    string += `${i + 1} sheep...`;
  }
  return string;
};

// Using spread and array methods. Harder to read
countSheep = (n) => [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``;
