// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// My Solution
function isIsogram(str) {
  const seen = [];
  for (const c of str.toLowerCase()) {
    if (seen.includes(c)) return false;
    seen.push(c);
  }
  return true;
}

// Other Solutions
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}
