function sumStrings(a, b) {
  if (a == null && b == null) {
    return "0";
  }

  return (BigInt(a) + BigInt(b)).toString();
}

module.exports = { sumStrings };
