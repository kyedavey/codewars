// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// My Solution
function points(games) {
  let total = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      total += 3;
    } else if (games[i][0] === games[i][2]) {
      total += 1;
    }
  }
  return total;
}
