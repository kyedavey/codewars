// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly.

// My Solution
var replaceDots = function (str) {
  return str.replace(/\./g, "-");
};

// Another Solution
var replaceDots = (s) => s.split(".").join("-");
