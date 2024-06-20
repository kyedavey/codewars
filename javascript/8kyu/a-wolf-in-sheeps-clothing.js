// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// My Solution
function warnTheSheep(queue) {
  const wolf = queue.indexOf("wolf");
  if (wolf === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  }
  return `Oi! Sheep number ${
    queue.length - wolf - 1
  }! You are about to be eaten by a wolf!`;
}

// Another Solution
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}
