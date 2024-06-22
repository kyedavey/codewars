// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// My Solution
function multiTable(number) {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    if (result) result += "\n";
    result += `${i} * ${number} = ${i * number}`;
  }
  return result;
}

// Another Solution
function multiTable(n) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${n} = ${n * i + n}`)
    .join("\n");
}
