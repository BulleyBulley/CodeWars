function isCircleSorted(arr){
if(arr.length <= 1) {
    return true;
}
const ascendingArray = arr.map((x) => x).sort((a, b) => a - b);

for (let index = 0; index < arr.length; index++) {
    circleArray(arr)
    const comparedArrays = compareArrays(arr, ascendingArray)
    if (comparedArrays) return true;
}
return false
}

const compareArrays = (a, b) => {
    return a.every((element, index) => element === b[index]);
}

const circleArray = (arr) => {
    const popped = arr.pop()
    arr.unshift(popped)
    return arr
}

module.exports = {isCircleSorted, circleArray}