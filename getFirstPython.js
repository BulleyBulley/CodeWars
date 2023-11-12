function getFirstPython(list) {
    //< firstName here >, < country here > of the first Python developer who has signed up; or
    // There will be no Python developers if no Python developer has signed up.
    
    let obj = list.find(o => o.language === 'Python');
    if (obj) {
        return `${obj.firstName}, ${obj.country}`
    } else return "There will be no Python developers"
}

module.exports = {getFirstPython}