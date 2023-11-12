function getPINs(observed) {
  const digitMap = {
    '1': ['1', '2', '4'],
    '2': ['1', '2', '3', '5'],
    '3': ['2', '3', '6'],
    '4': ['1', '4', '5', '7'],
    '5': ['2', '4', '5', '6', '8'],
    '6': ['3', '5', '6', '9'],
    '7': ['4', '7', '8'],
    '8': ['5', '7', '8', '9', '0'],
    '9': ['6', '8', '9'],
    '0': ['0', '8'],
  };

  function generateCombinations(observed, index) {
    if (index === observed.length) {
      return ['']; // Base case: an empty string to start building combinations
    }

    const currentDigit = observed[index];
    const nextCombinations = generateCombinations(observed, index + 1);
    const possibleDigits = digitMap[currentDigit];

    const combinations = [];

    for (const digit of possibleDigits) {
      for (const combination of nextCombinations) {
        combinations.push(digit + combination);
      }
    }

    return combinations;
  }

  return generateCombinations(observed, 0);
}


module.exports = {getPINs}