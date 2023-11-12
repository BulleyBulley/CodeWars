function getMiddle(s) {
  let index = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s[index - 1] + s[index];
  } else {
    return s[index];
  }
}

module.exports = {getMiddle}