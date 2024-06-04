// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// My Solution
function invert(array) {
  return array.map(n => -n);
}

// Without Map
function invert(array) {
  var newArr = [];
  for(var i = 0; i < array.length; i++){
    newArr.push(-array[i]);
  }
   return newArr;
}