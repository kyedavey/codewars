// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// My Solution
var uniqueInOrder = function (iterable) {
  if (typeof iterable === "string") iterable = iterable.split("");
  return iterable.filter((element, index) => element !== iterable[index + 1]);
};
