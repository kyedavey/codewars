// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// My Solution
function findMissingLetter(array) {
  array.sort();
  for (let i = 1, charCode = array[0].charCodeAt(0); i < array.length; i++) {
    charCode++;
    if (array[i].charCodeAt(0) !== charCode) {
      return String.fromCharCode(charCode);
    }
  }
}
