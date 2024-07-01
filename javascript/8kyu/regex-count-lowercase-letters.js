// Your task is simply to count the total number of lowercase letters in a string.

// My Solution
function lowercaseCount(str) {
  const matches = str.match(/[a-z]/g);
  return matches ? matches.length : 0;
}

// Another Solution
function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;
}
