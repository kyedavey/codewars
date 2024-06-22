// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.

// My Solution
function distinct(a) {
  let result = [];
  for (const e of a) {
    if (!result.includes(e)) {
      result.push(e);
    }
  }
  return result;
}

// Another Solution
function distinct(a) {
  return [...new Set(a)];
}

// Another
const distinct = (a) => a.filter((item, index) => a.indexOf(item) === index);
