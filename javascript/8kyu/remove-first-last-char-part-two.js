// This is a spin off of my first kata.
// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// My Solution
function array(string) {
  let arr = string.split(",");
  if (arr.length < 3) return null;
  return arr.slice(1, arr.length - 1).join(" ");
}

// Another Solution (I didn't realize slice could use negative index)
function array(string) {
  return string.split(",").slice(1, -1).join(" ") || null;
}
