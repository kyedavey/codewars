// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// My Solution
function duplicateEncode(word) {
  const duplicates = new Set();
  const seen = new Set();

  for (const c of word.toLowerCase()) {
    if (seen.has(c)) {
      duplicates.add(c);
    } else {
      seen.add(c);
    }
  }

  return word
    .split("")
    .map((c) => (duplicates.has(c.toLowerCase()) ? ")" : "("))
    .join("");
}

// Another Solution
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
