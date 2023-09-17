function sumOfEvenSquares(numbersArr) {
    return numbersArr
        .filter((num) => num % 2 === 0)
        .map((num) => num * num)
        .reduce((acc, cur) => (acc += cur), 0);
}

module.exports = sumOfEvenSquares;
