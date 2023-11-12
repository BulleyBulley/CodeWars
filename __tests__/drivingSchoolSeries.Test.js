const {passed} = require("../drivingSchoolSeries")

  describe('drivingSchoolSeries', () => { 
    test('example', () => { 
        const expected = 12
        const actual = passed([10,10,10,18,20,20])
        expect(actual).toEqual(expected);
    }) 
    test('example', () => { 
        const expected = 'No pass scores registered.'
        const actual = passed([21,22,24])
        expect(actual).toEqual(expected);
    }) 
    test('example', () => { 
        const expected = 10
        const actual = passed([3,22,9,13,20,18,2,14,20,8,23,12,7,21,21,19,20,11,18,7,13,22,11,20,9])
        expect(actual).toEqual(expected);
    }) 
    test('example', () => { 
        const expected = 11
        const actual = passed([19,16,8,11,25,10,29,22,23])
        expect(actual).toEqual(expected);
    })

})