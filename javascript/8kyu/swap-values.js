// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.
// Can you figure out what's wrong here?

// My Solution
function swapValues(arr) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
}
