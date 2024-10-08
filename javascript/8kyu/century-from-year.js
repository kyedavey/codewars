// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.

// My Solution
function century(year) {
  return Math.ceil(year / 100);
}

// Without Math.ceil
const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;