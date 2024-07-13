// Create a method all which takes two params:
// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// My Solution
function all(arr, fun) {
  return arr.every((e) => fun(e));
}

// Can be simplified to
function all(arr, fun) {
  return arr.every(fun);
}
