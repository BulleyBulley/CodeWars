function highAndLow(numbers) {
  var nums = numbers.split(" ").map(function (str) {
    return parseInt(str);
  });

  var lowestNumber = Math.min(...nums);
  var highestNumber = Math.max(...nums);

  return `${highestNumber} ${lowestNumber}`;
}

module.exports = { highAndLow };
