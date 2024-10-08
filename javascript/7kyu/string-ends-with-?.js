// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// My Solution
function solution(str, ending) {
  return str.slice(-ending.length || str.length) === ending;
}

// Another Solution (String.endsWith())
function solution(str, ending) {
  return str.endsWith(ending);
}
