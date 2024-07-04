// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.
// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// My Solution
function calculator(a, b, sign) {
  if (isNaN(a + b)) return "unknown value";
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "unknown value";
  }
}

// Another Solution
function calculator(x, y, sign) {
  var fnMap = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  if (isNaN(x) || isNaN(y) || !fnMap[sign]) {
    return "unknown value";
  }
  return fnMap[sign](x, y);
}
