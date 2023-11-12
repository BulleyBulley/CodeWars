function splitTheBill(x) {
  var total = 0;
  var members = Object.keys(x).length;
  var result = {}

  Object.keys(x).forEach(function (key) {
    total += x[key];
  });
  var average = total / members;

  Object.keys(x).forEach(function (key) {
    result[key] = Math.round((x[key] - average) * 100) / 100;
  });
  return result;
}

module.exports = { splitTheBill };
