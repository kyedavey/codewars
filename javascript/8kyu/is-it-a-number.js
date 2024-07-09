// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// My Solution
function isDigit(s) {
  return s == parseFloat(s);
}
