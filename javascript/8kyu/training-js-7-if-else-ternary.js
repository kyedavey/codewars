// My Solution
function saleHotdogs(n) {
  if (n < 5) return n * 100;
  if (n < 10) return n * 95;
  return n * 90;
}

// Ternary
function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}
