// Can you implement a function that will return number of words in a string?
// You have to ensure that spaces in string is a whitespace for real.

// My Solution
function countWords(str) {
  return str.split(/\s+/).filter((word) => word).length;
}

// Another Solution
function countWords(str) {
  return (str.match(/[^\s]+/g) || []).length;
}
