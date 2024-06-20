// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

// My Solution
function noBoringZeros(n) {
  return Number(n.toString().replace(/0+$/, ""));
}
