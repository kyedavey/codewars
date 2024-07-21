// Assuming there are no other types of animals, work out how many of each animal are there.
// Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages
// If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.

// My Solution
function animals(heads, legs) {
  const cows = legs / 2 - heads;
  const chickens = heads - cows;
  return /\.|-/g.test(`${cows}${chickens}`) ? "No solutions" : [chickens, cows];
}
