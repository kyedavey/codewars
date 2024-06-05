// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// My Solution
function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}

// Another solution
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}