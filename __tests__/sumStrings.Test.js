const {sumStrings} = require("../sumStrings")

describe('sumStrings', () => { 
    test('should return string of 0 with no input', () => { 
        const expected = '0'
        const actual = sumStrings()
        expect(actual).toEqual(expected);
    }) 
    test('codeWars example', () => { 
        const expected = '3'
        const actual = sumStrings('1','2')
        expect(actual).toEqual(expected);
    })
    test('codeWars test', () => { 
        const expected = '579'
        const actual = sumStrings('123','456')
        expect(actual).toEqual(expected);
    }) 
    test('codeWars test 2', () => { 
        const expected = '712577413488402631964821329'
        const actual = sumStrings('712569312664357328695151392', '8100824045303269669937')
        expect(actual).toEqual(expected);
    })
})