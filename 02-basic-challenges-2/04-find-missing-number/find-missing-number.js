function findMissingNumber(numArr) {
    if (!numArr || numArr.length === 0) {
        return undefined;
    }

    const n = numArr.length + 1;
    let sumOfTotal = (n * (n + 1)) / 2;
    let sumOfNumInArray = numArr.reduce((acc, cur) => (acc += cur));

    return sumOfTotal - sumOfNumInArray;
}

module.exports = findMissingNumber;
