// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

// My Solution
var humanYearsCatYearsDogYears = function (humanYears) {
  return [
    humanYears,
    15 + (humanYears > 1 ? 9 + 4 * (humanYears - 2) : 0),
    15 + (humanYears > 1 ? 9 + 5 * (humanYears - 2) : 0),
  ];
};

// Another Solution
var humanYearsCatYearsDogYears = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};
