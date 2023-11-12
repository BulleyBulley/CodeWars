const {getFirstPython} = require("../getFirstPython")

  describe('get first python', () => {  
    var list1 = [
        { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
        { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
        { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
      ];
      
      var list2 = [
        { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
        { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
      ];
    test('example', () => { 
        const expected = 'Victoria, Puerto Rico'
        const actual = getFirstPython(list1)
        expect(actual).toEqual(expected);
    })
    test('example', () => { 
        const expected = 'There will be no Python developers'
        const actual = getFirstPython(list2)
        expect(actual).toEqual(expected);
    })
})