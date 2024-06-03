// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// My Solution
function countSheeps(sheep) {
  return sheep.filter((i) => i).length;
}

// Using Boolean constructor
function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}
