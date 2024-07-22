// Create a function that takes a number as an argument and returns a grade based on that number.

// My Solution
function grader(score) {
  switch (true) {
    case score > 1:
      return "F";
    case score >= 0.9:
      return "A";
    case score >= 0.8:
      return "B";
    case score >= 0.7:
      return "C";
    case score >= 0.6:
      return "D";
    default:
      return "F";
  }
}
