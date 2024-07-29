// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// My Solution
function duplicateCount(text) {
  const duplicates = new Set();
  const seen = new Set();

  for (const c of text.toLowerCase()) {
    if (seen.has(c)) {
      duplicates.add(c);
    } else {
      seen.add(c);
    }
  }

  return duplicates.size;
}

// Another Solution
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}
