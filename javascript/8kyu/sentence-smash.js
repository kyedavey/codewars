// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// My Solution
function smash(words) {
  return words.join(" ");
}

// Arrow Function Expression
const smash = (words) => words.join(" ");

// Without array methods
function smash(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (i == 0) {
      //this is made so there is no space at start
      result = result + words[i];
    } else {
      result = result + " " + words[i];
    }
  }
  return result;
}
