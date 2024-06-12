// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// My Solution
function removeEveryOther(arr) {
  return arr.filter((e, i) => i % 2 === 0);
}

// Loop
function removeEveryOther(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}
