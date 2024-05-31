// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// My Solution

function boolToWord(bool){
  return bool ? 'Yes' : 'No';
}

// Using If Else

function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}

// Using Arrow Function

const boolToWord = bool => bool ? 'Yes' : 'No';