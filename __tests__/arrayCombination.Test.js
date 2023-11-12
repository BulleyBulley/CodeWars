const { solve } = require("../arrayCombinations");

describe("should return the number of unique arrays that can be formed by picking exactly one element from each subarray.", () => {
  test("should return 1 for a single digit array", () => {
    const expected = 1;
    const actual = solve([3]);
    expect(actual).toEqual(expected);
  });
  test("should return 1 for two single digit arrays", () => {
    const expected = 1;
    const actual = solve([[2],[3]]);
    expect(actual).toEqual(expected);
  });
  test("should return for multiple digit, multiple arrays", () => {
    const expected = 4;
    const actual = solve([[1,2],[4],[5,6]]);
    expect(actual).toEqual(expected);
  });
});
