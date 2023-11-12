function sumIntervals(intervals) {
    //Write a function called sumIntervals/sum_intervals that accepts an array of intervals, 
    //and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  let totalSum = 0;
  let currentStart = intervals[0][0];
  let currentEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (start <= currentEnd) {
      // Overlapping interval, update the currentEnd if needed
      currentEnd = Math.max(currentEnd, end);
    } else {
      // Non-overlapping interval, add its length to the total sum
      totalSum += currentEnd - currentStart;
      currentStart = start;
      currentEnd = end;
    }
  }

  // Add the length of the last interval to the total sum
  totalSum += currentEnd - currentStart;

  return totalSum;
  }

  module.exports = {sumIntervals}