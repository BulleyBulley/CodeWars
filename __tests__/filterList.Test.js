const {filterList} = require("../filterList.js");

describe("should take a list of non-negative integers and strings and return a new list with the strings filtered out", () => {
  test("for single non negative integer input should return back a single non-negative integer", () => {
    const expected = [2];
    const actual = filterList([2]);
    expect (actual).toEqual(expected);
  });
  test("for multiple non negative integer input should return back a multiple non-negative integer", () => {
    const expected = [2,4];
    const actual = filterList([2,4]);
    expect (actual).toEqual(expected);
  });
  test("for input including a string, should filter out string and return integers", () => {
    const expected = [1,2];
    const actual = filterList([1,2,'a','b']);
    expect (actual).toEqual(expected);
  });
  test("for input including a string, should filter out string and return integers", () => {
    const expected = [1,0,15];
    const actual = filterList([1,'a','b',0,15]);
    expect (actual).toEqual(expected);
  });
  test("for input including a string, should filter out string and return integers", () => {
    const expected = [1,2,123];
    const actual = filterList([1,2,'aasf','1','123',123]);
    expect (actual).toEqual(expected);
  });
});
