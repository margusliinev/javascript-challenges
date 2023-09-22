function arraySum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arraySum(arr.slice(1)) + arr[0];
}

module.exports = arraySum;
