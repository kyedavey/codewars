// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// My Solution
function bmi(weight, height) {
  const bmi = weight / height ** 2;
  switch (true) {
    case bmi <= 18.5:
      return "Underweight";
    case bmi <= 25.0:
      return "Normal";
    case bmi <= 30.0:
      return "Overweight";
    default:
      return "Obese";
  }
}

// If
function bmi(weight, height) {
  const result = weight / Math.pow(height, 2);

  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Ternary
function bmi(weight, height) {
  const bmi = weight / (height * height);

  return bmi < 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
}
