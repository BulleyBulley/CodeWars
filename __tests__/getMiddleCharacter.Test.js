const {getMiddle} = require("../getMiddleCharacter");

describe("should get the Middle character of a string", () => {
  test("should return the input for a single letter", () => {
    const expected = "a";
    const actual = getMiddle("a");
    expect(actual).toEqual(expected);
  });
  test("should return the middle character for an odd numbered length string", () => {
    const expected = "t";
    const actual = getMiddle("testing");
    expect(actual).toEqual(expected);
  });
  test("should return the middle two characters for an even numbered length string", () => {
    const expected = "es";
    const actual = getMiddle("test");
    expect(actual).toEqual(expected);
  });
  test("should return the middle two characters for an even numbered length string", () => {
    const expected = "dd";
    const actual = getMiddle("middle");
    expect(actual).toEqual(expected);
  });
});
