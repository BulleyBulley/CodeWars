function solve(arr) {
    // set can only store unique items
    const uniqueCombinations = new Set();

    function generateCombinations(index, currentCombination) {
      if (index === arr.length) {
        uniqueCombinations.add(currentCombination.join());
        return;
      }
  
      const currentArray = arr[index];
  
      if (Array.isArray(currentArray)) {
        for (const element of currentArray) {
          generateCombinations(index + 1, [...currentCombination, element]);
        }
      } else {
        generateCombinations(index + 1, [...currentCombination, currentArray]);
      }
    }
  
    generateCombinations(0, []);
  
    return uniqueCombinations.size;
  }
  

  
module.exports = {solve}
  