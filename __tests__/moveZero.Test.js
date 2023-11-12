const {moveZeros} = require("../moveZeros.js")

describe('MoveZeros', () => {
    test("return an empty array with an empty input", () =>{
        const expected = []
        const actual = moveZeros()
        expect(actual).toEqual(expected)
    })
    test("return single number with single input", () =>{
        const expected = [3]
        const actual = moveZeros([3])
        expect(actual).toEqual(expected)
    })
    test("return zero at end of array with 2 digit input", () =>{
        const expected = [3,0]
        const actual = moveZeros([0,3])
        expect(actual).toEqual(expected)
    })
    test("Codewars test", () =>{
        const expected = [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
    const actual = moveZeros([1,2,0,1,0,1,0,3,0,1])
    expect(actual).toEqual(expected)
    })
    test("Codewars example", () =>{
        const expected = [false,1,1,2,1,3,"a",0,0]
    const actual = moveZeros([false,1,0,1,2,0,1,3,"a"])
    expect(actual).toEqual(expected)
    })
    
});


