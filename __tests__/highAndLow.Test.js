const {highAndLow} = require("../highAndLow")

  describe('high and low', () => { 
    test('example', () => { 
        const expected = "42 -9"
        const actual = highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
        expect(actual).toEqual(expected);
    })
    test('example', () => { 
        const expected = "3 1"
        const actual = highAndLow("1 2 3")
        expect(actual).toEqual(expected);
    })
})