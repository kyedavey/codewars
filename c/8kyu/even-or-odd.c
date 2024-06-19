// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My Solution
const char* even_or_odd(int number)
{
  return (number % 2) ? "Odd" : "Even";
}

// Bitwise AND
const char * even_or_odd(int n)
{
  return (n & 1)?("Odd"):("Even");
}