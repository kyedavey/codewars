// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// My Solution
function peopleWithAgeDrink(old) {
  switch (true) {
    case old < 14:
      return "drink toddy";
    case old < 18:
      return "drink coke";
    case old < 21:
      return "drink beer";
    default:
      return "drink whisky";
  }
}

// Ternaries
const peopleWithAgeDrink = (age) =>
  age < 14
    ? "drink toddy"
    : age < 18
    ? "drink coke"
    : age < 21
    ? "drink beer"
    : "drink whisky";

// IF
var peopleWithAgeDrink = function (old) {
  if (old >= 21) return "drink whisky";
  if (old >= 18) return "drink beer";
  if (old >= 14) return "drink coke";
  return "drink toddy";
};
