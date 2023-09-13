function findMaxNumber(numbers) {
    let largestNumber = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        if (largestNumber < numbers[i]) {
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}

module.exports = findMaxNumber;
