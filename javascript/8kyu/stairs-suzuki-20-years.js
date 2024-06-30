// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// My Solution
function stairsIn20(s) {
  let result = 0;
  s.forEach((day) => {
    result += day.reduce((acc, n) => acc + n, 0);
  });
  return result * 20;
}

// Another solution
function stairsIn20(a) {
  return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}
