function inAscOrder(arr) {
    const sortedArray = arr.map((x) => x).sort((a, b) => a - b);
    const compared = compareArrays(arr, sortedArray)
    return compared
}

const compareArrays = (a, b) => {
    return a.every((element, index) => element === b[index]);
}


module.exports = {inAscOrder}