// Let's play! You have to return which player won! In case of a draw return Draw!.

// My Solution
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (p1 === "rock") {
    if (p2 === "paper") {
      return "Player 2 won!";
    } else if (p2 === "scissors") {
      return "Player 1 won!";
    }
  } else if (p1 === "paper") {
    if (p2 === "rock") {
      return "Player 1 won!";
    } else if (p2 === "scissors") {
      return "Player 2 won!";
    }
  } else {
    if (p2 === "rock") {
      return "Player 2 won!";
    } else if (p2 === "paper") {
      return "Player 1 won!";
    }
  }
};

// Using an object for comparisions
const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

// Check all p1 winning comparision else p2 wins
const rps3 = (p1, p2) => {
  if (p1 == p2) return "Draw!";

  if (p1 == "rock" && p2 == "scissors") return "Player 1 won!";
  else if (p1 == "scissors" && p2 == "paper") return "Player 1 won!";
  else if (p1 == "paper" && p2 == "rock") return "Player 1 won!";
  else return "Player 2 won!";
};
