const { cycle } = require("../cycleAListOfValues");

describe("returns the value next to current value in the specified direction.", () => {
    test("should return the same value for single input", () => {
        const expected = 1;
        const actual = cycle(-1, [1]);
        expect(actual).toEqual(expected);
      });
      test("Given the direction 1, returns the value next to 1 on the right", () => {
        const expected = 2;
        const actual = cycle(1, [1,2,3], 1) ;
        expect(actual).toEqual(expected);
      });
      test("Given the direction -1 and value 1, wraps around list returning the last element", () => {
        const expected = 3;
        const actual = cycle(-1, [1,2,3], 1) ;
        expect(actual).toEqual(expected);
      });
  test("gets the next value to the left", () => {
    const expected = 1;
    const actual = cycle(-1, [1, 2, 3], 2);
    expect(actual).toEqual(expected);
  });
  test("returns null if value is not in the list", () => {
    const expected = null;
    const actual = cycle(1, [1, 2, 3], 4);
    expect(actual).toEqual(expected);
  });
});
