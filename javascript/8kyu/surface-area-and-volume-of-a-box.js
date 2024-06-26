// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My Solution
function getSize(width, height, depth) {
  const area = 2 * width * height + 2 * width * depth + 2 * height * depth;
  const volume = width * height * depth;
  return [area, volume];
}
