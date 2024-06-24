// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// My Solution
function multipleOfIndex(array) {
  return array.filter((n, i) => n % i === 0 || n === 0);
}
