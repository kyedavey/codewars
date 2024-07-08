// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// My Solution
function numberToPower(number, power) {
  let result = 1;
  for (let n = 1; n <= power; n++) {
    result *= number;
  }
  return result;
}

// Recursive Solution
function numberToPower(number, power) {
  if (power === 0) return 1;
  return number * numberToPower(number, power - 1);
}
