function findMissingNumber(arr) {
    if (arr.length === 0) {
        return 1;
    }
    const length = arr.length + 1;

    const actualSum = arr.reduce((acc, cur) => {
        acc += cur;
        return acc;
    }, 0);
    const expectedSum = (length * (length + 1)) / 2;

    return expectedSum - actualSum;
}

module.exports = findMissingNumber;
