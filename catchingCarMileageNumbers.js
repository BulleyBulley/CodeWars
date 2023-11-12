function isInteresting(number, awesomePhrases) {
  const checkNumber = (n) => {
    return (
      digitIsFollowedByAllZeros(n) ||
      everyDigitIsTheSameNumber(n) ||
      digitsAreSequential(n) ||
      digitsAreDecrementing(n) ||
      digitsAreAPalindrome(n) ||
      doDigitsMatchAwesomePhrase(n, awesomePhrases)
    );
  };

  for (let i = 0; i <= 2; i++) {
    if (number + i <= 99) {
      continue;
    }
    if (checkNumber(number + i)) {
      return i === 0 ? 2 : 1;
    }
  }

  return 0;
}


const convertNumberToArray = (number) => {
  // Convert the number to a string to work with its digits
  const numberStr = number.toString();
  // Create an array of the digits
  const digits = numberStr.split("").map(Number);
  return digits;
};

function digitIsFollowedByAllZeros(number) {
  const digits = convertNumberToArray(number);
  const slicedDigits = digits.slice(1);
  const allZeroes = slicedDigits.every((digit) => digit === 0);
  return allZeroes;
}

function everyDigitIsTheSameNumber(number) {
  const digits = convertNumberToArray(number);
  const firstDigit = digits[0];
  const allSame = digits.every((digit) => digit === firstDigit);
  return allSame;
}

function digitsAreSequential(number) {
  const digits = convertNumberToArray(number);
  var firstDigit = digits[0];
  var sequence = [];

  //create a sequence using the first digit as a starting point
  for (let index = 0; index < digits.length; index++) {
    const value = firstDigit;
    if (firstDigit === 9) {
      firstDigit = 0;
    } else {
      firstDigit++;
    }
    sequence.push(value);
  }
  //compare the arrays
  return sequence.every((element, index) => element === digits[index]);
}

function digitsAreDecrementing(number) {
  const digits = convertNumberToArray(number);
  var firstDigit = digits[0];
  var sequence = [];

  //create a sequence using the first digit as a starting point
  for (let index = 0; index < digits.length; index++) {
    const value = firstDigit;
    if (firstDigit === 1) {
      firstDigit = 0;
    } else {
      firstDigit--;
    }
    sequence.push(value);
  }
  //compare the arrays
  return sequence.every((element, index) => element === digits[index]);
}

function digitsAreAPalindrome(number) {
  const numStr = number.toString();
  const reversedStr = numStr.split("").reverse().join("");
  return numStr === reversedStr;
}

function doDigitsMatchAwesomePhrase(number, awesomePhrases) {
  var match = false;
  awesomePhrases.forEach((phrase) => {
    if (phrase === number) match = true;
  });
  return match;
}

module.exports = {
  digitIsFollowedByAllZeros,
  everyDigitIsTheSameNumber,
  isInteresting,
  digitsAreSequential,
  digitsAreDecrementing,
  digitsAreAPalindrome,
  doDigitsMatchAwesomePhrase,
};
