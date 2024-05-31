// We need a function that can transform a number (integer) into a string.

// My Solution

function numberToString(num) {
  return num.toString();
}

// Using Arrow Function

const numberToString = num => num.toString();

// Using Template Literal

const numberToString = num => `${num}`;