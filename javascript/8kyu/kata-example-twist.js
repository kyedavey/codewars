// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
// Add the value "codewars" to the array websites 1,000 times.

// My Solution
const websites = [];
for (let i = 0; i < 1000; i++) {
  websites.push("codewars");
}

// Another Solution
var websites2 = new Array(1000).fill("codewars");

// Another Solution
var websites3 = [];
while (websites.length < 1000) websites.push("codewars");
