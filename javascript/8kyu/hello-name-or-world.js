// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// My Solution
function hello(name) {
  if (!name) return "Hello, World!";
  name = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello, ${name}!`;
}
