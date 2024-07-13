// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

// My Solution
function isPythagoreanTriple(integers) {
  integers.sort((a, b) => a - b);
  return integers[0] ** 2 + integers[1] ** 2 === integers[2] ** 2;
}

// Another Solution
function isPythagoreanTriple(nums) {
  const [a, b, c] = nums.sort((a, b) => a - b);
  return a ** 2 + b ** 2 === c ** 2;
}
