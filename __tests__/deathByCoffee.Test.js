const {coffeeLimits, convertToHex, convertHexToDec} = require("../deathByCoffee");

describe("Given the test subject's date of birth, return an array describing their life-time coffee limits", () => {
  test("John", () => {
    var y = 1950,
      m = 1,
      d = 19;
    const expected = [2645, 1162];
    const actual = coffeeLimits(y, m, d);
    expect(actual).toEqual(expected);
  });
  test("Susan", () => {
    var y = 1965,
      m = 12,
      d = 11;
    const expected = [111,0];
    const actual = coffeeLimits(y, m, d);
    expect(actual).toEqual(expected);
  });
  test("Peter", () => {
    var y = 1965,
      m = 9,
      d = 4;
    const expected = [0,0];
    const actual = coffeeLimits(y, m, d);
    expect(actual).toEqual(expected);
  });
});

describe('convert number to hex', () => { 
    test('convert a number to hex', () => { 
        const expected = '1'
        const actual = convertToHex(1)
        expect(actual).toEqual(expected) 
    }) 
    test('convert a number to hex', () => { 
        const expected = 'a'
        const actual = convertToHex(10)
        expect(actual).toEqual(expected) 
    }) 
    test('convert a number to hex', () => { 
        const expected = '1dc1a7'
        const actual = convertToHex(1950119)
        expect(actual).toEqual(expected) 
    })
    test('convert hex to number', () => { 
        const expected = 10
        const actual = convertHexToDec('a')
        expect(actual).toEqual(expected) 
    })
    test('convert hex to number', () => { 
        const expected = 51966
        const actual = convertHexToDec('cafe')
        expect(actual).toEqual(expected) 
    })
})
