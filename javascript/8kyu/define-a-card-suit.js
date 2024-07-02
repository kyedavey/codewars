// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// My Solution
function defineSuit(card) {
  const suits = {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  };
  return suits[card[card.length - 1]];
}
