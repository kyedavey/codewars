// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My Solution
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// Another
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

// Without Ternary
function simpleMultiplication(value) {
  if (value % 2 === 0) {
    return value * 8;
  } else {
    return value * 9;
  }
}
