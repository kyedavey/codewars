// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// My Solution
function sortArray(array) {
  const oddsSorted = array.filter((n) => n % 2).sort((a, b) => a - b);
  return array.map((n) => (n % 2 ? oddsSorted.shift() : n));
}
