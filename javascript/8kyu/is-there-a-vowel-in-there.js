// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

// My Solution
function isVow(a) {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelCharCodes = vowels.map((c) => c.charCodeAt(0));
  return a.map((e) =>
    vowelCharCodes.includes(e) ? String.fromCharCode(e) : e
  );
}

// Another Solution
const isVow = (a) =>
  a.map((x) => ("aeiou".includes((y = String.fromCharCode(x))) ? y : x));

// Another Solution
const v = { 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" };
const isVow = (a) => a.map((x) => v[x] || x);
