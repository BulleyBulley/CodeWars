const {isCircleSorted, circleArray} = require("../isCircleSorted")

describe('determines if the given array of integers is circularly sorted.', () => { 
    test('should return true for a single integer', () => { 
        const expected = true;
        const actual = isCircleSorted([2])
        expect(actual).toEqual(expected);
    })
    test('should return true for an ascending array that does not need circle sorting', () => { 
        const expected = true;
        const actual = isCircleSorted([2, 3, 4, 5, 6])
        expect(actual).toEqual(expected);
    })
    test('should return false for an non ascending array that does not need circle sorting', () => { 
        const expected = false;
        const actual = isCircleSorted([23, 3, 20, 90, 6])
        expect(actual).toEqual(expected);
    })
    test('should return true for an ascending array once circle sorted', () => { 
        const expected = true;
        const actual = isCircleSorted([6, 2, 3, 4, 5])
        expect(actual).toEqual(expected);
    }) 
    test('should return false for a non ascending array once circle sorted', () => { 
        const expected = false;
        const actual = isCircleSorted([3, 2, 4, 5, 6])
        expect(actual).toEqual(expected);
    }) 
})

describe('should circle an array', () => { 
    test('should cycle an array to the right', () => { 
        const expected = [5,1,2,3,4]
        const actual = circleArray([1,2,3,4,5])
        expect(actual).toEqual(expected)
    }) 
})