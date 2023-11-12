function findSenior(list) {
  var maxAge = 0;
  list.forEach((element) => {
    if (element.age > maxAge) {
      maxAge = element.age;
    }
  });
  const filtered = list.filter((developer) => developer.age === maxAge);
  return filtered;
}

module.exports = { findSenior };
