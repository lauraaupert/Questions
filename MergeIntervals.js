function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let current = intervals[0];
  let result = [];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= current[1]) {
      current = [current[0], Math.max(intervals[i][1], current[1])]
    } else {
      result.push(current);
      current = intervals[i]
    }
  }
  result.push(current);
  return result;
}