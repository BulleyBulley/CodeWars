function passed(list) {
  const passes = list.filter((mark) => mark <= 18);
  if (passes.length === 0) {
    return "No pass scores registered."
  }
  const average = passes.reduce((a, b) => a + b, 0) / passes.length;
  const rounded = Math.round(average)
  return rounded
}

module.exports = { passed };
