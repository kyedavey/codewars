// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// My Solution
function remove(s, n) {
  while (n) {
    let temp = s.replace("!", "");
    if (s === temp) return s;
    s = temp;
    n--;
  }
  return s;
}

// Another Solution (Loop continues for n even when all ! have been removed)
function remove(s, n) {
  for (var i = 0; i < n; i++) s = s.replace("!", "");
  return s;
}

// Another (same issue as above)
function remove(s, n) {
  while (n) {
    s = s.replace("!", "");
    n--;
  }
  return s;
}
