// Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

// My Solution
function sameCase(a, b) {
  if (!a.match(/^[A-Za-z]$/) || !b.match(/^[A-Za-z]$/)) {
    return -1;
  } else if (
    (a.match(/^[A-Z]$/) && b.match(/^[A-Z]$/)) ||
    (a.match(/^[a-z]$/) && b.match(/^[a-z]$/))
  ) {
    return 1;
  } else {
    return 0;
  }
}
