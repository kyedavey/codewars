// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// My Solution
function drawStairs(n) {
  let result = "I";
  for (let i = 1; i < n; i++) {
    result += "\n" + " ".repeat(i) + "I";
  }
  return result;
}

// Another Solution
function drawStairs(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result[i] = `${" ".repeat(i)}I`;
  }

  return result.join("\n");
}
