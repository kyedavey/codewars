// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// My Solution
function getNumberFromString(s) {
  return Number(s.replaceAll(/[^0-9]/g, ""));
}

// Another Solution
function getNumberFromString(s) {
  return +s.replace(/\D/g, "");
}
