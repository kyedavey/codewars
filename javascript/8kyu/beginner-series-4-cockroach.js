// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// My Solution
function cockroachSpeed(s) {
  return parseInt((s / 3600) * 100000);
}
