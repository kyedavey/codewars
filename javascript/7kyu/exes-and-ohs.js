// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// My Solution
function XO(str) {
  return [...str.matchAll(/x/gi)].length === [...str.matchAll(/o/gi)].length;
}

// Another Solution
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
