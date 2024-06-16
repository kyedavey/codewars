// Create a method to see whether the string is ALL CAPS.

// My Solution
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

// Another Solution
String.prototype.isUpperCase = function () {
  return this.toUpperCase() === this.toString();
};
