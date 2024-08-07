// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// My Solution
function mango(quantity, price) {
  return quantity * price - price * Math.floor(quantity / 3);
}

// Another Solution
function mango(quantity, price) {
  return price * (quantity - Math.floor(quantity / 3));
}
