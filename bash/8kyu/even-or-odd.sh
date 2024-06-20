# Write a script that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

# My Solution
if (($1 % 2 == 0))
then
  echo "Even"
else
  echo "Odd"
fi

# Modulo
(($1 % 2 == 0)) && echo "Even" || echo "Odd"
(( $1 & 1 )) && echo "Odd" || echo "Even"