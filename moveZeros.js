//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  var sortedArray = [];
  var arrayOfZeros = [];

  if (arr == null || arr.length === 0) {
    return [];
  } else {
    sortedArray = arr.filter(function (num) {
      return num !== 0;
    });

    arrayOfZeros = arr.filter(function (num) {
      return num === 0;
    });
    return sortedArray.concat(arrayOfZeros);
  }
}
module.exports = { moveZeros };
