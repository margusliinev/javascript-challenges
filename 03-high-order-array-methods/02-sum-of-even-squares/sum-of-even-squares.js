function sumOfEvenSquares(numbers) {
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    const squaredNumbers = evenNumbers.map((num) => num * num);
    const sum = squaredNumbers.reduce((acc, cur) => {
        return (acc += cur);
    }, 0);

    return sum;
}

module.exports = sumOfEvenSquares;
