// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.
// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// My Solution
function aliasGen(first, last) {
  if (!(/[A-Z]/i.test(first[0]) && /[A-Z]/i.test(last[0]))) {
    return "Your name must start with a letter from A - Z.";
  }
  return `${firstName[first[0].toUpperCase()]} ${
    surname[last[0].toUpperCase()]
  }`;
}
