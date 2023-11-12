const { inAscOrder } = require("../inAscOrder");

describe("determine whether the numbers are in ascending order.", () => {
  test("should return true for a single number", () => {
    const expected = true;
    const actual = inAscOrder([1]);
    expect(actual).toEqual(expected);
  });
  test("should return false for a two numbers in descending order", () => {
    const expected = false;
    const actual = inAscOrder([3,1]);
    expect(actual).toEqual(expected);
  });
  test("should return true for a several numbers in ascending order", () => {
    const expected = true;
    const actual = inAscOrder([1,2,4,7,19]);
    expect(actual).toEqual(expected);
  });
  test("should return false for a several numbers not in ascending order", () => {
    const expected = false;
    const actual = inAscOrder([1,6,10,18,2,4,20]);
    expect(actual).toEqual(expected);
  });
  test("should return false for a several numbers not in ascending order", () => {
    const expected = false;
    const actual = inAscOrder([9,8,7,6,5,4,3,2,1]);
    expect(actual).toEqual(expected);
  });
});
