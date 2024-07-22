// Your task is to create userlinks for the url, you will be given a username and must return a valid link.

// My Solution
function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}
