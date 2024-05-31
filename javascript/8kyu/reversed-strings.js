// Complete the solution so that it reverses the string passed into it.

// My Solution

function solution(str){
  return str.split('').reverse().join('');
}

// In Single Line Arrow Function Expression

const solution = str => str.split('').reverse().join('');

// Without array methods

function solution(str){
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--)
    reversed += str[i];
  return reversed;
}