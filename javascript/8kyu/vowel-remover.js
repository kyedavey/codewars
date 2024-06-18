// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// My Solution (Should have used regex flag /i to indicate case insensitive match)
function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

// Using filter
function shortcut(string) {
  return string
    .split("")
    .filter((str) => !"aeiou".includes(str))
    .join("");
}
