//create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filterList(l) {
    var filterArray = l.filter(isString)
    return filterArray
}

function isString (input) {
    return typeof input !== "string";
}

module.exports = {filterList}