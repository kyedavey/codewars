// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// My Solution
function towerBuilder(nFloors) {
  const tower = [];

  for (let i = 1; i <= nFloors; i++) {
    const space = " ".repeat(nFloors - i);
    const star = "*".repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }

  return tower;
}
