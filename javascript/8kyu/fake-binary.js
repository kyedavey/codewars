// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// My Solution
function fakeBin(x) {
  return x
    .split("")
    .map((i) => (Number(i) < 5 ? "0" : "1"))
    .join("");
}

// Another
function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}

// Loop
function fakeBin(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 5) {
      newStr += "1";
    } else {
      newStr += "0";
    }
  }
  return newStr;
}
