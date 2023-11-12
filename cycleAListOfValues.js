//Implement a function which when given the arguments

// Direction to which to cycle the current value
// List of values
// Current value

// returns the value next to current value in the specified direction.

// The function should pick the next value from the other side of the list in case there are no values in the given direction.

function cycle(dir, arr, cur) {
  var arrIndex;

  if (arr.length === 1) {
    return arr[0];
  }

  // Find the current index in the array
  const curIndex = arr.indexOf(cur);

  if (curIndex === -1) {
    // If the current element is not found, return null or handle accordingly
    return null;
  }

  // Calculate the new index considering the cyclic behavior
  arrIndex = (curIndex + dir + arr.length) % arr.length;

  return arr[arrIndex];
}

module.exports = { cycle };
