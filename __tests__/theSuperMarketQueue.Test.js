const { queueTime } = require("../theSuperMarketQueue");

describe("should return an integer, the total time required for all customers to check out", () => {
  test("return 0 for no customers", () => {
    const expected = 0;
    const actual = queueTime([], 1);
    expect(actual).toEqual(expected);
  });
  test("return sum for a single queue", () => {
    const expected = 10;
    const actual = queueTime([1,2,3,4], 1);
    expect(actual).toEqual(expected);
  });
  test("return longest queue for a double queue", () => {
    const expected = 10;
    const actual = queueTime([10,2,3,3], 2);
    expect(actual).toEqual(expected);
  });
  test("return longest queue for a double queue", () => {
    const expected = 12;
    const actual = queueTime([2,3,10], 2);
    expect(actual).toEqual(expected);
  });
  test("return longest queue for a multiple queues", () => {
    const expected = 5;
    const actual = queueTime([1,2,3,4,5], 100);
    expect(actual).toEqual(expected);
  });
});
