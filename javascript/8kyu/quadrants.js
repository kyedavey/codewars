// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// My Solution
function quadrant(x, y) {
  if (x > 0) {
    if (y > 0) {
      return 1;
    }
    return 4;
  }
  if (y > 0) {
    return 2;
  }
  return 3;
}
