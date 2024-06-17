// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

// My Solution
function expressionMatter(a, b, c) {
  const results = [a * b * c, a * (b + c), a + b * c, (a + b) * c, a + b + c];
  return Math.max(...results);
}
