// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// My Solution
function doubleChar(str) {
  let double = "";
  for (let i = 0; i < str.length; i++) {
    double = double + str[i] + str[i];
  }
  return double;
}

// Array Methods
const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");
