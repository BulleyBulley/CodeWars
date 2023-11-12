const { splitTheBill } = require("../splitTheBill");

describe("should return an object with the same names, showing how much money the members should pay or receive", () => {
  test("should return 0 for a single user", () => {
    const expected = { A: 0 };
    const actual = splitTheBill({ A: 20 });
    expect(actual).toEqual(expected);
    
  });
  test("should return correct result for 2 users", () => {
    const expected = {A: 5, B: 0, C: -5};
    const actual = splitTheBill({A: 20, B: 15, C: 10});
    expect(actual).toEqual(expected);
  });
  test("should return correct result for 2 users", () => {
    const expected = {A: 15, B: 0, X: -15};
    const actual = splitTheBill({A: 40, B: 25, X: 10});
    expect(actual).toEqual(expected);
  });
});
