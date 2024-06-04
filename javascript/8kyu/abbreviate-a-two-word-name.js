// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// My Solution
function abbrevName(name){
  const names = name.toUpperCase().split(' ');
  return `${names[0][0]}.${names[1][0]}`;
}

// With map and join
function abbrevName(name){
  return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

// Regex
const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()