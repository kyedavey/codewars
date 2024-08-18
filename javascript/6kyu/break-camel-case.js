// Complete the solution so that the function will break up camel casing, using a space between words.

// My Solution
function solution(string) {
  let result = "";
  for (const char of string) {
    if (char === char.toUpperCase()) result += " ";
    result += char;
  }
  return result;
}

// REGEX Solution
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}
