function flattenArray(arr) {
    let result = [];

    for (let element of arr) {
        if (Array.isArray(element)) {
            let flattenedArray = flattenArray(element.flat());
            result.push(...flattenedArray);
        } else {
            result.push(element);
        }
    }

    return result;
}

module.exports = flattenArray;
