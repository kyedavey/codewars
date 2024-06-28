// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// My Solution
const combineNames = (first, last) => `${first} ${last}`;

// Another Solution
const combineNames2 = (...names) => names.join(" ");
