// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

// My Solution
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .split("")
    .map((c) => c.charCodeAt(0) - 64)
    .filter((i) => i > 0 && i < 27)
    .join(" ");
}

// Another Solution
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + " ";
  }

  return result.slice(0, result.length - 1);
}
