// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// My Solution
function pipeFix(numbers) {
  const result = [];
  const lowest = Math.min(...numbers);
  const highest = Math.max(...numbers);
  for (let i = lowest; i <= highest; i++) {
    result.push(i);
  }
  return result;
}

// Numbers were already sorted
function pipeFix(numbers) {
  var first = numbers[0];
  var last = numbers[numbers.length - 1];

  var arr = [];
  for (var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}
