function queueTime(customers, n) {
  var currentQueues = Array(n).fill(0);
  var longestQueue = 0;

  for (let index = 0; index < Math.min(n, customers.length); index++) {
    currentQueues[index] = customers[index];
    if (customers[index] > longestQueue) {
      longestQueue = customers[index];
    }
  }

  for (let i = n; i < customers.length; i++) {
    const shortestQueue = currentQueues.indexOf(Math.min(...currentQueues));
    currentQueues[shortestQueue] += customers[i];
    if (currentQueues[shortestQueue] > longestQueue) {
      longestQueue = currentQueues[shortestQueue];
    }
  }

  return longestQueue;
}

module.exports = { queueTime };
