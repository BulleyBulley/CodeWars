const {
  isInteresting,
  digitIsFollowedByAllZeros,
  everyDigitIsTheSameNumber,
  digitsAreSequential,
  digitsAreDecrementing,
  digitsAreAPalindrome,
  doDigitsMatchAwesomePhrase
} = require("../catchingCarMileageNumbers");

describe("digit is followed by all zeros", function () {
  it("returns true if followed by all zeros", function () {
    const expected = true;
    const actual = digitIsFollowedByAllZeros(100);
    expect(actual).toEqual(expected);
  });
  it("returns true if followed by all zeros", function () {
    const expected = true;
    const actual = digitIsFollowedByAllZeros(90000);
    expect(actual).toEqual(expected);
  });
  it("returns false if not followed by all zeros", function () {
    const expected = false;
    const actual = digitIsFollowedByAllZeros(90001);
    expect(actual).toEqual(expected);
  });
  it("returns false if not followed by all zeros", function () {
    const expected = false;
    const actual = digitIsFollowedByAllZeros(110);
    expect(actual).toEqual(expected);
  });
});

describe("Every digit is the same number", function () {
  it("returns true if all digits are the same", function () {
    const expected = true;
    const actual = everyDigitIsTheSameNumber(111);
    expect(actual).toEqual(expected);
  });
  it("returns true if all digits are the same", function () {
    const expected = true;
    const actual = everyDigitIsTheSameNumber(9999999);
    expect(actual).toEqual(expected);
  });
  it("returns false if digits are different", function () {
    const expected = false;
    const actual = everyDigitIsTheSameNumber(12377);
    expect(actual).toEqual(expected);
  });
  it("returns false if digits are different", function () {
    const expected = false;
    const actual = everyDigitIsTheSameNumber(333334);
    expect(actual).toEqual(expected);
  });
});

describe("Digits are sequential", function () {
  it("returns true if digits are sequential", function () {
    const expected = true;
    const actual = digitsAreSequential(1234);
    expect(actual).toEqual(expected);
  });
  it("returns true if digits are sequential", function () {
    const expected = true;
    const actual = digitsAreSequential(456789);
    expect(actual).toEqual(expected);
  });
  it("returns true if digits are sequential with 0 coming above 9", function () {
    const expected = true;
    const actual = digitsAreSequential(4567890);
    expect(actual).toEqual(expected);
  });
  it("returns false if digits are not sequential", function () {
    const expected = false;
    const actual = digitsAreSequential(12377);
    expect(actual).toEqual(expected);
  });
  it("returns false if digits are not sequential", function () {
    const expected = false;
    const actual = digitsAreSequential(333334);
    expect(actual).toEqual(expected);
  });
});

describe("Digits are decrementing", function () {
  it("returns true if digits are decrementing", function () {
    const expected = true;
    const actual = digitsAreDecrementing(4321);
    expect(actual).toEqual(expected);
  });
  it("returns true if digits are decrementing", function () {
    const expected = true;
    const actual = digitsAreDecrementing(98765432);
    expect(actual).toEqual(expected);
  });
  it("returns true if digits are decrementing with 0 coming below 1", function () {
    const expected = true;
    const actual = digitsAreDecrementing(543210);
    expect(actual).toEqual(expected);
  });
  it("returns false if digits are not decrementing", function () {
    const expected = false;
    const actual = digitsAreDecrementing(12377);
    expect(actual).toEqual(expected);
  });
  it("returns false if digits are not decrementing", function () {
    const expected = false;
    const actual = digitsAreDecrementing(333334);
    expect(actual).toEqual(expected);
  });
});

describe("Digits are a palindrome", function () {
  it("returns true if digits are a palindrome", function () {
    const expected = true;
    const actual = digitsAreAPalindrome(1221);
    expect(actual).toEqual(expected);
  });
  it("returns true if digits are a palindrome", function () {
    const expected = true;
    const actual = digitsAreAPalindrome(73837);
    expect(actual).toEqual(expected);
  });
  it("returns false if digits are not a palindrome", function () {
    const expected = false;
    const actual = digitsAreAPalindrome(12377);
    expect(actual).toEqual(expected);
  });
  it("returns false if digits are not a palindrome", function () {
    const expected = false;
    const actual = digitsAreAPalindrome(333334);
    expect(actual).toEqual(expected);
  });
});

describe("Digits match awesome phrase", function () {
  it("returns true if digits match awesome phrase", function () {
    const expected = true;
    const actual = doDigitsMatchAwesomePhrase(1324, [1324, 256]);
    expect(actual).toEqual(expected);
  });
  it("returns true if digits match awesome phrase", function () {
    const expected = true;
    const actual = doDigitsMatchAwesomePhrase(46464646,[46464646, 256]);
    expect(actual).toEqual(expected);
  });
  it("returns false if digits do not match an awesome phrase", function () {
    const expected = false;
    const actual = doDigitsMatchAwesomePhrase(123, [46464646, 256]);
    expect(actual).toEqual(expected);
  });
  it("returns false if digits do not match an awesome phrase", function () {
    const expected = false;
    const actual = doDigitsMatchAwesomePhrase(333, [46464646, 256]);
    expect(actual).toEqual(expected);
  });
});

describe('Basic inputs', function() {
  it('should work, dangit!', function() {
    expect(isInteresting(3, [1337, 256])).toEqual(0)
    expect(isInteresting(1336, [1337, 256])).toEqual(1)
    expect(isInteresting(1337, [1337, 256])).toEqual(2)
    expect(isInteresting(11208, [1337, 256])).toEqual(0)
    expect(isInteresting(11209, [1337, 256])).toEqual(1)
    expect(isInteresting(11211, [1337, 256])).toEqual(2)
  });
});
