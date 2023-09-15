function arrayIntersection(arr1, arr2) {
    const arr3 = arr1.reduce((acc, cur) => {
        if (arr2.includes(cur)) {
            acc.push(cur);
        }
        return acc;
    }, []);
    return arr3;
}

module.exports = arrayIntersection;
