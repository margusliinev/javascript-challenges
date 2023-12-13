function arrayIntersection(arr1, arr2) {
    let intersection = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            intersection.push(arr1[i]);
        }
    }

    return intersection;
}

module.exports = arrayIntersection;
