// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

// My Solution
function howManydays(month) {
  var days;
  switch (month) {
    case 2:
      days = 28;
      break;
    case 9:
    case 4:
    case 6:
    case 11:
      days = 30;
      break;
    default:
      days = 31;
  }
  return days;
}
