// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// My Solution
const colorsOptions = ["white", "yellow", "purple", "red"];

class Ghost {
  constructor() {
    this.color = colorsOptions[Math.floor(Math.random() * 4)];
  }
}
